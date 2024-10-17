"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { SectionHeader } from "../_components/SectionHeader";
import { news } from "../_data/news";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NewsContainer } from "../_components/NewsContainer";

export default function BestNewsOfChurchSection() {
  const featuredNews = news.filter((item) => item.featured);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation variants for news items

  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="min-w-screen relative min-h-screen text-white bg-[#185BB7]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/bestNewsBg.png"
          alt="Background for best news"
          fill
          objectFit="cover"
          className="z-0"
        />
      </div>
      <motion.div
        className="relative z-10 flex flex-col items-center pt-[28px] gap-[21px] pb-5 w-full"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <SectionHeader color="white" title="اهم اخبار الكنيسة" />
        <NewsContainer news={featuredNews} />
      </motion.div>
    </section>
  );
}
