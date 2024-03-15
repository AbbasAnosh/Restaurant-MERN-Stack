"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import MyIcon from "./MyIcon";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(links[0].id);
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-golden text-white absolute left-0 top-12 md:top-32 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((link) => (
            <Link
              className={`hover:text-red ${
                open && isActive === link.id ? "text-red" : "text-black"
              }`}
              href={link.url}
              key={link.id}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link
              href="/loign"
              onClick={() => setOpen(false)}
              className=" text-black hover:text-red"
            >
              <MyIcon />
            </Link>
          ) : (
            <Link href="/orders">Orders</Link>
          )}
          <Link
            href="/cart"
            className="text-black hover:text-red"
            onClick={() => setOpen(false)}
          >
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
