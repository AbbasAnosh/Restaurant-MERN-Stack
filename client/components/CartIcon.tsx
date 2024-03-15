"use client";

import { useCartStore } from "@/app/utils/store";
// import { useShoppingCart } from "@/app/context/ShoppingCartContext";
import Link from "next/link";
import React, { useEffect } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

const CartIcon = () => {
  // const { cartQuantity } = useShoppingCart();

  const { totalItems } = useCartStore();

  // useEffect(() => {
  //   useCartStore.persist.rehydrate();
  // }, []);

  // useEffect(() => {
  //   useCartStore.persist.rehydrate();
  // }, []);
  return (
    <Link
      href="/cart"
      className="relative inline-flex justify-center items-center rounded-lg"
    >
      <RiShoppingCart2Line className="w-16 h-8 text-black hover:text-red" />
      <span className="absolute top-1 end-5 inline-flex items-center py-0.5 bg-red px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 text-white">
        {/* {cartQuantity} */}
        {totalItems}
      </span>
    </Link>
  );
};

export default CartIcon;
