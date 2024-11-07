import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom"; // Router'dan parametreleri çekmek için
import PageContent from "../../components/layout/PageContent";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
import CustomPagination from "../../components/Shared/customPagination";
import LogoSection from "../../components/ShopPage/LogoSection";
import { fetchCategories } from "../../store/actions/categoryActions";
import { fetchProducts } from "../../store/actions/productActions";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { gender, categoryName, categoryId } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const categories = useSelector((state) => state.categories.categories);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchProducts({ category: categoryId, filter, sort })); // Fetch products using categoryId
  }, [dispatch, categoryId, filter, sort]); // Fetch products on change

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (filter) params.append("filter", filter);
    if (sort) params.append("sort", sort);

    navigate({ search: params.toString() });
  };
  return (
    <PageContent>
      <div className="mt-12 md:mt-8 flex flex-col md:flex-row items-center md:justify-between px-4 md:px-8">
        <h3 className="text-2xl font-bold text-[#252B42]">
          Shop {gender} - {categoryName}
        </h3>
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
      <ShopCard categories={categories} />
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-8">
        {/* Showing Results */}
        <h6 className="text-center md:text-left font-bold text-[#737373] text-sm md:text-base">
          Showing all {products.length} results
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
          <Select onValueChange={(value) => setSort(value)}>
            <SelectTrigger className="w-[200px] bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] font-normal text-sm rounded">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price:asc">Price: Low to High</SelectItem>
              <SelectItem value="price:desc">Price: High to Low</SelectItem>
              <SelectItem value="rating:asc">Rating: Low to High</SelectItem>
              <SelectItem value="rating:desc">Rating: High to Low</SelectItem>
            </SelectContent>
          </Select>

          <Button
            onClick={applyFilters}
            className="bg-[#23A6F0] text-white font-bold text-sm py-2 px-4 rounded-[5px]"
          >
            Filter
          </Button>
        </div>
      </div>
      <ProductCard category={categoryId} filter={filter} sort={sort} />
      <CustomPagination />
      <LogoSection />
    </PageContent>
  );
};

export default ShopPage;
