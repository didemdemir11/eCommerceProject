import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
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

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

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
                    <CarouselItem>
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-auto rounded"
                      />
                    </CarouselItem>
                    {/* Add more CarouselItem components for additional images if needed */}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="flex space-x-2 mt-4">
                  {/* Thumbnail previews */}
                  <img
                    src={product.imageUrl}
                    alt="Thumbnail"
                    className="w-16 h-16 object-cover rounded"
                  />
                  {/* Add more thumbnails as necessary */}
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
                    {product.newPrice}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-500 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>

                {/* Availability */}
                <div className="flex items-center mt-2 space-x-1">
                  <h6 className="text-[#737373] font-bold text-sm">
                    Availability:
                  </h6>
                  <span className="text-[#23A6F0] font-semibold">In Stock</span>
                </div>

                {/* Product Description */}
                <p className="text-[#858585] font-normal text-sm mt-4">
                  Description of the product can go here.
                </p>

                <hr className="border border-[#BDBDBD] my-4" />

                {/* Color Palette */}
                <div className="flex items-center mt-2 space-x-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="w-5 h-5 rounded-full border"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>

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
      <FullWidthSection bgColor="bg-white">
        <PageContent>
          <div className="mt-8">
            {/* Başlık Linkleri */}
            <div className="flex justify-center space-x-4 mb-4">
              <a
                href="#description"
                className="text-lg font-semibold text-[#252B42]"
              >
                Description
              </a>
              <a
                href="#additional-information"
                className="text-lg font-semibold text-[#252B42]"
              >
                Additional Information
              </a>
              <a
                href="#reviews"
                className="text-lg font-semibold text-[#252B42]"
              >
                Reviews (0)
              </a>
            </div>

            {/* Ayırıcı Çizgi */}
            <hr className="border border-[#ECECEC] mb-8 max-w-screen-lg mx-auto" />

            {/* Ürün Detayları */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Görsel */}
              <div
                className="w-[325px] h-[282px] bg-[#C4C4C433] rounded-tl-md overflow-hidden"
                style={{
                  borderRadius: "5.62px 0 0 0",
                }}
              >
                <img
                  src="/path/to/your/product-image.jpg" // Görselinize göre yol düzenleyin
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Açıklama ve İçerik */}
              <div className="max-w-lg">
                {/* Başlık */}
                <h3 className="text-[#252B42] font-bold text-2xl mb-4">
                  the quick fox jumps over
                </h3>

                {/* Paragraflar */}
                <p className="text-[#737373] text-sm mb-4">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-[#737373] text-sm mb-4">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-[#737373] text-sm mb-8">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>

                {/* Başlık ve Liste */}
                <h3 className="text-[#252B42] font-bold text-2xl mb-4">
                  the quick fox jumps over
                </h3>

                {/* Liste Elemanları */}
                <ul className="space-y-2 mb-8">
                  {Array(4)
                    .fill("the quick fox jumps over the lazy dog")
                    .map((text, index) => (
                      <li key={index} className="flex items-center">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-[#737373] mr-2"
                          size="xs"
                        />
                        <h6 className="text-[#737373] font-bold text-sm">
                          {text}
                        </h6>
                      </li>
                    ))}
                </ul>

                {/* Aynı Bölümün Tekrarı */}
                <h3 className="text-[#252B42] font-bold text-2xl mb-4">
                  the quick fox jumps over
                </h3>

                <ul className="space-y-2">
                  {Array(4)
                    .fill("the quick fox jumps over the lazy dog")
                    .map((text, index) => (
                      <li key={index} className="flex items-center">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-[#737373] mr-2"
                          size="xs"
                        />
                        <h6 className="text-[#737373] font-bold text-sm">
                          {text}
                        </h6>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </PageContent>
      </FullWidthSection>
      <FullWidthSection bgColor="bg-[#FAFAFA] ">
        <PageContent>
          <h3 className="text-[#252B42] font-bold text-2xl flex space-x-4 mb-6">
            BESTSELLER PRODUCTS
          </h3>
          <hr className="border border-[#ECECEC] mb-8 max-w-screen-lg mx-auto" />
          <ProductCard />
          <LogoSection />
        </PageContent>
      </FullWidthSection>
    </>
  );
};

export default ProductDetailPage;
