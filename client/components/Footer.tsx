import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-5 text-start gap-4 md:flex-row md:gap-4 md:items-center md:justify-between md:h-64 p-4 lg:px-20 xl:px-40 bg-[#212121] text-white">
      <div className="flex flex-col gap-4">
        {" "}
        <h1 className="font-bold font-font-base mb-5 text-xl text-golden">
          Contact Us
        </h1>
        <div className="flex flex-col font-font-alt gap-4 tracking-wider">
          <p>220 Seton Grove, SE</p>
          <p>4039032347</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 md:items-center">
        <Link
          href="/"
          className="font-bold text-2xl tracking-wider mb-3 text-yellow bg-red px-3 py-2 rounded-lg"
        >
          YUMMY
        </Link>
        <p className="font-medium text-wrap">
          "The best way to find yourself is to lose yourself in the <br />{" "}
          service of others"
        </p>
        <div className="flex gap-4 text-center text-golden">
          <FaFacebook />
          <FaSquareInstagram />
          <FaSquareTwitter />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold font-font-base text-golden mb-4 tracking-wider">
          Working Hours
        </h1>
        <div className="font-font-alt mb-2 tracking-wider">
          <p>Monday - Friday</p>
          <p className="">08:00 am - 12:00 pm</p>
        </div>
        <div className="tracking-wider">
          <p>Saturday-Sunday</p>
          <p>07:00 am - 11:00 pm</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
