import React from "react";

const BestsellerSection = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold">Bestsellers</h2>
      <div className="flex justify-around mt-4">
        <div className="bg-gray-200 p-4 rounded">Product Card 1</div>
        <div className="bg-gray-200 p-4 rounded">Product Card 2</div>
        <div className="bg-gray-200 p-4 rounded">Product Card 3</div>
      </div>
    </section>
  );
};

export default BestsellerSection;
