"use client";
import React, { useEffect } from "react";
import { SectionHeader } from "../_components/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion
import { useInView } from "react-intersection-observer"; // Hook for detecting when the section is in view
import { sections } from "../_data/sections";

export default function WebsiteSections() {
  const controls = useAnimation(); // Animation controller
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false }); // triggerOnce is set to false to allow repeated triggering

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start animation when the section is in view
    } else {
      controls.start("hidden"); // Reset to hidden when out of view, so the animation replays
    }
  }, [controls, inView]);

  // Framer Motion variants for the animation
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggering each child animation
      },
    },
  };

  const sectionVariant = {
    hidden: { opacity: 0, scale: 0.8 }, // Hidden state with reduced scale
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }, // Visible state with scaling effect
    hover: { scale: 1.05, transition: { duration: 0.3 } }, // Hover state to slightly increase scale
  };

  return (
    <motion.section
      ref={ref} // Attach the ref to the section to detect when it is in view
      className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5"
      initial="hidden"
      animate={controls} // Use the controls to handle animation based on inView status
      variants={containerVariant} // Apply container animation
    >
      <SectionHeader color="text-[#1E60BC]" title="اقسام الموقع" />
      <div className="px-[94px] w-full flex items-center justify-center gap-[75px] flex-wrap">
        {sections.map((section, i) => (
          <Link
            key={i}
            href={section.link}
            className="relative group block p-2 h-full"
            aria-label={section.title}
          >
            <motion.div
              className="w-[280px] h-[280px] bg-transparent group-hover:bg-[#1E60BC] border-4 border-[#1E60BCAF] text-[#70A7DF] group-hover:text-white drop-shadow-xl shadow-xl rounded-3xl transition-all duration-700 flex flex-col items-center justify-center gap-1 p-1"
              variants={sectionVariant} // Apply section animation
              whileHover="hover" // Trigger hover state on hover
            >
              <Image
                src={section.imageUrl}
                alt={section.title}
                width={100}
                height={100}
                priority={i === 0} // Add priority to the first image
              />
              <h1 className="blaka font-normal text-[50px] text-center">
                {section.title}
              </h1>
              <p className="cairo font-light text-[25px] text-center">
                {section.subtitle}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
