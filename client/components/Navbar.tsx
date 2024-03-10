import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import MyIcon from "./MyIcon";

const Navbar = () => {
  const user = false;
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
        <Link href="/" className="hover:text-red">
          Home
        </Link>
        <Link href="/menu" className="hover:text-red">
          Menu
        </Link>
        <Link href="/contact" className="hover:text-red">
          Contact
        </Link>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end">
        {/* <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src="/phone.png" alt='' width={20} height={20} />
          <span>403 903 2347</span>
        </div> */}
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
