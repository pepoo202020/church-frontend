import React from "react";
import SectionTitle from "../_components/SectionTitle";
import Link from "next/link";
import SaintOfChurchSection from "../_sections/SaintOfChurchSection";
import HistoryOfChurch from "./_sections/HistoryOfChurch";
import ChurchAccessories from "./_sections/ChurchAccessories";
import ChurchFathers from "./_sections/ChurchFathers";

export default function About() {
  const aboutSections = [
    { name: "شفيع الكنيسة", link: "#saint" },
    { name: "تاريخ الكنيسة", link: "#history" },
    { name: "ملحقات الكنيسة", link: "#accessories" },
    { name: "اباء الكنيسة", link: "#fathers" },
  ];
  return (
    <div>
      <SectionTitle
        flexDirection="flex-row"
        items="items-center"
        justify="justify-center"
        image="sectionbg.png"
      >
        <div className="w-full flex items-center justify-center gap-10 flex-wrap">
          {aboutSections.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="w-[190px] text-center py-2 bg-[#1E60BC] text-white lalezar-regular text-[29px] transition-all duration-500 hover:bg-[#1E60BC70]  hover:scale-105"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </SectionTitle>
      <SaintOfChurchSection />
      <HistoryOfChurch />
      <ChurchAccessories />
      <ChurchFathers />
    </div>
  );
}
