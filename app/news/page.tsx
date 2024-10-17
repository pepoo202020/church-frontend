"use client";
import React, { useState } from "react";
import SectionTitle from "../_components/SectionTitle";
import { SectionHeader } from "../_components/SectionHeader";
import Pagentation from "../_components/Pagentation";
import { news } from "../_data/news";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ImageModal from "../_components/ImageModal";

export default function News() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentIamge, setCurrentImage] = useState<number>(0);
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

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
    hover: {
      scale: 1.02,
    },
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
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Animation occurs only once when it comes into view
            custom={index}
            whileHover="hover"
          >
            <div className=" flex lg:flex-row flex-col items-center justify-center h-[500px] w-full lg:mx-5 lg:h-[304px]  lg:w-[1120px]  overflow-hidden bg-[#D9D9D944] rounded-xl shadow-2xl drop-shadow-xl gap-5 lg:gap-0 transition-transform duration-300 transform hover:scale-105">
              <div
                className={`lg:h-[400px] lg:w-3/4 w-full h-3/4 lg:-m-2 cursor-pointer`}
                style={{
                  backgroundImage: `url('${newItem.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => handleImageClick(index)}
              />

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
          </motion.div>
        ))}
      </div>
      <div className="mb-5">
        <Pagentation
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
        />
      </div>

      {/* Modal for Image */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        imageUrl={currentNews[currentIamge].image}
      />
    </div>
  );
}
