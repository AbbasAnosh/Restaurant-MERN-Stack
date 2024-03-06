"use client"
import Image from "next/image";
import React from "react";
import CountDown from "./Countdown";


const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row  md:bg-[url('/description/delivery-bg.jpg')] md:h-[70vh]">

      <div className="w-1/3 flex flex-col justify-center items-center text-center gap-5 p-6">
        <h1 className="text-purple-800 text-3xl font-bold xl:text-4xl">30 Minutes <br/> Delivery!</h1>
        <p className="text-black xl:text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, atque.
        </p>
        <div className="bg-purple-500 p-4 rounded-lg text-white font-bold tracking-wider">

        <CountDown/>
        </div>
        <button className="bg-red-500 text-white rounded-md py-3 px-6">Order Now</button>
      </div>
      <div className="w-1/3 bg-red-500 rounded-full">
        <img src="/description/delivery1.png" className="w-[600px] h-full object-contain" alt=""/>
      </div>
      <div className="w-1/3 relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;