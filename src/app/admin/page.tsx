"use client";
import {
  Bell,
  Home,
  MessageSquare,
  PlusSquare,
  ShoppingBag,
  User,
} from "lucide-react";
import { Cell, Line, LineChart, Pie, PieChart } from "recharts";
import { images } from "@/images";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const lineChartData = [
  { name: "June", value: 80000 },
  { name: "July", value: 40000 },
  { name: "Aug", value: 100000 },
];

const pieChartData = [
  { name: "Chicken Pasta Salad", value: 50 },
  { name: "Cappuccino", value: 30 },
  { name: "Swiss Burger", value: 20 },
];

interface SidebarButtonProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  href,
  children,
  isActive,
}) => (
  <Link
    href={href}
    className={`flex items-center p-2 rounded-md ${
      isActive ? "bg-gray-100" : ""
    }`}
  >
    {children}
  </Link>
);

const COLORS = ["#FF0000", "#00C49F", "#0000FF"];

const Dashboard = () => {
  const activePathname = usePathname();
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-400 p-6 flex flex-col">
        <div className="mb-8">
          <Image
            src={images.image1}
            style={{ width: "100px", height: "100px" }}
            alt="Belinda Peter"
            className="rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">Belinda Peter</h2>
          <p className="text-white">(Admin)</p>
        </div>
        <nav>
          <div className="space-y-4"></div>
          <ul className="space-y-4">
            <li className="flex items-center ">
              <Home className="mr-2 text-red-600" />
              <SidebarButton
                href="/dashboard"
                isActive={activePathname === "/dashboard"}
              >
                Dashboard
              </SidebarButton>
            </li>
            <li className="flex items-center">
              <ShoppingBag className="mr-2  text-yellow-500" />
              <SidebarButton
                href="/orders"
                isActive={activePathname === "/orders"}
              >
                Orders
              </SidebarButton>
            </li>
            <li className="flex items-center">
              <PlusSquare className="mr-2 text-blue-600" />{" "}
              <SidebarButton
                href="/add-to-menu"
                isActive={activePathname === "/add-to-menu"}
              >
                Add to Menu
              </SidebarButton>
            </li>
            <li className="flex items-center">
              <MessageSquare className="mr-2 text-green-500" />{" "}
              <SidebarButton
                href="/reviews"
                isActive={activePathname === "/reviews"}
              >
                Reviews
              </SidebarButton>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Overview</h1>
          <p className="text-black">Hello Belinda, Welcome back!</p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Start searching here"
              className="mr-4 p-2 border rounded"
            />
            <Bell className="mr-4 text-red-600" />
            <User className="text-blue-600" />
          </div>
        </header>

        {/* Monthly Revenue */}
        <div className="bg-indigo-300 p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-bold mb-4 text-white">Monthly Revenue</h2>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-gray-500">Average Monthly Income</p>
              <p className="text-3xl font-bold">$100,000</p>
              <p className="text-black">↑ 47.42 vs previous month</p>
            </div>
            <div className="flex">
              <button className="bg-gray-200 px-4 py-2 rounded-l">
                Expense
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r">
                Income
              </button>
            </div>
          </div>
          <LineChart width={600} height={200} data={lineChartData}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">Total Expense</p>
            <p className="text-xl font-bold text-black">$8000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">Total Income</p>
            <p className="text-xl font-bold text-black">$100,000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">Total Profit</p>
            <p className="text-xl font-bold text-black">$92,000</p>
          </div>
        </div>

        {/* Top Selling and Total Orders */}
        <div className="grid grid-cols-2 gap-4 text-black font-semibold">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-black">Top Selling</h2>
            <PieChart width={200} height={200}>
              <Pie
                data={pieChartData}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <div className="mt-4">
              {pieChartData.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <div
                    className="w-4 h-4 mr-2"
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-black">Total Orders</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500">Online</p>
                <p className="text-xl font-bold text-black">
                  10,362 <span className="text-green-500 text-sm">2.5% ↑</span>
                </p>
              </div>
              <div>
                <p className="text-gray-500">Offline</p>
                <p className="text-xl font-bold text-black">
                  10,362 <span className="text-green-500 text-sm">2.5% ↑</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
