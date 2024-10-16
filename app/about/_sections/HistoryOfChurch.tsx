import { SectionHeader } from "@/app/_components/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HistoryOfChurch() {
  return (
    <section
      id="history"
      className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5 text-[#185BB7] bg-white"
    >
      <SectionHeader color="text-[#185BB7]" title="تاريخ الكنيسة" />
      <div className="w-full flex lg:flex-row flex-col items-center justify-center lg:gap-[85px] gap-[75px]">
        <div className="lg:w-[717px] w-full flex flex-col items-center justify-center gap-5">
          <p className="cairo text-[20px] lg:text-[28px] font-normal lg:text-justify text-center">
            تزخر إيبارشية أسيوط بالعديد من الكنائس والأديرة القبطية ذات التاريخ
            العريق، والتي تضفي طابعًا روحانيًا وثقافيًا مميزًا على المنطقة. من
            أبرز هذه الكنائس، كنيسة الشهيد أباذير وأخته الشهيدة إيريني، التي تقع
            في منطقة غرب أسيوط. تُعد هذه الكنيسة شاهدة على تاريخ طويل من الإيمان
            والتفاني، حيث تعتبر المنطقة التي تقع فيها الكنيسة هي أصل المدينة
            القديمة،
          </p>
          <Link
            className="px-[79px] py-[10px] bg-[#185BB7] text-white lalezar-regular text-[40px] rounded-3xl transition duration-300 hover:bg-white hover:text-[#185BB7] hover:border-2 hover:border-[#185BB7]"
            aria-label="قراءة المزيد عن الشهيد ابادير واخته الشهيده ايريني"
            href={"/about/church-history"}
          >
            قراءة المزيد
          </Link>
        </div>
        <Image
          src="/image/historyImg.jpg"
          alt="صورة الكنيسة"
          className="drop-shadow-2xl w-[300px] h-[285px] lg:w-[340px] lg:h-[480px] rounded-2xl"
          width={300}
          height={285}
          priority // Adds priority loading to the image
        />
      </div>
    </section>
  );
}
