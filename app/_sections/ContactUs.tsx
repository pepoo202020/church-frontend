import React from "react";
import { SectionHeader } from "../_components/SectionHeader";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTelegramPlane,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

export default function ContactUs() {
  const socialLinks = [
    { icon: <FaPhoneAlt />, link: "tel:+201126884803" },
    { icon: <FaFacebookF />, link: "https://www.facebook.com" },
    { icon: <FaInstagram />, link: "https://www.instagram.com" },
    { icon: <FaWhatsapp />, link: "https://www.wa.me/+201126884803" },
    { icon: <FaTiktok />, link: "https://www.tiktok.com" },
    { icon: <FaTelegramPlane />, link: "https://www.telegram.com" },
  ];

  return (
    <section className="w-fit lg:w-full flex flex-col items-center justify-center pt-[28px] overflow-hidden gap-[21px] pb-5 185BB7 bg-white">
      <SectionHeader color="blue" title="للتواصل معنا" />
      <div className="w-full flex flex-col lg:flex-row items-start justify-center lg:gap-5 gap-5 my-2 px-2">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-2">
          <p className="cairo text-[26px] font-light text-[#185BB7] text-center lg:text-start">
            يمكنك التواصل مع الكنيسة من خلال الصفحات المختلفة للكنيسة والمجموعات
            المتعلقة بالخدمات المختلفة على ال Facebook والتي ستجد روابطها من
            خلال الموقع مبوبة تبعا لكل نشاط ومنها
          </p>
          <p className="cairo text-[31px] font-semibold text-[#185BB7] mb-2 text-center lg:text-start">
            العنوان : 55 شارع زين الدين الشريف، اسيوط.
          </p>
          <div className="w-full flex items-center justify-center lg:justify-start flex-wrap gap-5">
            {socialLinks.map(({ icon, link }, index) => (
              <Link
                key={index}
                href={link}
                aria-label={`Link to ${link}`} // Add accessibility label
                className="bg-[#185BB7] w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full flex justify-center items-center group hover:bg-transparent transition-all duration-500"
              >
                {React.cloneElement(icon, {
                  fill: "white",
                  size: 30,
                  className:
                    "group-hover:fill-[#185BB7] transition-all duration-500 group-hover:scale-150",
                })}
              </Link>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/3 border-2 border-[#185BB7] overflow-hidden rounded-2xl drop-shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1774.6570684595079!2d31.175327727490274!3d27.177861884271582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14450b1313f42017%3A0x5d24eb63039a3412!2z2LQg2LnZhNmI2Ycg2KfZhNmG2LXYp9ixINin2YXYp9mFINmD2YbZitiz2Ycg2KfZhNi02YfZitivINin2KjYp9iv2YrYsQ!5e0!3m2!1sen!2seg!4v1727864635431!5m2!1sen!2seg"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
