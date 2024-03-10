import { Neapolitan, ItalianPizza } from "@/app/data";
import React from "react";
import MenuItem from "./MenuItem";

const SepecialMenu = () => {
  return (
    <div
      className="flex flex-col bg-[#0C0C0C] justify-center items-center pt-[4rem] pb-[4rem] pr-[6rem] pl-[6rem]"
      id="menu"
    >
      <div className="mb-[2rem] text-center">
        <h1 className="text-yellow font-font-base  text-[64px] leading-[83.2px] tracking-[0.04em] capitalize">
          Today&apos;s Special
        </h1>
      </div>

      <div className="w-full mt-[2rem] mb-[2rem] flex justify-center items-center flex-row">
        <div className="flex-1 w-full flex flex-col justify-center items-center">
          <p className="font-[600px] text-[45px] font-font-base leading-[58.5px] tracking-[0.04em] text-[#FFFFFF]">
            Italian Pizza
          </p>
          <div className="flex flex-col mt-[2rem] font-font-alt mb-[2rem] w-full">
            {ItalianPizza.map((pizza, index) => (
              <MenuItem
                key={pizza.title + index}
                title={pizza.title}
                price={pizza.price}
                tags={pizza.tags.join(" | ")}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-1 w-full h-auto">
          <img src="/food/food7.png" alt="menu__img" />
        </div>

        <div className="flex-1 w-full flex-col flex justify-center items-center ">
          <p className="font-[600px] text-[45px] leading-[58.5px] font-font-base tracking-[0.04em] text-[#FFFFFF]">
            Neapolitan Pizza
          </p>
          <div className="flex flex-col mt-[2rem] font-font-alt mb-[2rem] w-full ">
            {Neapolitan.map((item, index) => (
              <MenuItem
                key={item.title + index}
                title={item.title}
                price={item.price}
                tags={item.tags.join(" | ")}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button
          type="button"
          className="px-6 font-font-alt py-4 bg-yellow hover:bg-red font-semibold capitalize  text-white rounded-lg"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default SepecialMenu;
