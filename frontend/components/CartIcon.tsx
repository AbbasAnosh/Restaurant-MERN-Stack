import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

const CartIcon = () => {
  return (
    //   <Link href="/cart" className='flex items-center relative'>
    //       {/* <div className='relative w-12 h-12 md:w-5 md:h-5'> */}
    //           {/* <Image src="/cart.png" alt='' fill /> */}
    //           <RiShoppingCart2Line className='w-16 h-8'/>
    //       {/* </div> */}
    //       <span className='absolute -top-4 left-12 bg-red-500 rounded-full'>3</span>
    //   </Link>
    <Link
      href="/cart"
      className="relative inline-flex justify-center items-center rounded-lg"
    >
      <RiShoppingCart2Line className="w-16 h-8 text-yellow hover:text-red" />
      <span className="absolute top-1 end-5 inline-flex items-center py-0.5 bg-red px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white">
        3
      </span>
    </Link>
  );
};

export default CartIcon;
