"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 0,
    title: "always fresh & always crispy & always hot",
    image: "/temporary/p3.png",
  },
  {
    id: 1,
    title: "we deliver your order wherever you are in NY",
    image: "/temporary/p7.png",
  },
  {
    id: 2,
    title: "the best pizza to share with your family",
    image: "/temporary/p9.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex pt-2 flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50 items-center"
      style={{ backgroundImage: "url('/slider_background.jpg')" }}
    >
      <div className="md:w-1/2 md:p-4 flex items-center justify-center flex-col gap-4  text-white font-bold">
        <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-4xl xl:text-5xl">
          {data[currentSlide].title}
        </h1>
        <div className="flex items-center gap-2">
          <div className="rounded-md shadow">
            <Link
              href="/"
              className="w-full flex items-center justify-center px-3 py-3 text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-600 hover:text-white focus:ring ring-offset-2 ring-pink-400 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Order Now
            </Link>
          </div>
          {/* <button className="bg-red-500 text-white py-3 px-3 md:py-4 md:px-8 rounded-md">
            Order Now
          </button> */}
          <div className="flex items-center gap-2 cursor-pointer bg-orange-300 py-3 px-3 md:py-4 md:px-4 rounded-md">
            <Image src="/phone.png" alt="" width={20} height={20} />
            <span>403 903 2347</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-2 ">
          {data.map((item, index) => {
            return (
              <div
                className={`h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border ${
                  item.id === currentSlide
                    ? "h-full w-full bg-red-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100"
                    : "border-gray-100"
                }
                `}
              >
                <img
                  src={item.image}
                  alt="Your Image"
                  className="object-cover w-44 h-44 p-2"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="lg:w-1/2 lg:p-4 justify-center relative flex"
        style={{ backgroundImage: "url('/slider-image.png')" }}
      >
        <img
          src={data[currentSlide].image}
          alt="Your Image"
          className="object-cover w-96 h-96"
        />
        <div className="absolute h-32 w-32 left-[450px] top-1 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 flex items-center justify-center">
          <p className="text-[20px] text-center font-bold text-white">
            50 % OFF
          </p>
          {/* <img src="/slider-image.png" alt='' className='h-[200px] w-[200px] object-cover rounded-md absolute
                            top-[20rem] right-16 -z-10
                    '/> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
