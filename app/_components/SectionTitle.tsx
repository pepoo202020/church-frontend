import React from "react";

export default function SectionTitle({
  children,
  flexDirection,
  items,
  justify,
  image,
}: Readonly<{
  children: React.ReactNode;
  flexDirection: string;
  items: string;
  justify: string;
  image: string;
}>) {
  return (
    <div
      className={`w-screen bg-cover px-5 py-10 flex ${flexDirection} ${items} ${justify}`}
      style={{
        backgroundImage: `url('/image/${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}
