"use client";
import { SectionHeader } from "@/app/_components/SectionHeader";
import SectionTitle from "@/app/_components/SectionTitle";
import { events } from "@/app/_data/events";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowDown, FaArrowLeft, FaArrowUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import ImageModal from "@/app/_components/ImageModal";

export default function ChurchHistory() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  // Function to calculate the indices of displayed years
  const getDisplayedYears = () => {
    const displayedYears: ((typeof events)[0] | null)[] = [];

    // When the currentIndex is at the first event
    if (currentIndex === 0) {
      displayedYears.push(
        null,
        events[currentIndex],
        events[currentIndex + 1] || null
      );
    }
    // When the currentIndex is at the last event
    else if (currentIndex === events.length - 1) {
      displayedYears.push(events[currentIndex - 1], events[currentIndex], null);
    }
    // For any other index
    else {
      displayedYears.push(
        events[currentIndex - 1],
        events[currentIndex],
        events[currentIndex + 1]
      );
    }

    return displayedYears;
  };

  const displayedYears = getDisplayedYears();

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

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
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
        className="w-screen h-fit lg:h-[700px] overflow-hidden relative"
        style={{
          backgroundImage: `url('${events[currentIndex].image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="w-full h-full bg-black/60 px-5 py-10 flex items-center lg:gap-10 gap-5 flex-col lg:flex-row">
          {/* Timeline with Years */}
          <div className="lg:h-full lg:w-52 w-full text-white">
            <div className="w-full h-full flex items-center justify-center gap-2 py-2 flex-col lg:flex-row">
              <div className="lg:h-full lg:w-fit w-full flex flex-row lg:flex-col items-center justify-between p-1">
                {/* Arrows */}
                <FaArrowUp
                  size={30}
                  className={`transition-all hidden lg:block ${
                    currentIndex === 0
                      ? "text-gray-300 cursor-default"
                      : "hover:scale-150 text-white"
                  }`}
                  onClick={handlePrevClick}
                />
                <FaArrowRight
                  size={30}
                  className={`transition-all lg:hidden block ${
                    currentIndex === 0
                      ? "text-gray-300 cursor-default"
                      : "hover:scale-150 text-white"
                  }`}
                  onClick={handlePrevClick}
                />
                {displayedYears.map((year, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex flex-row lg:flex-col items-center lg:mt-5 mt-0 ${
                      year
                        ? index === 1
                          ? "text-blue-300"
                          : "text-white"
                        : "text-transparent"
                    } transition-all`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Year text */}
                    {year ? (
                      <span className="text-xl italic font-bold transition-all">
                        {year.year}
                      </span>
                    ) : (
                      <span className="text-xl italic font-bold transition-all">
                        -
                      </span>
                    )}
                    {/* Dot for each year */}
                    <span
                      className={`w-4 h-4 rounded-full absolute lg:-left-[22px] lg:top-[9px] -bottom-[22px] left-[12px] ${
                        year
                          ? index === 1
                            ? "bg-blue-300"
                            : "bg-white"
                          : "bg-transparent"
                      }`}
                    ></span>
                  </motion.div>
                ))}
                <FaArrowDown
                  size={30}
                  className={`transition-all hidden lg:block ${
                    currentIndex === events.length - 1
                      ? "text-gray-300 cursor-default"
                      : "hover:scale-150 text-white"
                  }`}
                  onClick={handleNextClick}
                />
                <FaArrowLeft
                  size={30}
                  className={`transition-all lg:hidden block ${
                    currentIndex === events.length - 1
                      ? "text-gray-300 cursor-default"
                      : "hover:scale-150 text-white"
                  }`}
                  onClick={handleNextClick}
                />
              </div>
              {/* Vertical Line */}
              <div className="lg:w-1 lg:h-full w-full h-1 rounded-xl bg-white/50"></div>
            </div>
          </div>

          {/* Event Details */}
          <motion.div
            className="flex-1 h-full flex flex-col justify-center text-white max-w-xl space-y-5 items-center lg:items-start px-5 lg:px-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xl font-semibold leading-relaxed text-justify">
              {events[currentIndex].description}
            </p>
            <span className="text-sm font-bold italic underline">
              {events[currentIndex].source}
            </span>
          </motion.div>

          {/* Image */}
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
            <Image
              src={`${events[currentIndex].image}`}
              alt="events image"
              width={500}
              height={500}
              className="rounded-lg shadow-md h-4/5 cursor-pointer"
              onClick={handleImageClick}
            />
          </div>
        </div>
      </div>

      {/* Modal for Image */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        imageUrl={events[currentIndex].image}
      />
    </div>
  );
}
