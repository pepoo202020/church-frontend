"use client";
import React, { useEffect } from "react";
import { SectionHeader } from "../_components/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SaintOfChurchSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="saint"
      className="w-screen flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5 text-white bg-[#185BB7]"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <SectionHeader color="white" title="شفيع الكنيسة" />
        <div className="w-full flex lg:flex-row flex-col items-center justify-center lg:gap-[85px] gap-[75px]">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
            className="drop-shadow-2xl"
          >
            <Image
              src="/image/saintImage.png"
              alt="صورة الشفيع"
              className="w-[300px] h-[285px] lg:w-[472px] lg:h-[447px]"
              width={300}
              height={285}
              priority
            />
          </motion.div>
          <motion.div
            className="lg:w-[717px] w-full flex flex-col items-center justify-center gap-5"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <h2 className="kufam text-[18px] lg:text-[34px] font-black">
              الشهيد ابادير واخته الشهيده ايريني
            </h2>
            <p className="cairo text-[18px] lg:text-[28px] font-normal lg:text-justify text-center">
              القديسان أبادير وإيرائى أخته ابنا أخت واسيليدس الوزير وقد وُلِدَا
              وتربيَّا في أنطاكية وكان أبادير قائداً عظيماً في جيش دقلديانوس.
              فلما كفر دقلديانوس واضطهد المسيحيين، ظهر السيد المسيح لأبادير في
              رؤيا الليل، وطلب منه أن يذهب مع أخته إيرائى إلى مصر لينالا إكليل
              الشهادة.
            </p>
            <motion.div whileHover="hover" variants={buttonVariants}>
              <Link
                className="px-[79px] py-[10px] bg-white text-[#1E60BC] lalezar-regular lg:text-[40px] text-[20px] rounded-3xl transition duration-300 hover:bg-[#1E60BC] hover:text-white"
                aria-label="قراءة المزيد عن الشهيد ابادير واخته الشهيده ايريني"
                href={"/about/saint-story"}
              >
                قراءة المزيد
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
