import Link from "next/link";
import React from "react";
import { menu } from "../data";

const MenuPage = () => {
  return (
    <div className="p-4 mt-[4rem] mb-[4rem] lg:px-20 xl:px-40 h-[calc(100vh-6rem) md:h-[calc(100vh-9rem)]  items-center">
      <div className="mb-[4rem]">
        <h1 className="text-4xl font-font-base font-bold tracking-wide capitalize text-yellow">
          Explore categories
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
        {menu.map((category) => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className="bg-golden items-center rounded-lg flex flex-col p-6"
          >
            <div
              className={`text-${category.color} items-center justify-center`}
            >
              <div>
                <h1 className="uppercase font-bold text-center mb-4 font-font-base text-xl">
                  {category.title}
                </h1>
              </div>
              <img
                src={`${category.img}`}
                alt=""
                className="w-full h-56 object-contain"
              />
              <div>
                <p className="text-sm my-8 font-font-alt">{category.desc}</p>
                <button className="px-4 py-2 rounded-md bg-red text-semibold hover:text-semibold text-white hover:bg-yellow hover:text-black text-semibold">
                  Explore
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
