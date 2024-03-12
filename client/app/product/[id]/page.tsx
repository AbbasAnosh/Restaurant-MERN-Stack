"use client";
import { pizzas } from "@/app/data";
import Price from "@/components/Price";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    const pizza = pizzas.find((pizza) => pizza.id === Number(params.id));
    setProduct(pizza);
  }, []);

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around md:flex-row md:gap-8 md:items-center">
      <div className="relative w-full h-1/2 md:h-[70%] bg-red rounded-lg">
        <Image src={product?.img} alt="" className="object-contain p-10" fill />
      </div>

      <div className="h-1/2 flex flex-col font-font-alt gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase font-font-base xl:text-5xl ">
          {product?.title}
        </h1>
        <p className="text-gray-600 font-font-alt">{product?.desc}</p>
        <Price
          price={product?.price}
          id={product?.id}
          options={product?.options}
        />
      </div>
    </div>
  );
};
export default SingleProductPage;
