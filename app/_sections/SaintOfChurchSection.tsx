import React from "react";
import { SectionHeader } from "../_components/SectionHeader";
import Image from "next/image";
import Link from "next/link";

export default function SaintOfChurchSection() {
  return (
    <section
      id="saint"
      className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5 text-white bg-[#185BB7]"
    >
      <SectionHeader color="white" title="شفيع الكنيسة" />
      <div className="w-full flex lg:flex-row flex-col items-center justify-center lg:gap-[85px] gap-[75px]">
        <Image
          src="/image/saintImage.png"
          alt="صورة الشفيع"
          className="drop-shadow-2xl w-[300px] h-[285px] lg:w-[472px] lg:h-[447px]"
          width={300}
          height={285}
          priority // Adds priority loading to the image
        />
        <div className="lg:w-[717px] w-full flex flex-col items-center justify-center gap-5">
          <h2 className="kufam text-[18px] lg:text-[34px] font-black">
            الشهيد ابادير واخته الشهيده ايريني
          </h2>
          <p className="cairo text-[20px] lg:text-[28px] font-normal lg:text-justify text-center">
            نشأتهما هما ابنا أخت باسيليوس الوزير الأنطاكي؛ تعين أبادير
            إسفهسلارًا قائدًا عظيمًا في جيش دقلديانوس. ظهر له السيد المسيح في
            رؤيا بالليل، وطلب منه أن يذهب مع أخته إيرائي إلى مصر لينالا إكليل
            الاستشهاد، وقد تمتعت أخته بذات الرؤيا، فعرفا أنها من الله وانطلقا
            بفرح ليتمتعا بما وهُب لهما.
          </p>
          <Link
            className="px-[79px] py-[10px] bg-white text-[#1E60BC] lalezar-regular text-[40px] rounded-3xl transition duration-300 hover:bg-[#1E60BC] hover:text-white"
            aria-label="قراءة المزيد عن الشهيد ابادير واخته الشهيده ايريني"
            href={"/about/saint-story"}
          >
            قراءة المزيد
          </Link>
        </div>
      </div>
    </section>
  );
}
