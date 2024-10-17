"use client";
import { SectionHeader } from "@/app/_components/SectionHeader";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function HistoryOfChurch() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      id="history"
      className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5 text-[#185BB7] bg-white"
    >
      <SectionHeader color="text-[#185BB7]" title="تاريخ الكنيسة" />
      <motion.div
        className="w-full flex lg:flex-row flex-col items-center justify-center lg:gap-[85px] gap-[75px]"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <motion.div
          className="lg:w-[717px] w-full flex flex-col items-center justify-center gap-5"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <p className="cairo text-[20px] lg:text-[28px] font-normal lg:text-justify text-center">
            تزخر إيبارشية أسيوط بالعديد من الكنائس والأديرة القبطية ذات التاريخ
            العريق، والتي تضفي طابعًا روحانيًا وثقافيًا مميزًا على المنطقة. من
            أبرز هذه الكنائس، كنيسة الشهيد أباذير وأخته الشهيدة إيريني، التي تقع
            في منطقة غرب أسيوط. تُعد هذه الكنيسة شاهدة على تاريخ طويل من الإيمان
            والتفاني، حيث تعتبر المنطقة التي تقع فيها الكنيسة هي أصل المدينة
            القديمة،
          </p>
          <motion.div whileHover="hover" variants={buttonVariants}>
            <Link
              className="px-[79px] py-[10px] bg-[#1E60BC] text-white lalezar-regular lg:text-[40px] text-[20px] rounded-3xl transition duration-300 hover:bg-white hover:text-[#1E60BC]"
              aria-label="قراءة المزيد عن الشهيد ابادير واخته الشهيده ايريني"
              href={"/about/church-history"}
            >
              قراءة المزيد
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          className="drop-shadow-2xl"
        >
          <Image
            src="/image/historyImg.jpg"
            alt="صورة الكنيسة"
            className=" w-[300px] h-[285px] lg:w-[340px] lg:h-[480px] rounded-2xl"
            width={300}
            height={285}
            priority // Adds priority loading to the image
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
