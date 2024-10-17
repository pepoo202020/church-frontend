"use client";
import React, { useEffect } from "react";
import { SectionHeader } from "../_components/SectionHeader";
import { says } from "../_data/fatherSays";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FatherSays() {
  const currentIndex = 0;
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation variants
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  return (
    <section
      className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5 text-white bg-[#185BB7]"
      aria-label="أقوال الاباء"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <SectionHeader color="white" title="أقوال الاباء" />
        <motion.div
          className="mt-7 mx-2 w-fit h-fit py-5 px-4 bg-[#70A7DF] max-w-[1049px] rounded-2xl drop-shadow-2xl flex flex-col items-center justify-center gap-5 transition-transform duration-300 lg:hover:scale-105 lg:hover:shadow-lg hover:scale-100 hover:shadow-lg"
          initial="hidden"
          whileInView="visible"
          variants={variants}
        >
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="font-bold almarai text-[15px] text-white text-center lg:text-[50px] "
          >
            {says[currentIndex].body}
          </motion.p>
          <motion.h1
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="font-black almarai text-[15px] text-[#FAFF00] lg:text-[40px] text-center"
          >
            {says[currentIndex].name}
          </motion.h1>
        </motion.div>
      </motion.div>
    </section>
  );
}
