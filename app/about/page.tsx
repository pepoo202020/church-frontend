"use client"; // Ensure this component can use client-side features
import React from "react";
import SectionTitle from "../_components/SectionTitle";
import Link from "next/link";
import SaintOfChurchSection from "../_sections/SaintOfChurchSection";
import HistoryOfChurch from "./_sections/HistoryOfChurch";
import ChurchAccessories from "./_sections/ChurchAccessories";
import ChurchFathers from "./_sections/ChurchFathers";
import { motion } from "framer-motion"; // Import Framer Motion

export default function About() {
  const aboutSections = [
    { name: "شفيع الكنيسة", link: "#saint" },
    { name: "تاريخ الكنيسة", link: "#history" },
    { name: "ملحقات الكنيسة", link: "#accessories" },
    { name: "اباء الكنيسة", link: "#fathers" },
  ];

  return (
    <div className="w-screen">
      <SectionTitle
        flexDirection="flex-row"
        items="items-center"
        justify="justify-center"
        image="sectionbg.png"
      >
        <div className="w-full flex items-center justify-center gap-10 flex-wrap">
          {aboutSections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Initial hidden state
              animate={{ opacity: 1, y: 0 }} // Animate to visible state
              transition={{ duration: 0.5, delay: index * 0.1 }} // Animation duration with staggered delay
              className="w-[190px] bg-[#1E60BC] text-center py-2 hover:bg-[#1E60BC70] hover:scale-105 transition-all duration-500"
            >
              <Link
                href={item.link}
                className="w-full   text-white lalezar-regular text-[29px]  "
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionTitle>
      <div className="w-screen">
        <SaintOfChurchSection />
        <HistoryOfChurch />
        <ChurchAccessories />
        <ChurchFathers />
      </div>
    </div>
  );
}
