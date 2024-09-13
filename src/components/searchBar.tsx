// components/SearchBar.tsx
import Image from "next/image";
import React from "react";

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-center my-5 pt-8">
      <div className="w-96 relative border border-custom-blue rounded-lg">
        <Image
          src="/search_icon.svg"
          alt=""
          width={24}
          height={24}
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search..."
          className="pl-14 w-full p-2 rounded-lg shadow-sm focus:outline-none font-sans text-deep-blue"
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
