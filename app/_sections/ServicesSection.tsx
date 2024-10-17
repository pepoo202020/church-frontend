"use client";
import React, { useEffect, useState } from "react";
import { SectionHeader } from "../_components/SectionHeader";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { services } from "../_data/services";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const changeService = (direction: "forward" | "backward") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "forward") {
        return prevIndex === services.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? services.length - 1 : prevIndex - 1;
      }
    });
  };

  // Animation variants for both image and text container
  const contentVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.6 } },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.5 },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5">
      <SectionHeader color="text-[#1E60BC]" title="خدمات الكنيسة" />
      <div className="w-full py-1 px-5 lg:px-0 flex items-center justify-center gap-[65px]">
        <motion.div
          className="bg-[#1E60BC] text-white text-[60px] p-1 rounded-full cursor-pointer hover:bg-transparent hover:text-[#1E60BC] transition-all drop-shadow-xl shadow-xl hidden lg:block"
          onClick={() => changeService("backward")}
          whileHover={{ scale: 1.1 }}
        >
          <IoIosArrowRoundForward />
        </motion.div>

        <div className="w-full mx-5 lg:mx-0 lg:w-[1000px] overflow-hidden group cursor-pointer h-[250px] lg:h-[500px] relative text-white rounded-2xl transition-all duration-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="w-full h-full"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={contentVariants} // Shared animation for both image and text container
            >
              <Image
                src={services[currentIndex].serviceImg}
                alt={services[currentIndex].serviceTitle}
                width={1000}
                height={500}
                className="w-full h-full bg-cover cursor-pointer"
                onClick={() => setHovered(true)}
                priority
              />
              <motion.div
                className="absolute bottom-0 right-0 bg-[#185BB7]/60 w-full rounded-br-2xl rounded-bl-2xl flex flex-col items-center justify-center py-2 cursor-default px-2 lg:px-0 text-center lg:gap-0 gap-1 h-[110px] lg:h-[200px]"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={contentVariants} // Apply same animation to text container as the image
              >
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={textVariants}
                >
                  <Link
                    href={services[currentIndex].serviceLink}
                    className="kufam text-white text-[11px] lg:text-[30px] font-black"
                  >
                    {services[currentIndex].serviceTitle}
                  </Link>
                </motion.div>
                <motion.p
                  className="text-white cairo text-[10px] lg:text-[25px] font-light"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={textVariants}
                >
                  {services[currentIndex].serviceSubtitle}
                </motion.p>
                <motion.button
                  className="px-[30px] py-[5px] mt-1 bg-white text-[#1E60BC] lalezar-regular text-[12px] lg:text-[30px] rounded-3xl"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={buttonVariants}
                >
                  قراءة المزيد
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="bg-[#1E60BC] text-white text-[60px] p-1 rounded-full cursor-pointer hover:bg-transparent hover:text-[#1E60BC] transition-all drop-shadow-xl shadow-xl hidden lg:block"
          onClick={() => changeService("forward")}
          whileHover={{ scale: 1.1 }}
        >
          <IoIosArrowRoundBack />
        </motion.div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="fixed top-0 right-0 z-[999999] p-5 flex items-center justify-center bg-black/50 w-screen h-screen"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
          >
            <Image
              src={services[currentIndex].serviceImg}
              alt="Expanded service image"
              className="h-screen py-5 bg-cover rounded-3xl"
              width={1000}
              height={200}
            />
            <motion.button
              className="text-white text-3xl absolute top-2 right-2 hover:rotate-90 transition-all duration-1000"
              onClick={() => setHovered(false)}
              whileHover={{ scale: 1.2 }}
            >
              <CgClose />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
