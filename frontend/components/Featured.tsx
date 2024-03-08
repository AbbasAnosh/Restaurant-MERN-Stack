"use client";

import { featuredProducts } from "@/app/data";
import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";

const Featured = () => {
  return (
    <div className="mx-4 overflow-x-scroll no-scrollbar mb-[6rem]">
      <div className="text-center mb-[4rem] text-yellow font-font-base text-[64px] leading-[83.2px] tracking-[0.04em] capitalize">
        <h1>Popular Dishes</h1>
      </div>
      <div className="w-max flex gap-3 ">
        {featuredProducts.map((item) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <div
              key={item.id}
              className="w-screen flex flex-col items-center justify-around
              border-2 border-golden rounded-lg  xl:w-[24vw] h-[70vh] group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`relativeitems-center rounded-lg pt-4 overflow-hidden group transition-transform
               w-[350px] h-[350px] ${isHovered ? "scale-y-95" : "scale-100"}`}
                style={{
                  transformOrigin: "center",
                }}
              >
                <span
                  className={`${
                    isHovered
                      ? "w-full h-[350px] rounded bg-yellow absolute ease-out duration-500 bottom-0 left-0"
                      : "w-full h-32 rounded bg-[#fee2e2] absolute bottom-0 left-0 ease-out duration-500"
                  }`}
                ></span>

                <img
                  src={item.img}
                  alt="Card Image"
                  className="object-contain w-36 h-36 left-24 top-24"
                  style={{
                    transform: isHovered ? "scale(1.3)" : "scale(1)",
                    transition: "transform 0.3s ease",
                    position: "absolute",
                  }}
                />
              </div>

              <div className=" flex flex-col max-h-[30vh] gap-1 p-4">
                <h1 className="text-xl font-bold uppercase xl:text-1xl font-font-base ">
                  {item.title}
                </h1>
                <p className="mb-2 text-gray-500 line-clamp-3 font-font-alt">
                  {item.desc}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold font-font-alt text-yellow">
                    ${item.price}
                  </span>

                  <button className="bg-yellow hover:text-red text-white text-2xl p-2 rounded-md">
                    <MdAddShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;

// transition-all group-hover:w-full group-hover:h-full
