"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItemProps = {
  id: number;
  quantity?: number;
  title?: string;
  desc?: string;
  img?: string;
  price?: number;
  options?: { title: string; additionalPrice: number }[];
};

type ShoppingCartContextProps = {
  getItemQuantity: (id: number) => number;
  incrementItemQuantity: (item: CartItemProps) => void;
  decrementItemQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItemProps[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const incrementItemQuantity = (newItem: CartItemProps) => {
    setCartItems((currentItems: CartItemProps[]) => {
      const existingItem = currentItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: (item?.quantity || 0) + (newItem.quantity || 0),
                price: (item.price || 0) + (newItem.price || 0),
              }
            : item
        );
      } else {
        const updatedItem = { ...newItem, quantity: newItem.quantity };
        return [...currentItems, updatedItem];
      }
    });
  };

  const decrementItemQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            item.quantity = item.quantity ? item.quantity - 1 : 0;
            return { ...item };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => (item.quantity ? quantity + item?.quantity : 0),
    0
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        incrementItemQuantity,
        decrementItemQuantity,
        removeItem,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
