"use client";

import { useEffect, useState } from "react";

export default function CopticDate() {
  const [currentDate, setCurrentDate] = useState<string>("Loading...");

  useEffect(() => {
    try {
      const date = new Date();
      const formattedCopticDate = date.toLocaleDateString("ar-EG", {
        calendar: "coptic",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      // Clean the output to remove any unwanted text
      const cleanDate = formattedCopticDate.replace(/ERA1/, "").trim();
      setCurrentDate(cleanDate);
    } catch (error) {
      console.error("Error formatting Coptic date:", error);
      setCurrentDate("تاريخ غير متوفر"); // Fallback message in Arabic
    }
  }, []);

  return (
    <div
      className="text-lg font-semibold text-center text-[#1E60BC]"
      aria-live="polite"
    >
      <span>{currentDate}</span>
    </div>
  );
}
