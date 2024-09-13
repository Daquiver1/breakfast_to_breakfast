// components/FAQItem.tsx
const FAQItem = ({ question }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg flex justify-between items-center mb-4">
      <h3 className="text-lg">{question}</h3>
      <span>▼</span>{" "}
    </div>
  );
};

export default FAQItem;
