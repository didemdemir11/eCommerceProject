// src/components/ShopCard.jsx
import React from "react";

const shopCards = [
  {
    id: 1,
    title: "Category 1",
    subtitle: "Subtitle 1",
    imageUrl: "/images/shopcard1.jpg",
  },
  {
    id: 2,
    title: "Category 2",
    subtitle: "Subtitle 2",
    imageUrl: "/images/shopcard2.jpg",
  },
  {
    id: 3,
    title: "Category 3",
    subtitle: "Subtitle 3",
    imageUrl: "/images/shopcard3.jpg",
  },
  {
    id: 4,
    title: "Category 4",
    subtitle: "Subtitle 4",
    imageUrl: "/images/shopcard4.jpg",
  },
  {
    id: 5,
    title: "Category 5",
    subtitle: "Subtitle 5",
    imageUrl: "/images/shopcard5.jpg",
  },
];

const ShopCard = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 p-4">
      {shopCards.map((card) => (
        <div
          key={card.id}
          className="bg-cover bg-center flex items-center justify-center text-center"
          style={{
            backgroundImage: `url(${card.imageUrl})`,
            width: "100%",
            maxWidth: "332px", // Mobilde tam genişlik
            height: "200px", // Mobilde yükseklik
          }}
        >
          <div className=" text-white w-full py-2">
            <h5 className="text-lg font-bold">{card.title}</h5>
            <h6 className="text-sm">{card.subtitle}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;
