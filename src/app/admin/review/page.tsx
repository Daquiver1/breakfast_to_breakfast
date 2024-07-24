import React from "react";
import {
  Grid,
  FileText,
  PlusSquare,
  MessageSquare,
  LogOut,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { images } from "@/images";
import Image from "next/image";

const reviewsData = [
  {
    id: 1,
    date: "01/07/2024",
    name: "Wisdom Senya",
    rating: 5.0,
    feedback: "Food was very tasty.",
    status: "Not Responded",
  },
  {
    id: 2,
    date: "01/07/2024",
    name: "Judith Armor",
    rating: 5.0,
    feedback: "Food deliver was fast.",
    status: "Not Responded",
  },
  {
    id: 3,
    date: "01/07/2024",
    name: "Excel Peter",
    rating: 3.0,
    feedback: "Food delayed.",
    status: "Responded",
  },
  {
    id: 4,
    date: "01/07/2024",
    name: "David Offei",
    rating: 2.0,
    feedback: "One meal was left out of my order.",
    status: "Responded",
  },
  {
    id: 5,
    date: "01/07/2024",
    name: "Kono Agyemang",
    rating: 5.0,
    feedback: "Food was very tasty.",
    status: "Responded",
  },
  {
    id: 6,
    date: "01/07/2024",
    name: "Beatrice Nettey",
    rating: 5.0,
    feedback: "Food was very tasty.",
    status: "Responded",
  },
  {
    id: 7,
    date: "01/07/2024",
    name: "Mary Phillary",
    rating: 5.0,
    feedback: "Food was very tasty.",
    status: "Not Responded",
  },
  {
    id: 8,
    date: "01/07/2024",
    name: "Chris Walker",
    rating: 5.0,
    feedback: "Food was very tasty.",
    status: "Responded",
  },
  {
    id: 9,
    date: "01/07/2024",
    name: "Becca Sarpong",
    rating: 5.0,
    feedback: "Food was very tasty.",
    status: "Not Responded",
  },
  {
    id: 10,
    date: "01/07/2024",
    name: "Andrews Cupid",
    rating: 5.0,
    feedback: "Food was very tasty.",
    status: "Responded",
  },
];

const ReviewsPage = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 flex flex-col">
        <div className="mb-8">
          <Image
            src={images.image1}
            style={{ width: "100px", height: "100px" }}
            alt="Belinda Peter"
            className="rounded-full mb-2"
          />
          <h2 className="text-xl font-bold text-black">Belinda Peter</h2>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-4">
            <li className="flex items-center text-black">
              <Grid className="mr-2 text-red-600" /> Overview
            </li>
            <li className="flex items-center text-black">
              <FileText className="mr-2 text-yellow-400" /> Orders
            </li>
            <li className="flex items-center text-black">
              <PlusSquare className="mr-2 text-blue-500" /> Add to Menu
            </li>
            <li className="flex items-center text-black">
              <MessageSquare className="mr-2 text-green-600" /> Reviews
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <button className="flex items-center text-red-500">
            <LogOut className="mr-2" /> Sign Out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center text-black">
              <MessageSquare className="mr-2 text-green-500" /> Reviews
            </h1>
            <p className="text-gray-500">
              Here, you can find all user reviews made on your website
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-full"
              />
              <Search className="absolute left-3 top-2 text-gray-400" />
            </div>
            <Image
              src={images.image1}
              style={{ width: "35px", height: "35px" }}
              alt="Belinda Peter"
              className="rounded-full mb-2"
            />
            <div>
              <p className="text-sm text-gray-500">Admin</p>
              <p className="font-bold text-black">Belinda Peter</p>
            </div>
          </div>
        </header>

        {/* Reviews Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Reviews (30)</h2>
            <div className="flex items-center space-x-4">
              <button className="flex items-center bg-blue-900 border rounded px-4 py-2">
                All <ChevronDown className="ml-2" />
              </button>
              <button className="flex items-center bg-blue-900 text-white rounded px-4 py-2">
                Today
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2">S/N</th>
                <th className="py-2">DATE</th>
                <th className="py-2">NAME</th>
                <th className="py-2">RATING</th>
                <th className="py-2">FEEDBACK</th>
                <th className="py-2">STATUS</th>
                <th className="py-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {reviewsData.map((review) => (
                <tr key={review.id} className="border-b text-black">
                  <td className="py-2">{review.id}</td>
                  <td className="py-2">{review.date}</td>
                  <td className="py-2">{review.name}</td>
                  <td className="py-2 flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    {review.rating.toFixed(2)}
                  </td>
                  <td className="py-2">{review.feedback}</td>
                  <td
                    className={`py-2 ${
                      review.status === "Responded"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {review.status}
                  </td>
                  <td className="py-2">
                    <button
                      className={`px-3 py-1 rounded ${
                        review.status === "Responded"
                          ? "bg-gray-200 text-gray-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {review.status === "Responded" ? "View" : "Respond"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <button className="flex items-center bg-blue-900 text-white rounded px-4 py-2">
              <ChevronLeft className="mr-2" /> Previous
            </button>
            <div className="flex space-x-2">
              {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 flex items-center justify-center rounded ${
                    page === 1 ? "bg-blue-900 text-white" : "bg-gray-200"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="flex items-center bg-blue-900 text-white rounded px-4 py-2">
              Next <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
