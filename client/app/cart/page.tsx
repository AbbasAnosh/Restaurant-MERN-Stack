"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useCartStore } from "../utils/store";
// import { useShoppingCart } from "../context/ShoppingCartContext";

const CartPage = () => {
  // const {
  //   getItemQuantity,
  //   incrementItemQuantity,
  //   decrementItemQuantity,
  //   cartItems,
  //   removeItem,
  //   cartQuantity,
  // } = useShoppingCart();

  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  // useEffect(() => {
  //   useCartStore.persist.rehydrate();
  // }, []);

  return (
    <div className="font-[sans-serif]">
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-2 p-10 bg-white overflow-x-auto">
          <div className="flex border-b pb-4 border-red">
            <h2 className="text-2xl font-font-base font-extrabold text-[#333] flex-1">
              Shopping Cart
            </h2>
            <h3 className="text-xl bg-golden p-3 rounded-lg font-extrabold text-[#333] font-font-base">
              {/* {cartQuantity} */}
              {totalItems}
            </h3>
          </div>
          <div>
            <table className="mt-6 w-full border-collapse divide-y">
              <thead className="whitespace-nowrap text-left">
                <tr>
                  <th className="text-base text-[#333] font-font-alt p-4">
                    Description
                  </th>
                  <th className="text-base text-[#333] font-font-alt p-4">
                    Quantity
                  </th>
                  <th className="text-base text-[#333] font-font-alt p-4">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap divide-y text-yellow">
                {products.map((cartItem) => {
                  return (
                    <tr>
                      <td className="py-5 px-4">
                        <div className="flex items-center gap-6 w-max">
                          <div className="shrink-0 bg-golden rounded-lg">
                            <img
                              src={cartItem.img}
                              className="w-40 h-40 object-contain"
                            />
                          </div>
                          <div>
                            <p className="text-md font-font-alt font-bold text-[#333]">
                              {cartItem.title}
                            </p>
                            <button
                              onClick={() => removeFromCart(cartItem)}
                              type="button"
                              className="mt-4 font-semibold font-font-alt text-red text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-4">
                        <div className="flex divide-x  w-max">
                          {/* <button
                            onClick={() => decrementItemQuantity(cartItem.id)}
                            type="button"
                            className="bg-red text-white px-4 py-2 font-semibold"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 fill-current"
                              viewBox="0 0 124 124"
                              fill="#FFFFFF"
                            >
                              <path
                                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </button> */}
                          <div className="grid grid-cols-2 divide-x-2 justify-center items-center gap-3  divide-red bg-golden p-3 rounded-lg text-gray-700 font-font-alt font-semibold">
                            <div className="text-center">
                              {cartItem.optionTitle}
                            </div>
                            <div className="text-center">{totalItems}</div>
                          </div>
                          {/* <button
                            onClick={() => incrementItemQuantity(cartItem)}
                            type="button"
                            className="bg-red text-white px-4 py-2 font-semibold"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 fill-current"
                              viewBox="0 0 42 42"
                              fill="#FFFFFF"
                            >
                              <path
                                d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </button> */}
                        </div>
                      </td>
                      <td className="py-6 px-4">
                        <h4 className="text-md font-bold text-[#333]">
                          {/* {cartItem && cartItem.price?.toFixed(2)} */}$
                          {totalPrice.toFixed(2)}
                        </h4>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-golden p-10">
          <h3 className="text-xl font-font-base font-extrabold text-[#333] border-b pb-4">
            Order Summary
          </h3>
          <ul className="text-[#333] divide-y mt-6">
            <li className="flex font-font-alt flex-wrap gap-4 text-md py-4">
              Subtotal{" "}
              <span className="ml-auto font-font-alt font-bold">
                ${totalPrice?.toFixed(2)}
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-4">
              Service Cost <span className="ml-auto font-bold">$0.00</span>
            </li>
            <li className="flex font-font-alt flex-wrap gap-4 text-md py-4">
              Delivery Cost <span className="ml-auto font-bold">FREE!</span>
            </li>
            <li className="flex flex-wrap gap-4 font-font-alt text-md py-4 font-bold">
              TOTAL <span className="ml-auto">${totalPrice.toFixed(2)}</span>
            </li>
          </ul>
          <Link href="/checkout">
            <button
              type="button"
              className="mt-6 text-md px-6 py-2.5 w-full bg-yellow text-black font-font-alt hover:bg-red hover:text-white rounded"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
