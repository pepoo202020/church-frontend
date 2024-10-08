"use client";
import { SectionHeader } from "@/app/_components/SectionHeader";
import SectionTitle from "@/app/_components/SectionTitle";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowDown, FaArrowLeft, FaArrowUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function ChurchHistory() {
  const events = [
    {
      year: "1996",
      date: "March 2020",
      title: "Event 1",
      description: "Details about event 1",
      image: "/image/1.jpg",
    },
    {
      year: "1998",
      date: "June 2021",
      title: "Event 2",
      description: "Details about event 2",
      image: "/image/2.jpg",
    },
    {
      year: "2000",
      date: "August 2022",
      title: "Event 3",
      description: "Details about event 3",
      image: "/image/3.jpg",
    },
    {
      year: "2002",
      date: "August 2022",
      title: "Event 3",
      description: "Details about event 3",
      image: "/image/4.jpg",
    },
    {
      year: "2004",
      date: "August 2022",
      title: "Event 3",
      description: "Details about event 3",
      image: "/image/5.jpg",
    },
    {
      year: "2006",
      date: "August 2022",
      title: "Event 3",
      description: "Details about event 3",
      image: "/image/6.jpg",
    },
    {
      year: "2008",
      date: "August 2022",
      title: "Event 3",
      description: "Details about event 3",
      image: "/image/6.jpg",
    },
    {
      year: "2010",
      date: "August 2022",
      title: "Event 3",
      description: "Details about event 3",
      image: "/image/6.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const displayedYears = events.slice(currentIndex, currentIndex + 3);

  const handleNextClick = () => {
    if (currentIndex < events.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="bg-gray-100 pb-20">
      {/* Section Header */}
      <SectionTitle
        flexDirection="flex-row"
        image="churchHistoryBg.png"
        items="items-center"
        justify="justify-center"
      >
        <SectionHeader title="تاريخ الكنيسة" align="center" color="blue" />
      </SectionTitle>

      {/* Timeline Content */}
      <div
        className="w-full h-[600px] lg:h-[700px] relative overflow-hidden"
        style={{
          backgroundImage: `url('${events[currentIndex].image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-black/80 via-black/50 to-transparent px-5 py-10 flex items-center lg:gap-10 gap-5 flex-col lg:flex-row">
          {/* Timeline with Years */}
          <div className="lg:h-full lg:w-52 w-full text-white">
            <div className="w-full h-full flex items-center justify-center gap-2 py-2 flex-col lg:flex-row">
              <div className="lg:h-full lg:w-fit w-full flex flex-row lg:flex-col items-center justify-between p-1">
                {/* Arrows */}
                <FaArrowUp
                  size={30}
                  className={` transition-all hidden lg:block ${
                    currentIndex === 0
                      ? "text-gray-300  cursor-default"
                      : "hover:scale-150 text-white"
                  }`}
                  onClick={() => handlePrevClick()}
                />
                <FaArrowRight
                  size={30}
                  className={` transition-all lg:hidden block ${
                    currentIndex === 0
                      ? "text-gray-300  cursor-default"
                      : "hover:scale-150 text-white"
                  }`}
                  onClick={() => handlePrevClick()}
                />
                {displayedYears.map((year, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-row lg:flex-col items-center lg:mt-5 mt-0 ${
                      index === 0 ? "text-blue-300" : "text-white"
                    } transition-all`}
                  >
                    {/* Year text */}
                    <span className="text-xl italic font-bold  transition-all">
                      {year.year}
                    </span>
                    {/* Dot for each year */}
                    <span
                      className={`w-4 h-4 rounded-full absolute lg:-left-[22px] lg:top-[9px] -bottom-[22px] left-[12px] ${
                        index === 0 ? "bg-blue-300" : "bg-white"
                      }`}
                    ></span>
                  </div>
                ))}
                <FaArrowDown
                  size={30}
                  className={` transition-all hidden lg:block ${
                    currentIndex === events.length - 1
                      ? "text-gray-300  cursor-default"
                      : "hover:scale-150 text-white"
                  }`}
                  onClick={() => handleNextClick()}
                />
                <FaArrowLeft
                  size={30}
                  className={` transition-all lg:hidden block ${
                    currentIndex === events.length - 1
                      ? "text-gray-300  cursor-default"
                      : "hover:scale-150 text-white"
                  }`}
                  onClick={() => handleNextClick()}
                />
              </div>
              {/* Vertical Line */}
              <div className="lg:w-1 lg:h-full w-full  h-1 rounded-xl bg-white/50"></div>
            </div>
          </div>

          {/* Event Details */}
          <div className="flex-1 h-full flex flex-col justify-center text-white max-w-xl space-y-5 items-center lg:items-start">
            <span className="text-xl font-semibold tracking-wide">
              {events[currentIndex].date}
            </span>
            <h2 className="text-4xl font-bold">{events[currentIndex].title}</h2>
            <p className="text-lg leading-relaxed">
              {events[currentIndex].description}
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <Image
              src={`${events[currentIndex].image}`}
              alt="events image"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
