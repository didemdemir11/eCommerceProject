import React from "react";
const categories = [
  {
    id: 1,
    title: "MEN",
    imageUrl: "images/menCategories.jpg",
    width: "w-full",
    height: "h-[500px]",
  },
  {
    id: 2,
    title: "WOMEN",
    imageUrl: "images/womenCategories.jpg",
    width: "w-full",
    height: "h-[500px]",
  },
  {
    id: 3,
    title: "ACCESSORIES",
    imageUrl: "images/accessories.jpg",
    width: "w-full",
    height: "h-[242px]",
  },
  {
    id: 4,
    title: "KIDS",
    imageUrl: "images/kidsCategories.jpg",
    width: "w-full",
    height: "h-[242px]",
  },
];

const CategorySection = () => {
  return (
    <section className="p-4 bg-[#FAFAFA]">
      <h3 className="text-2xl text-center font-bold mb-2">EDITOR'S PICK</h3>
      <p className="text-center mb-6">
        Problems trying to resolve the conflict between{" "}
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-y-0 md:gap-x-6">
        <div
          className="relative bg-cover bg-center w-full h-[500px] md:col-span-2 md:row-span-2"
          style={{ backgroundImage: `url(${categories[0].imageUrl})` }}
        >
          <div className="absolute bottom-8 left-8 bg-white w-[170px] h-[48px] flex items-center justify-center text-black">
            <span>{categories[0].title}</span>
          </div>
        </div>

        {/* Women Category */}
        <div
          className="relative bg-cover bg-center w-full h-[500px] md:col-span-1 md:row-span-2"
          style={{ backgroundImage: `url(${categories[1].imageUrl})` }}
        >
          <div className="absolute bottom-8 left-8 bg-white w-[170px] h-[48px] flex items-center justify-center text-black">
            <span>{categories[1].title}</span>
          </div>
        </div>

        {/* Accessories Category */}
        <div
          className="relative bg-cover bg-center w-full h-[242px] md:col-span-1 md:row-span-1"
          style={{ backgroundImage: `url(${categories[2].imageUrl})` }}
        >
          <div className="absolute bottom-4 left-8 bg-white w-[170px] h-[48px] flex items-center justify-center text-black">
            <span>{categories[2].title}</span>
          </div>
        </div>

        {/* Kids Category */}
        <div
          className="relative bg-cover bg-center w-full h-[242px] md:col-span-1 md:row-span-1"
          style={{ backgroundImage: `url(${categories[3].imageUrl})` }}
        >
          <div className="absolute bottom-4 left-8 bg-white w-[170px] h-[48px] flex items-center justify-center text-black">
            <span>{categories[3].title}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
