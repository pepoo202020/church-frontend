"use client";
import React, { useState } from "react";
import SectionTitle from "../_components/SectionTitle";
import { SectionHeader } from "../_components/SectionHeader";
import Pagentation from "../_components/Pagentation";
import { services } from "../_data/services";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Import framer-motion
import ImageModal from "../_components/ImageModal";

export default function Services() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentIamge, setCurrentImage] = useState<number>(1);
  const servicesPerPage = 4;
  // Calculate the index range for services to display
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );
  const router = useRouter();

  // Calculate total pages
  const totalPages = Math.ceil(services.length / servicesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push("#serviceFirst");
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

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <div id="serviceFirst">
      <SectionTitle
        flexDirection="flex-row"
        items="items-center"
        justify="justify-center"
        image="sectionbg.png"
      >
        <SectionHeader title="خدمات الكنيسة" align="center" color="blue" />
      </SectionTitle>
      <div className="flex items-center justify-center flex-wrap w-full py-6 gap-10 lg:px-0 px-8">
        {currentServices.map((service, index) => (
          <motion.div
            className="lg:w-[579px] lg:h-[430px] w-full h-[250px] bg-cover rounded-2xl shadow-lg drop-shadow-lg overflow-hidden relative transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            key={index}
            style={{
              backgroundImage: `url(${service.serviceImg})`,
              backgroundPosition: "center center",
            }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Animation occurs only once when it comes into view
            custom={index}
            whileHover="hover"
            onClick={() => handleImageClick(index)}
          >
            <div className="absolute bottom-0 w-full h-1/3 bg-[#1E60BC] text-white flex flex-col items-center justify-center gap-2">
              <h1 className="almarai text-[15px] lg:text-[25px] font-extrabold">
                {service.serviceTitle}
              </h1>
              <button className="lg:px-[30px] lg:py-[5px] px-[20px] py-[2px] bg-white text-[#1E60BC] lalezar-regular text-[15px] lg:text-[30px] rounded-3xl ">
                قراءة المزيد
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Pagenation */}
      <Pagentation
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Modal for Image */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        imageUrl={currentServices[currentIamge]?.serviceImg}
      />
    </div>
  );
}
