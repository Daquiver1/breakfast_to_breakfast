// components/MenuItem.tsx
import Image from "next/image";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  available: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  imageSrc,
  available,
}) => {
  return (
    <div className="flex items-center justify-between rounded-lg p-4 my-4 mx-2 w-[389px] h-[179px]">
      {/* Text Section (Left-aligned) */}
      <div className="flex-1">
        <h3 className="text-[16px] text-black font-bold font-roboto">{name}</h3>
        <p className="text-[12px] text-[#939393] font-roboto">{description}</p>
        <p className="text-[12px] text-[#50EC29] font-roboto">
          {available ? "Available" : "Unavailable"}
        </p>
        <p className="text-[12px] mt-[6px] font-roboto">{price}</p>

        <div className="flex gap-[64px] mt-[10px]">
          <button className="px-4 py-2 bg-custom-blue text-white rounded-full">
            Add to cart
          </button>
          <button className="text-gray-400 hover:text-red-500">
            <Image
              src="/heart.svg"
              alt="Heart icon"
              width={24}
              height={24}
              className="ml-2"
            />
          </button>
        </div>
      </div>

      {/* Image Section (Right-aligned) */}
      <Image
        src={imageSrc}
        alt={name}
        width={128}
        height={128}
        className="rounded-full ml-4"
      />
    </div>
  );
};

export default MenuItem;
