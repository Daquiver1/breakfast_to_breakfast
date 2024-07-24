// components/MenuHeader.js
import { Search, Plus } from "react-feather";

const MenuHeader = () => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Menu</h1>
      <p className="text-gray-600 mb-4">
        View and manage the menu of your restaurant
      </p>
      <div className="flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <Search size={20} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Category 1</option>
            {/* Add more options */}
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
            <Plus size={20} className="inline-block mr-2" /> Add to Menu
          </button>
        </div>
      </div>
    </div>
  );
};
export default MenuHeader;
