"use client";
import { useShoppingCart } from "@/app/context/ShoppingCartContext";
import { pizzas } from "@/app/data";
import Link from "next/link";
import React from "react";

const CategoryPage: React.FC = () => {
  const { incrementItemQuantity } = useShoppingCart();

  return (
    <div className="mr-2 ml-2 lg:mr-[10rem] lg:ml-[10rem] mt-[3rem] mb-[3rem]">
      <div className="mb-12">
        <h1 className="text-xl font-medium font-font-base text-yellow">
          Our Menu
        </h1>
        <div className="flex flex-col py-4 gap-3">
          <h1 className="text-2xl font-bold font-font-alt">Our Food Menu</h1>
          <p className="font-semibold text-gray-500">
            Introducing our tantalizing food menu, filled with exquisite <br />{" "}
            flavors and culinary delights to satisfy every palate.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {pizzas.map((item) => (
          <Link
            href={`/product/${item.id}`}
            key={item.id}
            className="group relative cursor-pointer items-center border-2 bg-golden border-golden justify-center overflow-hidden transition-shadow
           hover:shadow-xl hover:shadow-black/30 rounded-lg"
          >
            <div className="h-80 w-52 flex items-center justify-center mx-auto">
              <img
                className="h-48 w-48 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={item.img}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-300 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <span className="bg-golden"></span>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col gap-3 items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 mb-7 ">
              <h1 className="font-dmserif text-2xl font-bold font-font-base text-white">
                {item.title}
              </h1>
              <h2 className="mb-3 text-lg italic text-white bg-red p-4 rounded-lg opacity-0 font-font-alt transition-opacity duration-300 group-hover:opacity-100">
                {item.price}
              </h2>

              {/* <button
                onClick={() => {
                  incrementItemQuantity(item);
                }}
                className="uppercase bg-red hover:bg-yellow p-2 rounded-md py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60"
              >
                Add to Cart
              </button> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
