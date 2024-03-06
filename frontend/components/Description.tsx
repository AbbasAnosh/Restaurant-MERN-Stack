import React from "react";

const Description = () => {
  return (
    <div className="flex pt-2 flex-col h-[calc(100vh-6rem)] justify-around md:h-[calc(100vh-3rem)] items-center lg:flex-row ">
      <div className="flex flex-col gap-24">
        <div className="relative flex flex-col gap-4">
          <h1 className="font-bold text-xl">The Highest Quality</h1>
          <span className="absolute -top-7 -left-5 text-6xl font-bold text-gray-400 -z-20">
            01
          </span>
          <p className="font-medium text-gray-600">
            Lorem ipsum dolor sit amet consectetur,
            <br /> adipisicing elit.
          </p>
        </div>
        <div className="relative flex flex-col gap-4">
          <h1 className="font-bold text-xl">Finest Taste</h1>
          <span className="absolute -top-7 -left-5 text-6xl font-bold text-gray-400 -z-20">
            03
          </span>
          <p className="font-medium text-gray-600">
            Lorem ipsum dolor sit amet consectetur,
            <br /> adipisicing elit.
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          src="/description/leaf1.png"
          alt=""
          className="w-24 h-24 absolute"
        />
        <img
          src="/description/dish.png"
          alt=""
          className="hover:animate-spin"
        />
        <img
          src="/description/leaf2.png"
          alt=""
          className="w-34 h-24 absolute -right-[5rem] top-72 object-contain"
        />
        <img
          src="/description/leaf3.png"
          alt=""
          className="w-52 h-40 absolute top-72 right-34 object-contain"
        />
      </div>
      <div className="flex flex-col gap-24">
        <div className="relative flex flex-col gap-4">
          <h1 className="font-bold text-xl">The Best Ingredient</h1>
          <span className="absolute -top-7 -left-5 text-6xl font-bold text-gray-400 -z-20">
            02
          </span>
          <p className="font-medium text-gray-600">
            Lorem ipsum dolor sit amet consectetur,
            <br /> adipisicing elit.
          </p>
        </div>
        <div className="relative flex flex-col gap-4">
          <h1 className="font-bold text-xl">Well Cooked</h1>
          <span className="absolute -top-7 -left-5 text-6xl font-bold text-gray-400 -z-20">
            04
          </span>
          <p className="font-medium text-gray-600">
            Lorem ipsum dolor sit amet consectetur,
            <br /> adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
