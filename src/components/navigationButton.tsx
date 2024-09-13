// components/NavigationButtons.tsx

const NavigationButtons: React.FC = () => {
  return (
    <div className="flex items-center justify-end gap-2 pr-8">
      <button className="px-4 py-2 bg-deep-blue text-white rounded-full ">
        Prev
      </button>
      <p className="text-[16px]">Full Meals</p>
      <button className="px-4 py-2 bg-deep-blue text-white rounded-full ">
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;
