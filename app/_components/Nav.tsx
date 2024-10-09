"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathName = usePathname();
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
    <nav className="hidden lg:flex gap-5 items-center mb-2">
      {navItems.map((item) => (
        <Link
          key={item.path} // Use path as a unique identifier
          href={item.path}
          className={`cairo text-[20px] relative transition-colors duration-200 ${
            pathName === item.path
              ? "font-bold text-[#1E60BC] border-b-2 border-b-[#1E60BC] cursor-text"
              : "text-gray-700 hover:text-[#1E60BC]"
          }`}
          aria-current={pathName === item.path ? "page" : undefined} // Add aria-current for active link
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
