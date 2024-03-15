"use client";

import { useShoppingCart } from "@/app/context/ShoppingCartContext";
import { useCartStore } from "@/app/utils/store";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { Toaster, toast } from "sonner";

// type Props = {
//   price: number;
//   id: number;
//   options?: { title: string; additionalPrice: number }[];
//   quantity?: number;
// };

type Props = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price: FC<Props> = (props) => {
  const [total, setTotal] = useState(props.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  const { addToCart } = useCartStore();

  // useEffect(() => {
  //   useCartStore.persist.rehydrate();
  // }, []);

  useEffect(() => {
    if (props.options?.length) {
      setTotal(
        quantity * props.price + props.options[selected].additionalPrice
      );
    }
  }, [quantity, selected, props]);

  const handleCart = () => {
    addToCart({
      id: props.id,
      title: props.title,
      img: props.img,
      price: total,
      ...(props.options?.length && {
        optionTitle: props.options[selected].title,
      }),
      quantity: quantity,
    });
    toast.success("The food added to the cart!");
  };

  // const { price, options } = props;
  // const [total, setTotal] = useState(price);
  // const [quantity, setQuantity] = useState(1);
  // const [selected, setSelected] = useState(0);
  // const productObj = { ...props };
  // productObj.price = total;
  // productObj.quantity = quantity;
  // useEffect(() => {
  //   setTotal(
  //     quantity * (options ? price + options[selected].additionalPrice : price)
  //   );
  // }, [quantity, selected, options, price]);
  // const { incrementItemQuantity } = useShoppingCart();
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total && total.toFixed(2)}</h2>
      <div className="flex gap-4">
        {/* {options?.map((option, index) => ( */}
        {props.options?.length &&
          props.options?.map((option, index) => (
            <button
              key={option.title}
              className="min-w-[6rem] p-2 text-semibold ring-1 font-font-alt ring-golden rounded-md"
              style={{
                background: selected === index ? "rgb(248 192 23)" : "white",
                color: selected === index ? "black" : "red",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>

      <div className="flex justify-between items-center gap-2">
        <div className="flex justify-between w-full p-2 bg-[#F1F5F9] border-2 border-golden shadow-md rounded-lg">
          <div className="flex justify-between w-full  items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="text-3xl font-bold text-red"
            >
              {"-"}
            </button>
            <span className="text-2xl font-bold font-font-alt text-black">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
              className="text-3xl font-bold text-red"
            >
              {"+"}
            </button>
          </div>
        </div>

        <button
          onClick={handleCart}
          className="uppercase w-56 text-nowrap  font-font-alt bg-yellow text-black hover:bg-red
           hover:text-white p-3 ring-1 text-xl font-semibold rounded-lg ring-golden"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;

// incrementItemQuantity(productObj)
