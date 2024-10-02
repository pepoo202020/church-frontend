"use client";

import { useState } from "react";
import BirthDate from "./BirthDate";
import CopticDate from "./CopticDate";
import Logo from "./Logo";
import Nav from "./Nav";
import { MenuToggle } from "./MenuToggle";
import { Sidebar } from "./Sidebar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="flex flex-col items-center justify-center sticky top-0 z-50 bg-white w-full max-w-screen px-6 lg:px-10 py-2">
        <div className="w-full hidden lg:flex items-center justify-between cairo text-sm font-bold">
          <BirthDate />
          <CopticDate />
        </div>
        <div className="p-1 lg:p-5 lg:-mt-9">
          <Logo />
        </div>
        <Nav />
      </header>
      <div className="fixed lg:hidden block z-[999] top-0 left-5">
        <MenuToggle toggle={handleToggle} isOpen={isOpen} />
      </div>
      {isOpen && <Sidebar tapOpen={() => setIsOpen(false)} />}
    </>
  );
}
