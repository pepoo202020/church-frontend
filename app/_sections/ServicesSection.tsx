"use client";
import React, { useEffect, useState } from "react";
import { SectionHeader } from "../_components/SectionHeader";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { services } from "../_data/services";

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(id);
  }, [services.length]);

  const changeService = (direction: "forward" | "backward") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "forward") {
        return prevIndex === services.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? services.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5">
      <SectionHeader color="text-[#1E60BC]" title="خدمات الكنيسة" />
      <div className="w-full py-1 px-5 lg:px-0 flex items-center justify-center gap-[65px]">
        <div
          className="bg-[#1E60BC] text-white text-[60px] p-1 rounded-full cursor-pointer hover:bg-transparent hover:text-[#1E60BC] transition-all drop-shadow-xl shadow-xl hidden lg:block"
          onClick={() => changeService("backward")}
        >
          <IoIosArrowRoundForward />
        </div>
        <div className="w-full mx-5 lg:mx-0 lg:w-[1000px] overflow-hidden group cursor-pointer h-[250px] lg:h-[500px] relative text-white rounded-2xl transition-all duration-700">
          <Image
            src={services[currentIndex].serviceImg}
            alt={services[currentIndex].serviceTitle} // Improved alt text
            width={1000}
            height={500}
            className="w-full h-full bg-cover cursor-pointer"
            onClick={() => setHovered(true)}
            priority // Improved loading performance
          />
          <div className="absolute bottom-0 right-0 bg-[#185BB7]/60 w-full rounded-br-2xl rounded-bl-2xl flex flex-col items-center justify-center py-2 cursor-default px-2 lg:px-0 text-center gap-2 lg:gap-0">
            <Link
              href={services[currentIndex].serviceLink}
              className="kufam text-white text-[8px] lg:text-[30px] font-black"
            >
              {services[currentIndex].serviceTitle}
            </Link>
            <p className="text-white cairo text-[11px] lg:text-[25px] font-light">
              {services[currentIndex].serviceSubtitle}
            </p>
            <button className="px-[30px] py-[5px] mt-1 bg-white text-[#1E60BC] lalezar-regular text-[25px] lg:text-[30px] rounded-3xl ">
              قراءة المزيد
            </button>
          </div>
        </div>
        <div
          className="bg-[#1E60BC] text-white text-[60px] p-1 rounded-full cursor-pointer hover:bg-transparent hover:text-[#1E60BC] transition-all drop-shadow-xl shadow-xl hidden lg:block"
          onClick={() => changeService("forward")}
        >
          <IoIosArrowRoundBack />
        </div>
      </div>
      {hovered && (
        <div className="fixed top-0 right-0 z-[999999] p-5 flex items-center justify-center bg-black/50 w-screen h-screen">
          <Image
            src={services[currentIndex].serviceImg}
            alt="Expanded service image" // Improved alt text
            className="h-screen py-5 bg-cover rounded-3xl"
            width={1000}
            height={200}
          />
          <button
            className="text-white text-3xl absolute top-2 right-2 hover:rotate-90 transition-all duration-1000"
            onClick={() => setHovered(false)}
          >
            <CgClose />
          </button>
        </div>
      )}
    </div>
  );
}
