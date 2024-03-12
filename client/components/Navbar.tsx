"use client";

import React, { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import MyIcon from "./MyIcon";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const user = false;
  const [isActive, setIsActive] = useState(links[0].id);
  return (
    <div className="h-12 p-4 flex items-center justify-between border-b-2 border-b-yellow uppercase md:h-24 lg:px-20 xl:px-40">
      <div>
        <Link
          href="/"
          className="text-3xl md:font-bold md:text-center font-[font-alt] text-red"
        >
          YUMMY
        </Link>
      </div>
      <div className="hidden md:flex gap-4 font-bold tracking-wider font-font-base">
        {links.map((link) => (
          <Link
            href={link.url}
            onClick={() => setIsActive(link.id)}
            className={`${link.id === isActive ? "text-red" : "text-black"}`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end">
        {!user ? (
          <Link href="/login" className="text-red hover:text-yellow">
            <MyIcon />
          </Link>
        ) : (
          <Link href="/order" className="font-font-base">
            Order
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
