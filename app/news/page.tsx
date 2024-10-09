"use client";
import React, { useState } from "react";
import SectionTitle from "../_components/SectionTitle";
import { SectionHeader } from "../_components/SectionHeader";
import Image from "next/image";
import Pagentation from "../_components/Pagentation";

export default function News() {
  const news = [
    {
      title: "عيد الصعود المجيد",
      category: "اعياد ومناسبات",
      body: "تعيد الكنيسة بعيد الصعود",
      image: "/image/newBg01.png",
    },
    {
      title: "عيد الصعود المجيد",
      category: "اعياد ومناسبات",
      body: "تعيد الكنيسة بعيد الصعود",
      image: "/image/newBg01.png",
    },
    {
      title: "عيد الصعود المجيد",
      category: "اعياد ومناسبات",
      body: "تعيد الكنيسة بعيد الصعود",
      image: "/image/newBg01.png",
    },
    {
      title: "عيد الصعود المجيد",
      category: "اعياد ومناسبات",
      body: "تعيد الكنيسة بعيد الصعود",
      image: "/image/newBg01.png",
    },
    {
      title: "عيد الصعود المجيد",
      category: "اعياد ومناسبات",
      body: "تعيد الكنيسة بعيد الصعود",
      image: "/image/newBg01.png",
    },
    {
      title: "عيد الصعود المجيد",
      category: "اعياد ومناسبات",
      body: "تعيد الكنيسة بعيد الصعود",
      image: "/image/newBg01.png",
    },
    {
      title: "عيد الصعود المجيد",
      category: "اعياد ومناسبات",
      body: "تعيد الكنيسة بعيد الصعود",
      image: "/image/newBg01.png",
    },
    {
      title: "عيد الصعود المجيد",
      category: "اعياد ومناسبات",
      body: "تعيد الكنيسة بعيد الصعود",
      image: "/image/newBg01.png",
    },
    {
      title: "عيد الصعود المجيد",
      category: "اعياد ومناسبات",
      body: "تعيد الكنيسة بعيد الصعود",
      image: "/image/newBg01.png",
    },
  ];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const newsPerPage = 3;
  // calculate the index range for services to display
  const indexOfLastNew = currentPage * newsPerPage;
  const indexOfFirstNew = indexOfLastNew - newsPerPage;
  const currentNews = news.slice(indexOfFirstNew, indexOfLastNew);

  //calcaulate total pages
  const totalPages = Math.ceil(news.length / newsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <SectionTitle
        flexDirection="flex-row"
        items="items-center"
        justify="justify-center"
        image="sectionbg.png"
      >
        <SectionHeader title="اخبار الكنيسة" align="center" color="blue" />
      </SectionTitle>
      <div className="my-5  flex flex-col items-center justify-center gap-10 ">
        {currentNews.map((newItem, index) => (
          <div key={index}>
            <div className=" flex lg:flex-row flex-col items-center justify-center h-[500px] w-full lg:mx-5 lg:h-[304px]  lg:w-[1120px]  overflow-hidden bg-[#D9D9D944] rounded-xl shadow-2xl drop-shadow-xl gap-5 lg:gap-0 transition-transform duration-300 transform hover:scale-105">
              <Image
                src={newItem.image}
                width={576}
                height={304}
                alt="item image"
                className="bg-contain lg:h-[400px] lg:w-3/4 w-full h-3/4 lg:-m-2"
              />
              <div className=" w-full flex flex-col justify-center lg:gap-5 gap-2 px-5 almarai">
                <h1 className="w-full text-center text-[20px] lg:text-[40px] font-extrabold text-[#1E60BC]">
                  {newItem.title}
                </h1>
                <h4 className="text-[15px] lg:text-[34px] font-extrabold text-[#70A7DF]">
                  {newItem.category}
                </h4>
                <p className="cairo text-[12px] lg:text-[34px] text-[#70A7DF]">
                  {newItem.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-5">
        <Pagentation
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
