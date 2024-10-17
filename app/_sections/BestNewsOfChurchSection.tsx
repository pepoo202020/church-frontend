"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { SectionHeader } from "../_components/SectionHeader";
import Link from "next/link";
import { news } from "../_data/news";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        <div className="w-full flex flex-wrap items-center justify-center gap-[29px] mt-5 px-5 lg:px-0">
          {featuredNews.map((newsItem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Animation occurs only once when it comes into view
              custom={index}
              className="w-[425px] h-[529px] overflow-hidden rounded-xl drop-shadow-lg relative transition-transform duration-300 transform hover:scale-105"
              whileHover="hover"
            >
              <Link
                href={newsItem.link}
                aria-label={`قراءة المزيد عن ${newsItem.maintitle}`}
                className="relative block w-full h-full"
              >
                <Image
                  src={newsItem.image}
                  alt={`صورة ${newsItem.maintitle}`}
                  height={529}
                  width={425}
                  className="w-full h-full object-cover scale-110"
                  priority
                />
                <div className="absolute top-0 left-0 h-full w-3/4 z-[9] bg-gradient-to-r from-white to-white/0"></div>
                <Image
                  src={newsItem.logo}
                  alt={`${newsItem.maintitle} logo`}
                  width={60}
                  height={60}
                  className="absolute top-5 left-5 z-[99]"
                />
                <div className="absolute bottom-0 left-0 w-full bg-white z-[999] py-5 px-5">
                  <h5 className="text-[#70A7DF] cairo font-black text-[27px] mb-3">
                    {newsItem.subTitle}
                  </h5>
                  <h1 className="text-[#1E60BC] kufam font-black text-[30px] w-full text-center">
                    {newsItem.maintitle}
                  </h1>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
