// src/components/ShopCard.jsx
import React from "react";

const ShopCard = ({ categories }) => {
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 p-4">
      {topCategories.map((category) => (
        <a
          href={`/shop/${category.gender}/${category.code}/${category.id}`} // Link yapısını oluştur
          key={category.id}
          className="bg-cover bg-center flex items-center justify-center text-center"
          style={{
            backgroundImage: `url(${category.img})`,
            width: "100%",
            maxWidth: "332px",
            height: "200px",
          }}
        >
          <div className="text-white w-full py-2">
            <h5 className="text-lg font-bold">{category.title}</h5>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ShopCard;
