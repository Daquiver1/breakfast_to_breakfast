// components/Sidebar.js
import Link from "next/link";
import { Home, ShoppingBag, Menu, Star, LogOut } from "react-feather";

const Sidebar = () => {
  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex items-center space-x-2 px-4">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="text-2xl font-semibold">Breakfast 2 Breakfast</span>
      </div>
      <nav>
        <Link
          href="/overview"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <Home className="inline-block mr-2" size={20} /> Overview
        </Link>
        <Link
          href="/orders"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <ShoppingBag className="inline-block mr-2" size={20} /> Orders
        </Link>
        <Link
          href="/menu"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <Menu className="inline-block mr-2" size={20} /> Menu
        </Link>
        <Link
          href="/reviews"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <Star className="inline-block mr-2" size={20} /> Reviews
        </Link>
      </nav>
      <div className="absolute bottom-0 w-full">
        <button className="block w-full py-2.5 px-4 rounded transition duration-200 hover:bg-red-500 hover:text-white">
          <LogOut className="inline-block mr-2" size={20} /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
