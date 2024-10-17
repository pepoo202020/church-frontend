import React from "react";
import { NEWIF } from "../_data/news";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface NEWSCONTAINERPROPS {
  news: NEWIF[];
}

export const NewsContainer: React.FC<NEWSCONTAINERPROPS> = ({ news }) => {
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
    <div className="w-full flex flex-wrap items-center justify-center gap-[29px] mt-5 px-5 lg:px-0">
      {news.map((newsItem, index) => (
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
  );
};
