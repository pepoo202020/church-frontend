import Image from "next/image";
import { SectionHeader } from "../_components/SectionHeader";
import Link from "next/link";
import { books } from "../_data/books";

export default function ChurchLibrary() {
  const featuredBooks = books.filter((book) => book.featured);

  return (
    <section className="w-full py-5 text-[#1E60BC]">
      <div className="relative z-10 flex flex-col items-center pt-[28px] px-5 gap-[21px] pb-5">
        <SectionHeader color="text-[#1E60BC]" title="كتب الكنيسة" />
        <div className="w-full flex flex-wrap items-center justify-center gap-[29px] mt-5">
          {featuredBooks.map((bookItem, index) => (
            <Link
              key={index}
              href={bookItem.link}
              aria-label={`قراءة المزيد عن ${bookItem.maintitle}`}
              className="w-[425px] h-[529px] overflow-hidden rounded-xl drop-shadow-lg relative transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src={bookItem.image}
                alt={`صورة كتاب: ${bookItem.maintitle}`}
                layout="responsive"
                width={425}
                height={529}
                className="object-cover"
              />
              <div className="absolute top-0 left-0 h-full w-3/4 z-[9] bg-gradient-to-r from-white to-white/0"></div>
              <Image
                src={bookItem.logo}
                alt={`${bookItem.maintitle} logo`}
                width={80}
                height={98}
                className="absolute top-2 left-2 z-[99]"
              />
              <div className="absolute bottom-0 left-0 w-full flex flex-col justify-center bg-[#1E60BC] z-[999] py-5 px-5">
                <h5 className="text-white cairo font-black text-[20px] mb-3">
                  {bookItem.subTitle}
                </h5>
                <h1 className="text-white kufam font-black text-[22px] w-full text-center">
                  {bookItem.maintitle}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
