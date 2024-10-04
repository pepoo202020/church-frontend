import React from "react";

export default function SectionTitle({
  children,
  flexDirection,
  items,
  justify,
}: Readonly<{
  children: React.ReactNode;
  flexDirection: string;
  items: string;
  justify: string;
}>) {
  return (
    <div
      className={`w-screen bg-cover px-5 py-10 flex ${flexDirection} ${items} ${justify}`}
      style={{
        backgroundImage: `url('/image/sectionbg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}
