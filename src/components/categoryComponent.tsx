// components/CategoryComponent.tsx
import React from "react";
import MenuItem from "./menuItem";

interface CategoryProps {
  title: string;
  items: {
    name: string;
    description: string;
    price: string;
    imageSrc: string;
    available: boolean;
  }[];
}

const CategoryComponent: React.FC<CategoryProps> = ({ title, items }) => {
  return (
    <div className="flex my-8">
      <div className="bg-deep-blue text-white w-20 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold rotate-90 origin-center transform whitespace-nowrap">
          {title}
        </h2>
      </div>
      <div className="flex flex-row overflow-x-auto gap-[150px]">
        {items.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            imageSrc={item.imageSrc}
            available={item.available}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
