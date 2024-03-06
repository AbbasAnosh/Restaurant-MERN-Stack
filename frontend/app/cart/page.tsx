import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="font-[sans-serif]">
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-2 p-10 bg-white overflow-x-auto">
          <div className="flex border-b pb-4">
            <h2 className="text-2xl font-extrabold text-[#333] flex-1">
              Shopping Cart
            </h2>
            <h3 className="text-xl font-extrabold text-[#333]">3 Items</h3>
          </div>
          <div>
            <table className="mt-6 w-full border-collapse divide-y">
              <thead className="whitespace-nowrap text-left">
                <tr>
                  <th className="text-base text-[#333] p-4">Description</th>
                  <th className="text-base text-[#333] p-4">Quantity</th>
                  <th className="text-base text-[#333] p-4">Price</th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap divide-y">
                <tr>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-6 w-max">
                      <div className="h-36 shrink-0">
                        <img
                          src="/food/food1.png"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-md font-bold text-[#333]">
                          Black T-Shirt
                        </p>
                        <button
                          type="button"
                          className="mt-4 font-semibold text-red-400 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex divide-x border w-max">
                      <button
                        type="button"
                        className="bg-gray-100 px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path
                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md"
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="bg-gray-800 text-white px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <h4 className="text-md font-bold text-[#333]">$18.5</h4>
                  </td>
                </tr>
                <tr>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-6 w-max">
                      <div className="h-36 shrink-0">
                        <img
                          src="/food/food2.png"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-md font-bold text-[#333]">
                          Gray T-Shirt
                        </p>
                        <button
                          type="button"
                          className="mt-4 font-semibold text-red-400 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex divide-x border w-max">
                      <button
                        type="button"
                        className="bg-gray-100 px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path
                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md"
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="bg-gray-800 text-white px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <h4 className="text-md font-bold text-[#333]">$18</h4>
                  </td>
                </tr>
                <tr>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-6 w-max">
                      <div className="h-36 shrink-0">
                        <img
                          src="/food/food6.png"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-md font-bold text-[#333]">
                          Black T-Shirt
                        </p>
                        <button
                          type="button"
                          className="mt-4 font-semibold text-red-400 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex divide-x border w-max">
                      <button
                        type="button"
                        className="bg-gray-100 px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path
                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md"
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="bg-gray-800 text-white px-4 py-2 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <h4 className="text-md font-bold text-[#333]">$15.5</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-50 p-10">
          <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">
            Order Summary
          </h3>
          <ul className="text-[#333] divide-y mt-6">
            <li className="flex flex-wrap gap-4 text-md py-4">
              Subtotal (3 items){" "}
              <span className="ml-auto font-bold">$37.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-4">
              Service Cost <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-4">
              Delivery Cost <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
              TOTAL(INCL. VAT) <span className="ml-auto">$45.00</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
    // <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">

    //   <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">

    //     <div className="flex items-center justify-between mb-4">
    //       <Image src="/temporary/p1.png" alt="" width={100} height={100} />
    //       <div className="">
    //         <h1 className="uppercase text-xl font-bold">sicilian</h1>
    //         <span>Large</span>
    //       </div>
    //       <h2 className="font-bold">$79.90</h2>
    //       <span className="cursor-pointer">X</span>
    //     </div>

    //     <div className="flex items-center justify-between mb-4">
    //       <Image src="/temporary/p1.png" alt="" width={100} height={100} />
    //       <div className="">
    //         <h1 className="uppercase text-xl font-bold">sicilian</h1>
    //         <span>Large</span>
    //       </div>
    //       <h2 className="font-bold">$79.90</h2>
    //       <span className="cursor-pointer">X</span>
    //     </div>

    //     <div className="flex items-center justify-between mb-4">
    //       <Image src="/temporary/p1.png" alt="" width={100} height={100} />
    //       <div className="">
    //         <h1 className="uppercase text-xl font-bold">sicilian</h1>
    //         <span>Large</span>
    //       </div>
    //       <h2 className="font-bold">$79.90</h2>
    //       <span className="cursor-pointer">X</span>
    //     </div>
    //   </div>

    //   <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
    //     <div className="flex justify-between">
    //       <span className="">Subtotal (3 items)</span>
    //       <span className="">$81.70</span>
    //     </div>
    //     <div className="flex justify-between">
    //       <span className="">Service Cost</span>
    //       <span className="">$0.00</span>
    //     </div>
    //     <div className="flex justify-between">
    //       <span className="">Delivery Cost</span>
    //       <span className="text-green-500">FREE!</span>
    //     </div>
    //     <hr className="my-2" />
    //     <div className="flex justify-between">
    //       <span className="">TOTAL(INCL. VAT)</span>
    //       <span className="font-bold">$81.70</span>
    //     </div>
    //     <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
    //       CHECKOUT
    //     </button>
    //   </div>
    // </div>
  );
};

export default CartPage;
