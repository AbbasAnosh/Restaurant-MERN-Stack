import React from "react";

const OrdersPage = () => {
  return (
    // <div className="overflow-x-auto p-4 no-scrollbar">
    //   <table className="min-w-full bg-white font-[sans-serif]">
    //     <thead className="bg-gray-100 whitespace-nowrap">
    //       <tr>
    //         <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
    //           Order ID
    //         </th>
    //         <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
    //           Status
    //         </th>
    //         <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
    //           Price
    //         </th>
    //         <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
    //           Products
    //         </th>
    //         <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
    //           Date
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody className="whitespace-nowrap">
    //       <tr className="hover:bg-gray-50">
    //         <td className="px-6 py-4 text-base">1237861238721</td>
    //         <td className="px-6 py-4 text-base">john@example.com</td>
    //         <td className="px-6 py-4 text-base">Admin</td>
    //         <td className="px-6 py-4 text-base">2022-05-15</td>
    //         <td className="px-6 py-4">2022-05-15</td>
    //       </tr>
    //       <tr className="hover:bg-gray-50">
    //         <td className="px-6 py-4 text-base">Jane Smith</td>
    //         <td className="px-6 py-4 text-base">jane@example.com</td>
    //         <td className="px-6 py-4 text-base">User</td>
    //         <td className="px-6 py-4 text-base">2022-07-20</td>
    //         <td className="px-6 py-4"></td>
    //       </tr>
    //       <tr className="hover:bg-gray-50">
    //         <td className="px-6 py-4 text-base">Alen Doe</td>
    //         <td className="px-6 py-4 text-base">alen@example.com</td>
    //         <td className="px-6 py-4 text-base">User</td>
    //         <td className="px-6 py-4 text-base">2022-07-21</td>
    //         <td className="px-6 py-4"></td>
    //       </tr>
    //       <tr className="hover:bg-gray-50">
    //         <td className="px-6 py-4 text-base">Kelwin mark</td>
    //         <td className="px-6 py-4 text-base">kelwin@example.com</td>
    //         <td className="px-6 py-4 text-base">User</td>
    //         <td className="px-6 py-4 text-base">2020-07-06</td>
    //         <td className="px-6 py-4"></td>
    //       </tr>
    //       <tr className="hover:bg-gray-50">
    //         <td className="px-6 py-4 text-base">Dustin</td>
    //         <td className="px-6 py-4 text-base">dustin@example.com</td>
    //         <td className="px-6 py-4 text-base">User</td>
    //         <td className="px-6 py-4 text-base">2021-07-06</td>
    //         <td className="px-6 py-4"></td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
