import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex pt-2 flex-col h-[calc(100vh-6rem)] justify-around  p-4 md:h-[calc(100vh-3rem)] items-center lg:flex-row ">
      {/* <h1>About Us</h1> */}

      <div className="w-1/2">
        <div className="flex gap-4">
          <img
            src="/About/about2.jpg"
            alt=""
            className="h-full w-[400px] object-cover rounded-md"
          />
          <div className="relative">
            <img
              src="/About/about3.jpg"
              alt=""
              className="h-[400px] w-[400px] object-cover rounded-md"
            />
            <img
              src="/About/about_dish1.png"
              alt=""
              className="h-[200px] w-[200px] object-cover rounded-md absolute
                            top-[20rem] right-16 hover:animate-spin
                            "
            />
            <img
              src="/About/leaf.png"
              alt=""
              className="h-[200px] w-[400px] object-cover rounded-md absolute
                            -top-[6rem] right-16 hover:animate-pulse
                            "
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex p-8 flex-col gap-10">
        <h1 className="text-3xl font-bold">We Make The Best Food Restaurant</h1>
        <p className="text-gray-600 text-1xl font-semibold">
          We provide you with complete meal prep which includes the packaged
          necessary <br />
          ingredients for a divine dinner as well as an easy to follow the
          recipe. As with older post,
          <br />
          this will be continously updated with edits and comments linked in
          this post as I cook <br />
          more recipes, think of more topics to write about, and find more
          resources around the <br />
          internet. This post is currently limited to my own personal
          experiences as a meal.
          <div className="flex gap-8 mt-7">
            <div className="flex flex-col gap-7 ">
              <div className="flex items-center gap-2">
                <Image src="/Icons/img2.svg" alt="" width={32} height={32} />
                <p>Fresh Food</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/Icons/img3.svg" alt="" width={32} height={32} />
                <p>Quality Maintain</p>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-2">
                <Image src="/Icons/img4.svg" alt="" width={32} height={32} />
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/Icons/img1.svg" alt="" width={32} height={32} />
                <p>24/7 Service</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <button className=" py-4 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md">
              ORDER NOW
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
