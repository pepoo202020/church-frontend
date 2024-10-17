"use client";
import React, { useState } from "react";
import SectionTitle from "../_components/SectionTitle";
import { SectionHeader } from "../_components/SectionHeader";
import Pagentation from "../_components/Pagentation";
import { news } from "../_data/news";
import { useRouter } from "next/navigation";

export default function News() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const newsPerPage = 3;
  // calculate the index range for services to display
  const indexOfLastNew = currentPage * newsPerPage;
  const indexOfFirstNew = indexOfLastNew - newsPerPage;
  const currentNews = news.slice(indexOfFirstNew, indexOfLastNew);

  //calcaulate total pages
  const totalPages = Math.ceil(news.length / newsPerPage);
  const router = useRouter();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push("#firstNew");
  };
  return (
    <div id="firstNew">
      <SectionTitle
        flexDirection="flex-row"
        items="items-center"
        justify="justify-center"
        image="sectionbg.png"
      >
        <SectionHeader title="اخبار الكنيسة" align="center" color="blue" />
      </SectionTitle>
      <div className="my-5 mx-10 lg:mx-0 flex flex-col items-center justify-center gap-10 ">
        {currentNews.map((newItem, index) => (
          <div key={index}>
            <div className=" flex lg:flex-row flex-col items-center justify-center h-[500px] w-full lg:mx-5 lg:h-[304px]  lg:w-[1120px]  overflow-hidden bg-[#D9D9D944] rounded-xl shadow-2xl drop-shadow-xl gap-5 lg:gap-0 transition-transform duration-300 transform hover:scale-105">
              <div
                className={`lg:h-[400px] lg:w-3/4 w-full h-3/4 lg:-m-2`}
                style={{
                  backgroundImage: `url('${newItem.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className=" w-full flex flex-col justify-center lg:gap-5 gap-2 px-5 almarai pb-5">
                <h1 className="w-full text-center text-[20px] lg:text-[40px] font-extrabold text-[#1E60BC]">
                  {newItem.maintitle}
                </h1>
                <h4 className="text-[15px] lg:text-[34px] font-extrabold text-[#70A7DF]">
                  {newItem.subTitle}
                </h4>
                <p className="cairo text-[12px] lg:text-[20px] text-[#70A7DF]">
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
