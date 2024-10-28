import React from "react";
import CategorySection from "../components/HomePage/CategorySection";
import BestsellerSection from "../components/HomePage/BestSellerSection";
import NewsContainer from "../components/HomePage/NewsContainer";
import BlogSection from "../components/HomePage/BlogSection";
import CtaSection from "../components/HomePage/CtaSection";

const HomePage = () => {
  return (
    <div>
      <CategorySection />
      <BestsellerSection />
      <NewsContainer />
      <CtaSection />
      <BlogSection />
    </div>
  );
};

export default HomePage;
