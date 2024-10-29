import React from "react";
import ProductCard from "../Shared/ProductCard";

const BestsellerSection = () => {
  return (
    <section className="p-4 bg-white">
      <div className="text-center mb-6">
        <h4 className="text-gray-500">Featured Products</h4>
        <h2 className="text-2xl font-bold text-[#252B42]">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-gray-500">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <ProductCard />
    </section>
  );
};

export default BestsellerSection;
