import { SectionHeader } from "@/app/_components/SectionHeader";
import SectionTitle from "@/app/_components/SectionTitle";
import React from "react";

export default function ChurchHistory() {
  return (
    <div>
      <SectionTitle
        flexDirection="flex-row"
        image="churchHistoryBg.png"
        items="items-center"
        justify="justify-center"
      >
        <SectionHeader title="تاريخ الكنيسة" align="center" color="blue" />
      </SectionTitle>
      <div className="w-full my-8"></div>
    </div>
  );
}
