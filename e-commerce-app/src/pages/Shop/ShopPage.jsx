import React from "react";
import PageContent from "../../components/layout/PageContent";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ProductCard from "../../components/Shared/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faList } from "@fortawesome/free-solid-svg-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ShopCard from "../../components/ShopPage/ShopCard";

const ShopPage = () => {
  return (
    <PageContent>
      <div className="mt-12 md:mt-8 flex flex-col md:flex-row items-center md:justify-between px-4 md:px-8">
        <h3 className="text-2xl font-bold text-[#252B42]">Shop</h3>
        <Breadcrumb
          className="mt-2 md:mt-0 md:flex md:items-center "
          separator={<BreadcrumbSeparator />}
        >
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="font-bold text-[#252B42]">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop" className="font-bold text-[#737373]">
                Shop
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ShopCard />
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-8">
        {/* Showing Results */}
        <h6 className="text-center md:text-left font-bold text-[#737373] text-sm md:text-base">
          Showing all 12 results
        </h6>

        {/* Views Section */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <h6 className="font-bold text-[#737373] text-sm">Views:</h6>
          <div className="flex space-x-2">
            <button className="border border-[#ECECEC] rounded-[5px] p-2 w-11 h-11 flex items-center justify-center">
              <FontAwesomeIcon icon={faTh} className="text-[16px]" />
            </button>
            <button className="border border-[#ECECEC] rounded-[5px] p-2 w-11 h-11 flex items-center justify-center">
              <FontAwesomeIcon icon={faList} className="text-[16px]" />
            </button>
          </div>
        </div>

        {/* Select and Filter Button */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Select>
            <SelectTrigger className="w-[200px] bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] font-normal text-sm rounded">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
              <SelectItem value="option4">Option 4</SelectItem>
              <SelectItem value="option5">Option 5</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#23A6F0] text-white font-bold text-sm py-2 px-4 rounded-[5px]">
            Filter
          </Button>
        </div>
      </div>
      <ProductCard></ProductCard>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div>Customer logos</div>
    </PageContent>
  );
};

export default ShopPage;
