import React from "react";

interface MealCardProps {
  heading: string;
  text: string;
  image: string | JSX.Element;
}

const MealCard: React.FC<MealCardProps> = ({ heading, text, image }) => {
  return (
    <div className="relative w-64 h-72 p-4 bg-white rounded-lg shadow-lg flex flex-col justify-between">
      <div className="absolute top-0 left-0 w-16 h-full bg-sky-600 opacity-90 rounded-l-lg"></div>
      <div className="ml-16">
        <h2 className="text-base font-semibold mb-2">{heading}</h2>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
      <div className="absolute top-[40%] right-0 w-[6rem] h-44 bg-sky-600 opacity-90 rounded-l-[500px] flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
          {/* Display emoji or image */}
          <span role="img" aria-label="food" className="text-2xl">
            {image}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
