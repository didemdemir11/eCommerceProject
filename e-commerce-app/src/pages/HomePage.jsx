import React from "react";
import CategorySection from "../components/HomePage/CategorySection";
import BestsellerSection from "../components/HomePage/BestSellerSection";
import CarouselSlider from "../components/HomePage/CarouselSlider";
import NewsContainer from "../components/HomePage/NewsContainer";
import BlogSection from "../components/HomePage/BlogSection";

const HomePage = () => {
  return (
    <div>
      <CarouselSlider />
      <CategorySection />
      <BestsellerSection />
      <NewsContainer />
      <BlogSection />
    </div>
  );
};

export default HomePage;
