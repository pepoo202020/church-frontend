import { SectionHeader } from "@/app/_components/SectionHeader";

import React from "react";

export default function ChurchFathers() {
  const fathers = [
    {
      name: "القمص توما يعقوب",
      role: "الرتبة القمصية",
      amount: "سنين الخدمة: 60 سنة",
      image: "/image/toma.jpg",
    },
    {
      name: "القمص ابرام ميساك",
      role: "الرتبة القمصية",
      amount: "سنين الخدمة: 60 سنة",
      image: "/image/ebram.jpg",
    },
    {
      name: "القس ساويروس عبده",
      role: "الرتبة القسية",
      amount: "سنين الخدمة: 60 سنة",
      image: "/image/saweros.jpg",
    },
    {
      name: "القس نوفير صبحي",
      role: "الرتبة القسية",
      amount: "سنين الخدمة: 60 سنة",
      image: "/image/nofer.jpg",
    },
    {
      name: "القس المتنيح بيتر توفيق",
      role: "الرتبة القسية",
      amount: "سنين الخدمة: 60 سنة",
      image: "/image/peter.jpg",
    },
  ];
  return (
    <div
      id="fathers"
      className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5 text-[#185BB7] bg-white"
    >
      <SectionHeader title="اباء الكنيسة" color="blue" />
      <div className="w-full mx-10 flex items-center justify-center gap-10 flex-wrap">
        {fathers.map((item, index) => (
          <div
            key={index}
            className="w-[292px] h-[476px] overflow-hidden rounded-3xl  bg-cover relative drop-shadow-2xl"
            style={{
              backgroundImage: `url('${item.image}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="w-full absolute h-1/3 bottom-0 left-0 bg-[#185BB7] text-white flex flex-col items-center justify-center gap-2">
              <h1 className="lalezar-regular text-[35px]">{item.name}</h1>
              <h4 className="rakkas-regular text-[25px]">{item.role}</h4>
              <p className="cairo">{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
