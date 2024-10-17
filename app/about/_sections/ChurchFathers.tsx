"use client";
import { SectionHeader } from "@/app/_components/SectionHeader";
import { fathers } from "@/app/_data/fathers";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export default function ChurchFathers() {
  // Animation variants for news items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
    hover: {
      scale: 1.05,
    },
  };

  return (
    <div
      id="fathers"
      className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5 text-[#185BB7] bg-white"
    >
      <SectionHeader title="اباء الكنيسة" color="blue" />
      <div className="w-full  flex items-center justify-center gap-10 flex-wrap">
        {fathers.map((item, index) => (
          <motion.div
            key={index}
            className="w-[292px] h-[476px] overflow-hidden rounded-3xl bg-cover relative drop-shadow-2xl"
            style={{
              backgroundImage: `url('${item.image}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Animation occurs only once when it comes into view
            custom={index}
            whileHover="hover"
          >
            <div className="w-full absolute h-[120px] bottom-0 left-0 bg-[#185BB7] text-white flex flex-col items-center justify-center gap-1">
              <h1 className="lalezar-regular text-[35px]">{item.name}</h1>
              <p className="cairo">{item.date}</p>
              <p className="cairo">{item.endDate ? item.endDate : ""}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
