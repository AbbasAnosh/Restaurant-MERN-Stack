import React from "react";

type Props = {
  title: string;
  price: string;
  tags: string[];
};

const MenuItem = ({ title, price, tags }: Props) => (
  <div className="w-full mt-[1rem] mb-[1rem] flex flex-col">
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <p className=" text-yellow font-font-alt">{title}</p>
      </div>
      <div className="w-[90px] h-[1px] bg-yellow mr-[1rem] ml-[1rem]" />
      <div className="flex justify-end items-end">
        <p className="text-[#FFFFFF] font-[700px] tracking-[0.04em] capitalize leading-[29.9px] text-[23px]">
          {price}
        </p>
      </div>
    </div>

    <div className="w-full mt-[0.2rem]">
      <p className="font-[400px] tracking-[0.04em] text-white capitalize text-[16px]">
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
