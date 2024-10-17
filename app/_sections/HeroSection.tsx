"use client";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export default function HeroSection() {
  // Framer Motion variants for the text and background animations
  const textVariant = {
    hidden: { opacity: 0, y: 50 }, // Initial state (offscreen and hidden)
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Visible state (fade-in and move-up)
  };
  const backgroundVariant = {
    hidden: { opacity: 0 }, // Background starts hidden
    visible: { opacity: 1, transition: { duration: 1.5 } }, // Fades in slowly
  };
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="w-full h-full"
        variants={backgroundVariant} // Apply animation variant
        initial="hidden" // Initial state
        animate="visible" // When it becomes visible
      >
        {/* Background for desktop */}
        <motion.div
          className="bg-cover w-full h-full hidden lg:block"
          style={{
            backgroundImage: `url('/image/bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Hero background"
        />
        {/* Background for mobile */}
        <motion.div
          className="bg-cover w-full h-full block lg:hidden"
          style={{
            backgroundImage: `url('/image/bgMobile.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Hero background mobile"
        />
      </motion.div>
      {/* Hero Text Animation */}
      <div className="absolute lg:top-12 top-8 lg:right-[114px] right-0 z-10 text-white lg:w-[870px] w-full px-2 lg:mx-0 flex flex-col items-center lg:gap-[65px] gap-4">
        <motion.h1
          className="almarai lg:text-[99px] text-[53px] lg:font-extrabold font-bold"
          variants={textVariant} // Apply text animation variant
          initial="hidden"
          animate="visible"
        >
          مرحباً بكم
        </motion.h1>
        <motion.h1
          className="lemonada lg:text-[40px] text-[18px] font-bold text-center "
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }} // Delay to make this appear after the first h1
        >
          الموقع <span className="text-[#FAFF00]">الرسمي</span> لكنيسة الشهيد
          ابادير واخته الشهيده ايريني بأسيوط
        </motion.h1>
      </div>
    </div>
  );
}
