"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BirthDate from "./BirthDate";
import CopticDate from "./CopticDate";

interface SidebarProps {
  tapOpen: () => void; // Function to handle closing the sidebar
}

export const Sidebar: React.FC<SidebarProps> = ({ tapOpen }) => {
  const pathName = usePathname();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (path: string) => {
    setActiveItem(path);
    tapOpen(); // Close the sidebar
  };

  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "عن الكنيسة", path: "/about" },
    { name: "الخدمات", path: "/services" },
    { name: "اخبار الكنيسة", path: "/news" },
    { name: "المكتبه", path: "/library" },
    //{ name: "علوم الكنيسة", path: "/science" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  return (
    <div
      className="fixed w-screen h-screen z-50 bg-black/50 flex flex-col items-center justify-center gap-5 transition-opacity duration-300"
      role="dialog" // ARIA role for accessibility
      aria-labelledby="sidebar-title"
    >
      <h2 id="sidebar-title" className="sr-only">
        Navigation Menu
      </h2>
      {navItems.map((item, i) => (
        <Link
          href={item.path}
          className={`cairo text-[20px] ${
            activeItem === item.path || pathName === item.path
              ? "font-bold text-[#1E60BC] cursor-text"
              : "text-white"
          } transition duration-300 ease-in-out`}
          onClick={() => handleItemClick(item.path)} // Close sidebar and set active item
          key={i}
        >
          {item.name}
        </Link>
      ))}
      <div className="w-full absolute z-[9999] bottom-2 right-0 px-2 text-white flex items-center justify-between">
        <BirthDate />
        <CopticDate />
      </div>
    </div>
  );
};
