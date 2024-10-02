import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-5">
      <Image
        src="/image/logo.png"
        alt="Church logo"
        width={134}
        height={127}
        className="drop-shadow-lg lg:w-[124px] lg:h-[117px] w-[84px] h-[77px] transition-transform duration-300 hover:scale-105"
        aria-label="Church logo"
      />
      <div className="flex flex-col items-center lg:items-start justify-center gap-0 text-center lg:text-left">
        <div className="lalezar-regular lg:text-[30px] text-[12px] sm:text-[14px]">
          كنيسة الشهيد ابادير واخته الشهيده ايريني بأسيوط
        </div>
        <div className="arbutus-regular text-[12px] sm:text-[14px] lg:text-[20px]">
          Martyr Abader And Eriny. Asyut
        </div>
      </div>
    </div>
  );
}
