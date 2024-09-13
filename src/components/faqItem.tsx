import React from "react";

interface FAQItemProps {
  question: string; // Define the question prop as a string
}

const FAQItem: React.FC<FAQItemProps> = ({ question }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg flex justify-between items-center mb-4">
      <h3 className="text-lg">{question}</h3>
      <span>▼</span> {/* You can also use an icon component if needed */}
    </div>
  );
};

export default FAQItem;
