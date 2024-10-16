"use client";
import { SectionHeader } from "@/app/_components/SectionHeader";
import { accessories } from "@/app/_data/accessories";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function ChurchAccessories() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === accessories.length - 3 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(id);
  }, []);

  const changeService = (direction: "forward" | "backward") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "forward") {
        return prevIndex === accessories.length - 3 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? accessories.length - 3 : prevIndex - 1;
      }
    });
  };
  return (
    <div
      id="accessories"
      className="w-screen flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5 text-white bg-[#185BB7]"
    >
      <SectionHeader title="ملحقات الكنيسة" />
      <div className="w-full py-1 px-5 lg:px-0 flex items-center justify-center gap-[65px]">
        <div
          className="bg-white text-[#1E60BC] text-[60px] p-1 rounded-full cursor-pointer hover:bg-transparent hover:text-white transition-all drop-shadow-xl shadow-xl hidden lg:block"
          onClick={() => changeService("backward")}
        >
          <IoIosArrowRoundForward />
        </div>
        <div className="flex items-center justify-center flex-wrap gap-10">
          {accessories
            .slice(currentIndex, currentIndex + 3)
            .map((item, index) => (
              <div
                key={index}
                className="h-[497px] w-[300px] bg-cover relative rounded-3xl overflow-hidden"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="w-full px-2 h-[100px] flex items-center justify-center bg-[#1E60BC76] text-white kufam text-[20px] font-black text-center bottom-0 left-0 absolute">
                  {item.title}
                </div>
              </div>
            ))}
        </div>
        <div
          className="bg-white text-[#1E60BC] text-[60px] p-1 rounded-full cursor-pointer hover:bg-transparent hover:text-white transition-all drop-shadow-xl shadow-xl hidden lg:block"
          onClick={() => changeService("forward")}
        >
          <IoIosArrowRoundBack />
        </div>
      </div>
    </div>
  );
}
