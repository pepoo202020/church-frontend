import SectionTitle from "@/app/_components/SectionTitle";
import Image from "next/image";
import React from "react";

export default function SaintStory() {
  return (
    <div>
      <SectionTitle
        image="saintStorybg.png"
        flexDirection="flex-row"
        items="items-center"
        justify="justify-center"
      >
        <h1 className="almarai text-[#1E60BC] text-[30px] lg:text-[60px] text-center font-extrabold mx-5 lg:mx-24">
          قصة حياة الشهيدين العظيمين ابادير والشهيده ايريني اخته
        </h1>
      </SectionTitle>
      <div className="py-5 px-5 lg:px-24 flex flex-col items-center gap-10">
        <Image
          src="/image/saintStoryImg.png"
          alt="Church logo"
          width={472}
          height={447}
          className="drop-shadow-lg lg:w-[472px] lg:h-[447px] w-[200px] h-[150px] transition-transform duration-300 hover:scale-105"
          aria-label="Church logo"
        />
        <p className="cairo text-[28px] text-[#1E60BC] text-center">
          القديسان أبادير وإيرائى أخته ابنا أخت واسيليدس الوزير وقد وُلِدَا
          وتربيَّا في أنطاكية وكان أبادير قائداً عظيماً في جيش دقلديانوس. فلما
          كفر دقلديانوس واضطهد المسيحيين، ظهر السيد المسيح لأبادير في رؤيا
          الليل، وطلب منه أن يذهب مع أخته إيرائى إلى مصر لينالا إكليل الشهادة.
          وقد رأت أخته أيضاً نفس الرؤيا. فانطلقا بفرح ليتمما ما أمرهما به الرب،
          ووصلا إلى الإسكندرية ومنها إلى أنصنا حيث اعترفا أمام إريانوس بالسيد
          المسيح، فعذبهما عذابات شديدة. وكان الرب يقويهما في وسط هذه الآلام
          الشديدة وقد حمل نفسيهما ليشاهدا الفردوس، فامتلأ كل منهما قوة وثباتاً.
          ثم كتب الوالي قضيتهما وحكم بقطع رأسيهما فنالا إكليل الشهادة. وقام بعض
          المؤمنين بتكفين جسديهما وأخذهما شماس يُدعى صموئيل إلى منزله حتى انقضاء
          زمن الاستشهاد حيث بُنيت لهما كنيسة عظيمة ويوجد الآن باسميهما كنيسة في
          أسيوط وأخرى في دشلوط مركز ديروط محافظة أسيوط.بركة صلواتهما فلتكن معنا،
          ولربنا المجد دائماً أبدياً آمين.
        </p>
      </div>
    </div>
  );
}
