import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="md:h-64 p-4 lg:px-20 xl:px-40 bg-[#212121] text-white flex items-center justify-between">
      <div className="flex flex-col gap-3">
        <div className="">
          <Link
            href="/"
            className="font-bold text-xl text-white bg-red-500 px-3 py-2 rounded-lg"
          >
            YUMMY
          </Link>
        </div>
        <p className="font-medium">
          Lorem ipsum dolor, sit <br /> amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-xl">Support</h1>
        <div className="font-medium flex flex-col gap-2">
          <p>Help & Contact Us</p>
          <p>Return & Refund</p>
          <p>Online Stores</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-xl">My Orders</h1>
        <div className="font-medium flex flex-col gap-2">
          <p>Burgers</p>
          <p>Gift Offers</p>
          <p>Crispy Flavours</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-xl">Our Services</h1>
        <div className="font-medium flex flex-col gap-2">
          <p>Payment Methods</p>
          <p>Free Shipping From 75</p>
          <p>Birthday Parties</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-xl">Contact Us</h1>
        <div className="font-medium flex flex-col gap-2">
          <p>220 Seton Grove, SE</p>
          <p>Call Us: 40390323477</p>
          <p>abbasalianosh@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
