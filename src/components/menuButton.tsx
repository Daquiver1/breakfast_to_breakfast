// components/MenuButton.tsx
import Image from "next/image";

interface MenuButtonProps {
  label: string;
  imagePath: string;
  selected: boolean;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  label,
  imagePath,
  selected,
  onClick,
}) => {
  //  if selected color should be 001C43 else 019BBD
const bgColor = !selected ? "bg-[#001C43]" : "bg-[#019BBD]";

  return (
    <button
      className={`flex justify-center items-center px-2.5 py-2.5 gap-2.5 w-[146px] h-[53px] ${bgColor} border border-blue-900 rounded-lg`}
      onClick={onClick}
    >
      <Image src={imagePath} alt="" width={40} height={40} className="ml-2" />
      <span className="text-white">{label}</span>
    </button>
  );
};

export default MenuButton;
