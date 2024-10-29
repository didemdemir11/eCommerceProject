import React from "react";
import CategorySection from "../../components/HomePage/CategorySection";
import BestsellerSection from "../../components/HomePage/BestSellerSection";
import NewsContainer from "../../components/HomePage/NewsContainer";
import BlogSection from "../../components/HomePage/BlogSection";
import CtaSection from "../../components/HomePage/CtaSection";
import PageContent from "../../components/layout/PageContent";

const HomePage = () => {
  return (
    <div>
      {/* PageContent ile sarılı içerikler */}
      <PageContent>
        <CategorySection />
        <BestsellerSection />
        <CtaSection />
      </PageContent>
      <NewsContainer />
      <BlogSection />
    </div>
  );
};

export default HomePage;
