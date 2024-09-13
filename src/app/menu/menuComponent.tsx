"use client";
import CategoryComponent from "@/components/categoryComponent";
import NavigationButtons from "@/components/navigationButton";
import SearchBar from "@/components/searchBar";
import Head from "next/head";
import { useState } from "react";
import MenuButton from "../../components/menuButton";

export default function MenuComponent() {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const menuButtons = [
    {
      label: "Breakfast",
      selected: true,
      icon_path: "/menu_button_image1.svg",
    },
    {
      label: "Starters",
      selected: false,
      icon_path: "/menu_button_image2.svg",
    },
    {
      label: "Desserts",
      selected: false,
      icon_path: "/menu_button_image3.svg",
    },
    {
      label: "Platters",
      selected: false,
      icon_path: "/menu_button_image4.svg",
    },
    {
      label: "Salads",
      selected: false,
      icon_path: "/menu_button_image5.svg",
    },
  ];
  const categories = [
    {
      title: "Breakfast",
      items: [
        {
          name: "Breakfast Plate",
          description:
            "Scrambled eggs, bacon, sausage, home fries, English muffins",
          price: "Ghc 92.00",
          imageSrc: "/menu_breakfast1.svg",
          available: true,
        },
        {
          name: "Lunch Plate",
          description:
            "Scrambled eggs, bacon, sausage, home fries, English muffins",
          price: "Ghc 72.00",
          imageSrc: "/menu_breakfast1.svg",
          available: true,
        },
        {
          name: "Afternoon Plate",
          description:
            "Scrambled eggs, bacon, sausage, home fries, English muffins",
          price: "Ghc 42.00",
          imageSrc: "/menu_breakfast1.svg",
          available: true,
        },
      ],
    },
    {
      title: "Starters",
      items: [
        {
          name: "Garlic Bread",
          description: "Crispy garlic bread with herbs",
          price: "Ghc 61.00",
          imageSrc: "/menu_starters1.svg",
          available: true,
        },
        {
          name: "White Bread",
          description: "Crispy garlic bread with herbs",
          price: "Ghc 41.00",
          imageSrc: "/menu_starters1.svg",
          available: true,
        },
        {
          name: "Wheat Bread",
          description: "Crispy garlic bread with herbs",
          price: "Ghc 21.00",
          imageSrc: "/menu_starters1.svg",
          available: true,
        },
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Chocolate Cake",
          description: "Rich chocolate cake with chocolate frosting",
          price: "Ghc 62.00",
          imageSrc: "/menu_dessert1.svg",
          available: true,
        },
        {
          name: "Vanilla Cake",
          description: "Rich chocolate cake with chocolate frosting",
          price: "Ghc 32.00",
          imageSrc: "/menu_dessert1.svg",
          available: true,
        },
        {
          name: "Strawberry Cake",
          description: "Rich chocolate cake with chocolate frosting",
          price: "Ghc 72.00",
          imageSrc: "/menu_dessert1.svg",
          available: true,
        },
      ],
    },
    {
      title: "Platters",
      items: [
        {
          name: "Cheese Platter",
          description: "Assorted cheese, crackers, and grapes",
          price: "Ghc 82.00",
          imageSrc: "/menu_platter1.svg",
          available: true,
        },
        {
          name: "Meat Platter",
          description: "Assorted cheese, crackers, and grapes",
          price: "Ghc 92.00",
          imageSrc: "/menu_platter1.svg",
          available: true,
        },
        {
          name: "Fruit Platter",
          description: "Assorted cheese, crackers, and grapes",
          price: "Ghc 52.00",
          imageSrc: "/menu_platter1.svg",
          available: true,
        },
      ],
    },
    {
      title: "Salads",
      items: [
        {
          name: "Caesar Salad",
          description: "Romaine lettuce, croutons, parmesan cheese",
          price: "Ghc 25.00",
          imageSrc: "/menu_salad1.svg",
          available: true,
        },
        {
          name: "Greek Salad",
          description: "Romaine lettuce, croutons, parmesan cheese",
          price: "Ghc 35.00",
          imageSrc: "/menu_salad1.svg",
          available: true,
        },
        {
          name: "Cobb Salad",
          description: "Romaine lettuce, croutons, parmesan cheese",
          price: "Ghc 45.00",
          imageSrc: "/menu_salad1.svg",
          available: true,
        },
      ],
    },
  ];

  const handleMenuClick = (menuLabel: string) => {
    if (selectedMenu === menuLabel) {
      setSelectedMenu(null);
    } else {
      setSelectedMenu(menuLabel);
    }
  };

  const filteredCategories = categories
    .filter((category) => {
      return selectedMenu === null || category.title === selectedMenu;
    })
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }));

  return (
    <div className="p-5">
      <Head>
        <title>Menu</title>
      </Head>

      <header className="text-center my-5">
        <img
          src="/menu_header.svg"
          alt="Menu header"
          className="mx-auto w-[292px] h-auto"
        />
        <p className="text-[20px]" style={{ color: "#797A7B" }}>
          A diverse array of dishes that cater to every palate
        </p>
      </header>

      <div className="flex justify-center space-x-[40px] my-5">
        {menuButtons.map((menu) => (
          <MenuButton
            key={menu.label}
            label={menu.label}
            imagePath={menu.icon_path}
            selected={selectedMenu === menu.label}
            onClick={() => handleMenuClick(menu.label)}
          />
        ))}
      </div>

      <SearchBar setSearchQuery={setSearchQuery} />
      <NavigationButtons />
      <div className="p-5">
        {filteredCategories.map((category) => (
          <CategoryComponent
            key={category.title}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
    </div>
  );
}
