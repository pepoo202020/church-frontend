import React from "react";

type PagenationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagentation({
  currentPage,
  onPageChange,
  totalPages,
}: PagenationProps) {
  const pageNumbers = [];

  //always include the first and last page
  pageNumbers.push(1);

  if (currentPage > 3) {
    pageNumbers.push("...");
  }

  //show up to 3 middle page numbers (current page and surrounding)
  const startPage = Math.max(currentPage - 1, 2);
  const endPage = Math.min(currentPage + 1, totalPages - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  if (currentPage < totalPages - 2) {
    pageNumbers.push("...");
  }

  pageNumbers.push(totalPages);
  return (
    <div className="flex justify-center items-center space-x-2 my-5">
      {pageNumbers.map((number, index) => {
        if (number === "...") {
          return (
            <span key={index} className="text-gray-400 text-[45px] almarai">
              ...
            </span>
          );
        }
        return (
          <button
            key={index}
            onClick={() => onPageChange(Number(number))}
            className={`${
              currentPage === number
                ? "bg-blue-500 text-white"
                : "bg-blue-100 text-blue-500"
            } px-6 py-2 rounded-md mx-1 text-[45px] almarai`}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
}
