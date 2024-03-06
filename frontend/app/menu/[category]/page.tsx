import { pizzas } from "@/app/data";
import MenuCard from "@/components/MenuCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="m-4">
      <div className="mb-12">
        <h1 className="text-xl font-medium text-yellow-400">Our Menu</h1>
        <div className="flex flex-col py-4 gap-3">
          <h1 className="text-2xl font-bold">Our Food Menu</h1>
          <p className="font-semibold text-gray-500">
            Introducing our tantalizing food menu, filled with exquisite <br />{" "}
            flavors and culinary delights to satisfy every palate.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
        {pizzas.map((item) => (
          <Link
            href={`/product/${item.id}`}
            key={item.id}
            className="group relative cursor-pointer items-center border-2 border-red-500 justify-center overflow-hidden transition-shadow
           hover:shadow-xl hover:shadow-black/30 rounded-lg"
          >
            <div className="h-96 w-72 flex items-center justify-center mx-auto">
              <img
                className="h-54 w-54 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={item.img}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-300 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col gap-3 items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 mb-7 ">
              <h1 className="font-dmserif text-2xl font-bold text-white">
                {item.title}
              </h1>
              <h2 className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.price}
              </h2>
              <button className="uppercase bg-red-500 p-2 rounded-md py-2 px-3.5 font-com text-sm text-white shadow shadow-black/60">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>

    // <div className="flex flex-wrap text-red-500">
    //   {pizzas.map((item) => (
    //     <Link className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
    //       href={`/product/${item.id}`} key={item.id}>

    //       {item.img && (
    //         <div className="relative h-[80%]">
    //           <Image src={item.img} alt="" fill className="object-contain"/>
    //         </div>
    //       )}

    //       <div className="flex items-center justify-between font-bold">
    //         <h1 className="text-2xl uppercase p-2">{item.title}</h1>
    //         <h2 className="group-hover:hidden text-xl">${item.price}</h2>
    //         <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
    //       </div>
    //     </Link>
    //   ))}
    // </div>
  );
};

export default CategoryPage;
