"use client";
import Image from "next/image";
import React from "react";
import CountDown from "./Countdown";

const Offer = () => {
  return (
    <div
      className=" h-screen flex flex-col md:flex-row md:h-[60vh] p-32 items-center relative"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="text-xl font-font-base uppercase text-white">
          We Guarantee
        </h1>
        <h1 className="text-4xl font-font-alt uppercase text-yellow font-bold">
          30 minutes <br /> Delivery
        </h1>
        <p className="text-[1em] font-font-alt text-white">
          If you are having a meeting, working late at <br /> night and need an
          extra push. Let us know and we will be there
        </p>

        <div className="flex flex-row gap-3 items-center">
          {/* <CountDown /> */}
          <button className="px-7 py-4 bg-red hover:bg-yellow text-white rounded-lg">
            Order Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-[27rem] ">
        <img src="/description/delivery1.png" alt="" />
      </div>
      <div className="">
        <img
          src="/food/food1.png"
          alt=""
          className="w-[20rem] h-[20rem] object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
