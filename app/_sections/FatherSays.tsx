import React from "react";
import { SectionHeader } from "../_components/SectionHeader";

export default function FatherSays() {
  const { body, name } = {
    body: '"لقد نُفينا من الفردوس الأرضي لأننا لم نصم. فيجب أن نصوم لنرجع إلى الفردوس السمائي، لأن الصوم يرد إلينا الخسائر المسببة عن عدم صوم آدم، ويصالحنا مع الله"',
    name: "القديس باسيليوس الكبير",
  };

  return (
    <section
      className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5 text-[#185BB7]"
      aria-label="أقوال الاباء"
    >
      <SectionHeader color="text-[#185BB7]" title="أقوال الاباء" />
      <div className="mt-7 mx-2 w-fit h-fit py-5 px-4 bg-[#70A7DF] max-w-[1049px] rounded-2xl drop-shadow-2xl flex flex-col items-center justify-center gap-5 transition-transform duration-300 lg:hover:scale-105 lg:hover:shadow-lg hover:scale-100 hover:shadow-lg">
        <p className="font-bold almarai text-[50px] text-white text-center lg:text-[40px] md:text-[30px] sm:text-[24px]">
          {body}
        </p>
        <h1 className="font-black almarai text-[51px] text-[#FAFF00] lg:text-[40px] md:text-[30px] sm:text-[24px]">
          {name}
        </h1>
      </div>
    </section>
  );
}
