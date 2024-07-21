import React from "react";
import {
  Home,
  ShoppingBag,
  PlusSquare,
  MessageSquare,
  Bell,
  User,
  ChevronDown,
} from "lucide-react";

const orderData = [
  {
    id: "54676867",
    order: "Pizza,Coke",
    customer: "WS Wisdom Sonya",
    date: "Apr 23,08:30am",
    total: "$50.00",
    status: "Pending",
    address: "East-Legon",
  },
  {
    id: "54676868",
    order: "Cappuccino",
    customer: "JA Judith Armor",
    date: "Apr 23,09:30am",
    total: "$30.00",
    status: "Completed",
    address: "Osu",
  },
  {
    id: "54676869",
    order: "Fruit Platter",
    customer: "EP Excel Peter",
    date: "Apr 23,10:30am",
    total: "$70.00",
    status: "Pending",
    address: "North-Legon",
  },
  {
    id: "54676870",
    order: "Crepes",
    customer: "MP Mary Phillary",
    date: "Apr 23,11:30am",
    total: "$20.00",
    status: "Pending",
    address: "Trasacco",
  },
  {
    id: "54676871",
    order: "Swiss Burger",
    customer: "BN Beatrice Naa",
    date: "Apr 23,12:00am",
    total: "$50.00",
    status: "Completed",
    address: "Haatso",
  },
  {
    id: "54676872",
    order: "Salad",
    customer: "DO David Offei",
    date: "Apr 23,12:10am",
    total: "$100.00",
    status: "Pending",
    address: "Adenta",
  },
  {
    id: "54676873",
    order: "Waffles",
    customer: "CA Christian Aborlwvd",
    date: "Apr 23,12:30am",
    total: "$60.00",
    status: "Completed",
    address: "Kasoa",
  },
  {
    id: "54676874",
    order: "Mocha Latte",
    customer: "KA Kono Anyemang",
    date: "Apr 23,01:30am",
    total: "$40.00",
    status: "Pending",
    address: "Atomic",
  },
];

const OrdersPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 flex flex-col">
        <div className="mb-8">
          <img
            src="/api/placeholder/100/100"
            alt="Belinda Peter"
            className="rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">Belinda Peter</h2>
          <p className="text-gray-500">(Admin)</p>
        </div>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Home className="mr-2" /> Dashboard
            </li>
            <li className="flex items-center text-blue-600">
              <ShoppingBag className="mr-2" /> Orders
            </li>
            <li className="flex items-center">
              <PlusSquare className="mr-2" /> Add to menu
            </li>
            <li className="flex items-center">
              <MessageSquare className="mr-2" /> Reviews
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Orders</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg flex items-center">
              Accept Order <ChevronDown className="ml-2" />
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
              Create Order <ChevronDown className="ml-2" />
            </button>
            <Bell />
            <User />
          </div>
        </header>

        {/* Order Statistics */}
        <div className="bg-white p-4 rounded-lg shadow mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="mr-2">📅</span>
              <span className="font-bold">Today</span>
            </div>
            <div className="flex space-x-8">
              <div>
                <p className="text-gray-500 text-sm">Total Orders</p>
                <p className="font-bold">30010</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Ordered meals over time</p>
                <p className="font-bold">1500</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  Ordered orders over time
                </p>
                <p className="font-bold">30007</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Refunds</p>
                <p className="font-bold">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Tabs */}
        <div className="mb-4">
          <ul className="flex border-b">
            <li className="mr-1">
              <a
                className="bg-white inline-block py-2 px-4 text-blue-500 font-semibold"
                href="#"
              >
                All
              </a>
            </li>
            <li className="mr-1">
              <a
                className="bg-white inline-block py-2 px-4 text-gray-500 hover:text-blue-500 font-semibold"
                href="#"
              >
                Sent
              </a>
            </li>
            <li className="mr-1">
              <a
                className="bg-white inline-block py-2 px-4 text-gray-500 hover:text-blue-500 font-semibold"
                href="#"
              >
                Complete
              </a>
            </li>
            <li className="mr-1">
              <a
                className="bg-white inline-block py-2 px-4 text-gray-500 hover:text-blue-500 font-semibold"
                href="#"
              >
                Cancellation
              </a>
            </li>
            <li className="mr-1">
              <a
                className="bg-white inline-block py-2 px-4 text-gray-500 hover:text-blue-500 font-semibold"
                href="#"
              >
                Refunds
              </a>
            </li>
          </ul>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delivery Address
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orderData.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.order}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
