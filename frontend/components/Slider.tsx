"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 0,
    title: "perpetually flavorful and perfectly cooked 🌟. ",
    image: "/temporary/p3.png",
  },
  {
    id: 1,
    title: "We offer delivery to any location in New York 🚚. ",
    image: "/temporary/p7.png",
  },
  {
    id: 2,
    title: "The ultimate family-style pizza 🍕👨‍👩‍👧‍👦. ",
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
      style={{ backgroundImage: "url('/contact-bg.jpg')" }}
    >
      <div className="md:w-1/2 md:p-4 flex items-center justify-center flex-col gap-4 font-bold">
        <h1 className="text-4xl text-center font-font-alt uppercase p-4 md:p-10 md:text-4xl xl:text-4xl text-yellow">
          {data[currentSlide].title}
        </h1>
        <div className="flex items-center gap-2">
          <div className="rounded-md shadow">
            <Link
              href="/"
              className="w-full flex items-center justify-center px-3 py-3 text-base leading-6 font-medium font-font-alt rounded-md text-white bg-yellow hover:bg-red focus:ring ring-offset-2 ring-pink-400 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Order Now
            </Link>
          </div>
          {/* <button className="bg-red-500 text-white py-3 px-3 md:py-4 md:px-8 rounded-md">
            Order Now
          </button> */}
          <div className="flex items-center font-font-alt gap-2 cursor-pointer bg-red text-white py-3 px-3 md:py-4 md:px-4 rounded-md">
            <Image src="/phone.png" alt="" width={20} height={20} />
            <span>403 903 2347</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-2 ">
          {data.map((item, index) => {
            return (
              <div
                className={`h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border ${
                  item.id === currentSlide
                    ? "h-full w-full bg-yellow rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100"
                    : "border-red"
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
      <div className="lg:w-1/2 lg:p-4 justify-center relative flex">
        <img
          src={data[currentSlide].image}
          alt="Your Image"
          className="object-cover w-96 h-96"
        />
        <div className="absolute h-32 w-32 left-[450px] top-1 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 flex items-center justify-center">
          <p className="text-[20px] text-center font-bold font-font-alt text-white">
            50 % OFF
          </p>
          {/* <img src="/slider-image.png" alt='' className='h-[200px] w-[200px] object-cover rounded-md absolute
                            top-[20rem] right-16 -z-10
                    '/> */}
          {/* style={{ backgroundImage: "url('/slider-image.png')" }} */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
