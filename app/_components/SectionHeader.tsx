"use client";
import React from "react";

interface SectionHeaderProps {
  title: string;
  color?: string; // Make color optional
  align?: "left" | "center" | "right"; // Text alignment options
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  color = "white", // Default color
  align = "center", // Default alignment
}) => {
  return (
    <h1
      className={`almarai lg:text-[51px] text-[38px] ${
        color === "white" ? "text-white" : "text-[#185BB7]"
      } font-extrabold text-${align}`}
      style={{ textAlign: align }} // Apply text alignment dynamically
    >
      {title}
    </h1>
  );
};
