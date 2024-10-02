import Link from "next/link";
import { SectionHeader } from "../_components/SectionHeader";
import Image from "next/image";

export default function ChurchScience() {
  const sciences = [
    { title: "الطقس", icon: "/image/icons/icon01.png", link: "/" },
    { title: "القبطي", icon: "/image/icons/icon02.png", link: "/" },
    { title: "تاريخ الكنيسة", icon: "/image/icons/icon03.png", link: "/" },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5 text-white bg-[#185BB7]">
      <SectionHeader color="text-white" title="علوم الكنيسة" />
      <div className="w-full mt-10 flex items-center justify-center flex-wrap gap-10">
        {sciences.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            aria-label={`اقرأ المزيد عن ${item.title}`}
            className="flex flex-col items-center justify-center gap-5 bg-white rounded-xl py-5 px-5 w-[350px] h-[244px] group transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:border-2 hover:bg-transparent hover:border-white"
          >
            <Image
              src={item.icon}
              alt={`رمز ${item.title}`}
              width={128}
              height={118}
              className="object-contain"
            />
            <h1 className="text-[#70A7DF] text-[54px] blaka group-hover:text-white">
              {item.title}
            </h1>
          </Link>
        ))}
      </div>
    </section>
  );
}
