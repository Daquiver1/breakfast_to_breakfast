// components/TopBar.js
import { Bell, Search } from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/images";

const TopBar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex justify-between">
            <img
              className="h-8 w-8 rounded-full"
              src="/admin-avatar.jpg"
              alt="Admin"
            />
          </div>
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Bell size={20} />
            </button>
            <Image
              src={images.image1}
              style={{ width: "35px", height: "35px" }}
              alt="Belinda Peter"
              className="rounded-full mb-2"
            />
            <span className="ml-3 font-medium text-gray-700">
              Belinda Peter
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
