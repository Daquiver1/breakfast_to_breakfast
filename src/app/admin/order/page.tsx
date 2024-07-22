"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Bell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { images } from "@/images";
import Image from "next/image";

const OrdersPage = () => {
  const [orders] = useState([
    {
      id: "0000001",
      order: "Pizza, Coke",
      customer: "Wisdom Senya",
      timestamp: "July 15, 8:30pm",
      address: "Jubilee Drive Ave, Legon",
      total: "GH₵ 600.00",
      status: "Completed",
    },
    {
      id: "0000001",
      order: "Pizza, Coke",
      customer: "Wisdom Senya",
      timestamp: "July 15, 8:30pm",
      address: "Jubilee Drive Ave, Legon",
      total: "GH₵ 600.00",
      status: "Pending",
    },
    // ... more orders
  ]);

  return (
    <>
      <div className="flex justify-between bg-white w-full h-15">
        {" "}
        <Image
          src={images.images2}
          style={{ width: "40px", height: "40px" }}
          alt="Belinda Peter"
          className="rounded-full mb-2"
        />
        <div className="flex items-center">
          {" "}
          <Bell className="text-gray-500 mr-2" />
          <Image
            src={images.image1}
            style={{ width: "30px", height: "30px" }}
            alt="Belinda Peter"
            className="rounded-full mb-2"
          />
        </div>
      </div>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 flex flex-col">
          <div className="mb-8">
            <Image
              src={images.image1}
              style={{ width: "100px", height: "100px" }}
              alt="Belinda Peter"
              className="rounded-full mb-2"
            />
          </div>
          <nav className="flex-grow">
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center text-gray-600">
                  <span className="mr-2">◻️</span> Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-blue-600 font-semibold"
                >
                  <span className="mr-2">📋</span> Orders
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-600">
                  <span className="mr-2">📄</span> Menu
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-600">
                  <span className="mr-2">💬</span> Reviews
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <a href="#" className="flex items-center text-red-600">
              <span className="mr-2">→</span> Sign Out
            </a>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 overflow-auto">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-2">Orders</h1>
              <p className="text-gray-600">
                Get a closer look at all ongoing and past orders
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 rounded-full border"
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </header>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Orders (237)</h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border rounded-md flex items-center">
                  All Orders <ChevronDown size={16} className="ml-2" />
                </button>
                <button className="px-4 py-2 border rounded-md flex items-center">
                  Today <ChevronDown size={16} className="ml-2" />
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  + Create an Order
                </button>
              </div>
            </div>

            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-2">ORDER ID</th>
                  <th className="pb-2">ORDER</th>
                  <th className="pb-2">CUSTOMER</th>
                  <th className="pb-2">TIMESTAMP</th>
                  <th className="pb-2">DELIVERY ADDRESS</th>
                  <th className="pb-2">TOTAL</th>
                  <th className="pb-2">PAYMENT STATUS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-b text-black">
                    <td className="py-4">{order.id}</td>
                    <td className="py-4">{order.order}</td>
                    <td className="py-4">{order.customer}</td>
                    <td className="py-4">{order.timestamp}</td>
                    <td className="py-4">{order.address}</td>
                    <td className="py-4">{order.total}</td>
                    <td className="py-4">
                      <span
                        className={`px-2 py-1 rounded ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center mt-4">
              <button className="flex items-center text-blue-600">
                <ChevronLeft size={16} className="mr-1" /> Previous
              </button>
              <div className="flex space-x-2">
                {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      page === 1 ? "bg-blue-600 text-white" : "text-gray-600"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="flex items-center text-blue-600">
                Next <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default OrdersPage;
