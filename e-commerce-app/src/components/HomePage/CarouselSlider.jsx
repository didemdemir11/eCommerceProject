import React from "react";

const CarouselSlider = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold">Featured Products</h2>
      <div className="mt-4 overflow-x-auto">
        <div className="flex space-x-4">
          <div className="bg-gray-200 p-4 rounded w-48">Product 1</div>
          <div className="bg-gray-200 p-4 rounded w-48">Product 2</div>
          <div className="bg-gray-200 p-4 rounded w-48">Product 3</div>
          <div className="bg-gray-200 p-4 rounded w-48">Product 4</div>
          <div className="bg-gray-200 p-4 rounded w-48">Product 5</div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSlider;
