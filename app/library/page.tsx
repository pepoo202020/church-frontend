"use client";
import React, { useState } from "react";
import SectionTitle from "../_components/SectionTitle";
import { SectionHeader } from "../_components/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import Pagentation from "../_components/Pagentation";
import { books } from "../_data/books";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Library() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const booksPerPage = 6;
  // calculate the index range for services to display
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  //calcaulate total pages
  const totalPages = Math.ceil(books.length / booksPerPage);

  const router = useRouter();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push("#firstBook");
  };
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
    <div id="firstBook">
      <SectionTitle
        flexDirection="flex-row"
        items="items-center"
        justify="justify-center"
        image="sectionbg.png"
      >
        <SectionHeader title="كتب الكنيسة" align="center" color="blue" />
      </SectionTitle>
      <div className="relative z-10 flex flex-col items-center pt-[28px] px-5 gap-[21px] pb-10">
        <div className="w-full flex flex-wrap items-center justify-center gap-[29px] mt-5">
          {currentBooks.map((bookItem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Animation occurs only once when it comes into view
              custom={index}
              className="w-[425px] h-[529px] overflow-hidden rounded-xl drop-shadow-lg relative transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              whileHover="hover"
            >
              <Link
                href={bookItem.link}
                aria-label={`قراءة المزيد عن ${bookItem.maintitle}`}
                className="w-full h-full"
              >
                <Image
                  src={bookItem.image}
                  alt={`صورة كتاب: ${bookItem.maintitle}`}
                  layout="responsive"
                  width={425}
                  height={529}
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 h-full w-3/4 z-[9] bg-gradient-to-r from-white to-white/0"></div>
                <Image
                  src={bookItem.logo}
                  alt={`${bookItem.maintitle} logo`}
                  width={80}
                  height={98}
                  className="absolute top-2 left-2 z-[99]"
                />
                <div className="absolute bottom-0 left-0 w-full flex flex-col justify-center bg-[#1E60BC] z-[999] py-5 px-5">
                  <h5 className="text-white cairo font-black text-[20px] mb-3">
                    {bookItem.subTitle}
                  </h5>
                  <h1 className="text-white kufam font-black text-[22px] w-full text-center">
                    {bookItem.maintitle}
                  </h1>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Pagentation
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
}
