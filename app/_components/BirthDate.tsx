"use client";

import { useEffect, useState } from "react";

export default function BirthDate() {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    try {
      const date = new Date();
      const formattedDate = date.toLocaleDateString("ar-EG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setCurrentDate(formattedDate);
    } catch (error) {
      console.error("Error formatting date:", error);
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
