import React from "react";
import { SectionHeader } from "../_components/SectionHeader";
import Link from "next/link";
import Image from "next/image";

export default function WebsiteSections() {
  const sections = [
    {
      title: "عن الكنيسة",
      subtitle: "عن تاريخ الكنيسة وعن شهيد الكنيسة",
      imageUrl: "/image/icons/churchIcon.png",
      link: "/about",
    },
    {
      title: "خدمات الكنيسة",
      subtitle: "جميع خدمات الكنيسة مع مواقعها ومواعيدها",
      imageUrl: "/image/icons/servicesIcon.png",
      link: "/services",
    },
    {
      title: "اخبار الكنيسة",
      subtitle: "جميع اخبار الكنيسة وتتبيهاتها",
      imageUrl: "/image/icons/newsIcon.png",
      link: "/news",
    },
    {
      title: "مكتبة الكنيسة",
      subtitle: "يوحد بها كتب الخدمات وكل ما يخص الميديا",
      imageUrl: "/image/icons/booksIcon.png",
      link: "/library",
    },
    {
      title: "علوم الكنيسة",
      subtitle: "طقس و قبطي و تاريخ الكنيسة",
      imageUrl: "/image/icons/scienceIcon.png",
      link: "/science",
    },
    {
      title: "تواصل معنا",
      subtitle: "للتواصل مع الكنيسة ومع خدام الخدمات المختلفة",
      imageUrl: "/image/icons/phoneIcon.png",
      link: "/contact",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5">
      <SectionHeader color="text-[#1E60BC]" title="اقسام الموقع" />
      <div className="px-[94px] w-full flex items-center justify-center gap-[75px] flex-wrap">
        {sections.map((section, i) => (
          <Link
            key={i}
            href={section.link}
            className="relative group block p-2 h-full"
            aria-label={section.title}
          >
            <div className="w-[280px] h-[280px] bg-transparent group-hover:bg-[#1E60BC] border-4 border-[#1E60BCAF] text-[#70A7DF] group-hover:text-white drop-shadow-xl shadow-xl rounded-3xl transition-all duration-700 flex flex-col items-center justify-center gap-1 p-1">
              <Image
                src={section.imageUrl}
                alt={section.title}
                width={100}
                height={100}
                priority={i === 0} // Add priority to the first image
              />
              <h1 className="blaka font-normal text-[50px] text-center">
                {section.title}
              </h1>
              <p className="cairo font-light text-[25px] text-center">
                {section.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
