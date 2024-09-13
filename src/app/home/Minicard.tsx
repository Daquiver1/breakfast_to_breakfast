import React from "react";

interface MinicardProps {
  icon: string | JSX.Element; // Icon can be either a string (emoji) or a JSX Element (e.g., an icon component)
  text: string;
}

const Minicard: React.FC<MinicardProps> = ({ icon, text }) => {
  return (
    <div className="bg-slate-300 w-[14rem] h-[4rem] rounded-[10px] text-[12px] flex flex-col items-center justify-center">
      <p>{icon}</p> {/* Display the icon (string or component) */}
      <p>{text}</p> {/* Display the text */}
    </div>
  );
};

export default Minicard;
