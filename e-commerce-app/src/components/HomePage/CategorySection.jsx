import React from "react";

const CategorySection = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold">Shop by Category</h2>
      <div className="flex justify-around mt-4">
        <div className="text-center">
          <div className="bg-gray-200 p-4 rounded">Men</div>
        </div>
        <div className="text-center">
          <div className="bg-gray-200 p-4 rounded">Women</div>
        </div>
        <div className="text-center">
          <div className="bg-gray-200 p-4 rounded">Accessories</div>
        </div>
        <div className="text-center">
          <div className="bg-gray-200 p-4 rounded">Kids</div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
