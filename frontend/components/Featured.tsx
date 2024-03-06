"use client";

import { featuredProducts } from "@/app/data";
import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";

const Featured = () => {
  return (
    <div className="mx-4 overflow-x-scroll no-scrollbar">
      <div className="w-max flex gap-3 ">
        {featuredProducts.map((item) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <div
              key={item.id}
              className="w-screen h-[60vh] flex flex-col items-center justify-around
              border-2 border-red-500 rounded-lg md:w-[50vw] xl:w-[26vw] xl:h-[90vh] group"
            >
              <div
                className={`relativeitems-center rounded-lg pt-4 overflow-hidden group transition-transform
               w-[350px] h-[350px] ${isHovered ? "scale-y-95" : "scale-100"}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transformOrigin: "center",
                }}
              >
                <span
                  className={`${
                    isHovered
                      ? "w-full h-[350px] rounded bg-purple-500 absolute ease-out duration-500 bottom-0 left-0"
                      : "w-full h-40 rounded bg-red-600 absolute bottom-0 left-0 ease-out duration-500"
                  }`}
                ></span>

                <img
                  src={item.img}
                  alt="Card Image"
                  className="object-contain w-44 h-44 left-20 top-24"
                  style={{
                    transform: isHovered ? "scale(1.3)" : "scale(1)",
                    transition: "transform 0.3s ease",
                    position: "absolute",
                  }}
                />
              </div>

              <div className=" flex flex-col gap-1 p-6">
                <h1 className="text-xl font-bold uppercase xl:text-1xl 2xl:text-2xl">
                  {item.title}
                </h1>
                <p className="mb-2 text-gray-600">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${item.price}</span>

                  <button className="bg-red-500 hover:bg-red-600 text-white text-2xl p-2 rounded-md">
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
