import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const CustomPagination = ({ currentPage = 2, totalPages = 3 }) => {
  return (
    <Pagination className="flex items-center justify-center mt-4 space-x-1  rounded-md p-2 bg-white">
      <PaginationContent>
        {/* First Button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className={`px-4 py-2 rounded-l-md font-semibold ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed bg-gray-100"
                : "text-gray-700 bg-gray-100"
            } border border-gray-300`}
          >
            First
          </PaginationPrevious>
        </PaginationItem>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <PaginationItem key={pageNum}>
              <PaginationLink
                href="#"
                isActive={currentPage === pageNum}
                className={`px-4 py-2 border border-gray-300 ${
                  currentPage === pageNum
                    ? "bg-[#23A6F0] text-white"
                    : "text-blue-500 hover:bg-gray-200"
                }`}
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            className={`px-4 py-2 rounded-r-md font-semibold ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed "
                : "text-[#23A6F0] "
            } border border-gray-300`}
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default CustomPagination;
