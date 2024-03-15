import React from "react";

const Description = () => {
  return (
    <div className="flex flex-col md:mt-[6rem] mt-[3rem] mb-[3rem] md:mb-[6rem] h-full lg:justify-around md:h-[calc(100vh-3rem)] items-center ">
      <div>
        <h1 className="text-yellow text-[48px] mb-[3rem]  md:text-[64px] leading-[83.2px] tracking-[0.04em] font-font-base capitalize">
          Why our pizza best?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[3rem] lg:gap-[7rem]">
        <div className="flex flex-col gap-24">
          <div className="relative flex flex-col gap-4">
            <h1 className="font-bold text-xl font-font-base">
              The Highest Quality
            </h1>
            <span className="absolute -top-7 -left-5 text-6xl font-font-alt font-bold text-gray-400 -z-20">
              01
            </span>
            <p className="font-medium text-gray-600 font-font-alt">
              Lorem ipsum dolor sit amet consectetur,
              <br /> adipisicing elit.
            </p>
          </div>
          <div className="relative flex flex-col gap-4">
            <h1 className="font-bold text-xl font-font-base">Finest Taste</h1>
            <span className="absolute -top-7 -left-5 text-6xl font-font-alt font-bold text-gray-400 -z-20">
              03
            </span>
            <p className="font-medium text-gray-600 font-font-alt">
              Lorem ipsum dolor sit amet consectetur,
              <br /> adipisicing elit.
            </p>
          </div>
        </div>
        <div className="relative hidden xl:flex">
          <img
            src="/description/leaf1.png"
            alt=""
            className="w-24 h-24 absolute hidden xl:flex"
          />
          <img
            src="/description/dish.png"
            alt=""
            className="animate-spin hover:animate-none w-80 h-80 lg:w-[30rem] lg:h-[30rem] "
          />
          <img
            src="/description/leaf2.png"
            alt=""
            className="w-34 h-24 absolute -right-[5rem] top-72 hidden xl:flex object-contain"
          />
          <img
            src="/description/leaf3.png"
            alt=""
            className="w-52 h-40 absolute top-72 right-34 object-contain hidden xl:flex"
          />
        </div>
        <div className="flex flex-col gap-24">
          <div className="relative flex flex-col gap-4">
            <h1 className="font-bold text-xl font-font-base">
              The Best Ingredient
            </h1>
            <span className="absolute -top-7 -left-5 text-6xl font-font-alt font-bold text-gray-400 -z-20">
              02
            </span>
            <p className="font-medium text-gray-600 font-font-alt">
              Lorem ipsum dolor sit amet consectetur,
              <br /> adipisicing elit.
            </p>
          </div>
          <div className="relative flex flex-col gap-4">
            <h1 className="font-bold text-xl font-font-base">Well Cooked</h1>
            <span className="absolute -top-7 -left-5 text-6xl font-font-alt font-bold text-gray-400 -z-20">
              04
            </span>
            <p className="font-medium text-gray-600 font-font-alt">
              Lorem ipsum dolor sit amet consectetur,
              <br /> adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
