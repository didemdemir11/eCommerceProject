import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShoppingCart,
  faHeart,
  faSyncAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import PageContent from "../../components/layout/PageContent";
import FullWidthSection from "../../components/Shared/FullWidthSection";
import ProductCard from "../../components/Shared/ProductCard";
import LogoSection from "../../components/ShopPage/LogoSection";
import { fetchProductById } from "../../store/actions/productActions"; // Thunk action for fetching specific product

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <FullWidthSection bgColor="bg-[#FAFAFA]">
        <PageContent>
          <div className="px-4 md:px-8">
            {/* Breadcrumb and Title */}
            <div className="mt-12 md:mt-8 flex flex-col md:flex-row items-center md:justify-between">
              <h3 className="text-2xl font-bold text-[#252B42]">Shop</h3>
              <Breadcrumb
                className="mt-2 md:mt-0 md:flex md:items-center"
                separator={<BreadcrumbSeparator />}
              >
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="font-bold text-[#252B42]"
                    >
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/shop"
                      className="font-bold text-[#737373]"
                    >
                      Shop
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Product Details */}
            <div className="mt-8 flex flex-col md:flex-row">
              {/* Carousel Section */}
              <div className="w-full md:w-1/2">
                <Carousel>
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={image.url}
                          alt={product.name}
                          className="w-full h-auto rounded"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="flex space-x-2 mt-4">
                  {/* Thumbnail previews */}
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt="Thumbnail"
                      className="w-16 h-16 object-cover rounded"
                    />
                  ))}
                </div>
              </div>

              {/* Product Information */}
              <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-8">
                <h4 className="text-[#252B42] font-normal text-2xl">
                  {product.name}
                </h4>

                {/* Ratings and Reviews */}
                <div className="flex items-center mt-2 space-x-2">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="text-[#F3CD03]"
                    />
                  ))}
                  <h6 className="text-[#737373] font-bold text-sm">
                    10 Reviews
                  </h6>
                </div>

                {/* Price */}
                <div className="flex items-center mt-4 space-x-2">
                  <span className="text-[#252B42] font-bold text-xl">
                    {product.price}₺
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-500 line-through">
                      {product.oldPrice}₺
                    </span>
                  )}
                </div>

                {/* Availability */}
                <div className="flex items-center mt-2 space-x-1">
                  <h6 className="text-[#737373] font-bold text-sm">
                    Availability:
                  </h6>
                  <span className="text-[#23A6F0] font-semibold">
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                {/* Product Description */}
                <p className="text-[#858585] font-normal text-sm mt-4">
                  {product.description}
                </p>

                <hr className="border border-[#BDBDBD] my-4" />

                {/* Action Buttons */}
                <div className="flex items-center mt-6 space-x-4">
                  <button className="bg-[#23A6F0] text-white font-semibold py-2 px-4 rounded-md">
                    Select Options
                  </button>
                  <div className="flex space-x-2">
                    <button className="bg-white border border-[#E8E8E8] p-3 rounded-full">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="text-[#252B42]"
                      />
                    </button>
                    <button className="bg-white border border-[#E8E8E8] p-3 rounded-full">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="text-[#252B42]"
                      />
                    </button>
                    <button className="bg-white border border-[#E8E8E8] p-3 rounded-full">
                      <FontAwesomeIcon
                        icon={faSyncAlt}
                        className="text-[#252B42]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContent>
      </FullWidthSection>

      {/* Additional Sections */}
      <FullWidthSection bgColor="bg-white">
        <PageContent>
          <h3 className="text-[#252B42] font-bold text-2xl flex space-x-4 mb-6">
            BESTSELLER PRODUCTS
          </h3>
          <ProductCard />
          <LogoSection />
        </PageContent>
      </FullWidthSection>
    </>
  );
};

export default ProductDetailPage;
