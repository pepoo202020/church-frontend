import Image from "next/image";
import React from "react";
import { SectionHeader } from "../_components/SectionHeader";
import Link from "next/link";

export default function BestNewsOfChurchSection() {
  const news = [
    {
      maintitle: "عيد الصعود",
      subTitle: "اعياد ومناسبات",
      logo: "/image/newLogo.png",
      image: "/image/newBg01.png",
      link: "/",
      featured: true,
    },
    {
      maintitle: "صوم الرسل",
      subTitle: "اعياد ومناسبات",
      logo: "/image/newLogo.png",
      image: "/image/newBg03.png",
      link: "/",
      featured: true,
    },
    {
      maintitle: "عيد حلول الروح القدس",
      subTitle: "اعياد ومناسبات",
      logo: "/image/newLogo.png",
      image: "/image/newBg02.png",
      link: "/",
      featured: true,
    },
  ];
  const featuredNews = news.filter((item) => item.featured);

  return (
    <section className="min-w-screen relative min-h-screen text-white bg-[#185BB7]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/bestNewsBg.png"
          alt="Background for best news"
          fill
          objectFit="cover"
          className="z-0"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center pt-[28px] gap-[21px] pb-5 w-full">
        <SectionHeader color="text-white" title="اهم اخبار الكنيسة" />
        <div className="w-full flex flex-wrap items-center justify-center gap-[29px] mt-5 px-5 lg:px-0">
          {featuredNews.map((newsItem, index) => (
            <Link
              key={index}
              href={newsItem.link}
              aria-label={`قراءة المزيد عن ${newsItem.maintitle}`}
              className="w-[425px] h-[529px] overflow-hidden rounded-xl drop-shadow-lg relative transition-transform duration-300 transform hover:scale-105"
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
                width={80}
                height={98}
                className="absolute top-2 left-2 z-[99]"
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
          ))}
        </div>
      </div>
    </section>
  );
}
