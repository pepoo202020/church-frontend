import { SectionHeader } from "@/app/_components/SectionHeader";
import { fathers } from "@/app/_data/fathers";

import React from "react";

export default function ChurchFathers() {
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
            <div className="w-full absolute h-[120px] bottom-0 left-0 bg-[#185BB7] text-white flex flex-col items-center justify-center gap-2">
              <h1 className="lalezar-regular text-[35px]">{item.name}</h1>
              <p className="cairo">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
