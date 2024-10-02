import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="w-full h-full">
        <div
          className="bg-cover w-full h-full hidden lg:block"
          style={{
            backgroundImage: `url('/image/bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Hero background"
        />
        <div
          className="bg-cover w-full h-full block lg:hidden"
          style={{
            backgroundImage: `url('/image/bgMobile.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Hero background mobile"
        />
      </div>
      <div className="absolute lg:top-12 top-8 lg:right-[114px] right-0 z-10 text-white lg:w-[870px] w-full px-2 lg:mx-0 flex flex-col items-center lg:gap-[65px] gap-4">
        <h1 className="almarai lg:text-[99px] text-[53px] lg:font-extrabold font-bold">
          مرحباً بكم
        </h1>
        <h1 className="lemonada lg:text-[40px] text-[18px] font-bold text-center ">
          الموقع <span className="text-[#FAFF00]">الرسمي</span> لكنيسة الشهيد
          ابادير واخته الشهيده ايريني
        </h1>
      </div>
    </div>
  );
}
