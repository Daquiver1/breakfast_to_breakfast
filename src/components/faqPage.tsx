// pages/faq.tsx

import FAQItem from "./faqItem";

const FAQPage = () => {
  const faqQuestions = [
    "How do I place an order?",
    "How do I place an order?",
    "How do I place an order?",
    "How do I place an order?",
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex justify-between items-start space-x-8">
      <div className="w-2/3">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Ask Questions
        </h2>
        {faqQuestions.map((question) => (
          <FAQItem key={question} question={question} />
        ))}
      </div>
      <div className="w-1/3 bg-white p-4 shadow rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Any Question?</h3>
        <div className="space-y-4">
          <textarea
            placeholder="Type your question here"
            className="w-full p-2 border border-gray-300 rounded"
            rows="3"
          ></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Send
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          {/* Add your illustration here */}
          <img
            src="/contact_us_question_mark.svg"
            alt="Questions Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
