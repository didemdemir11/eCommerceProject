import React from "react";
const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Category 1",
    oldPrice: "$40.00",
    newPrice: "$30.00",
    imageUrl: "/images/product1.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 2,
    name: "Product 2",
    category: "Category 1",
    oldPrice: "$40.00",
    newPrice: "$30.00",
    imageUrl: "/images/product2.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 3,
    name: "Product 3",
    category: "Category 1",
    oldPrice: "$40.00",
    newPrice: "$30.00",
    imageUrl: "/images/product3.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 4,
    name: "Product 4",
    category: "Category 1",
    oldPrice: "$40.00",
    newPrice: "$30.00",
    imageUrl: "/images/product4.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 5,
    name: "Product 5",
    category: "Category 1",
    oldPrice: "$40.00",
    newPrice: "$30.00",
    imageUrl: "/images/product5.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 6,
    name: "Product 6",
    category: "Category 1",
    oldPrice: "$40.00",
    newPrice: "$30.00",
    imageUrl: "/images/product6.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 7,
    name: "Product 7",
    category: "Category 1",
    oldPrice: "$40.00",
    newPrice: "$30.00",
    imageUrl: "/images/product7.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 8,
    name: "Product 8",
    category: "Category 1",
    oldPrice: "$40.00",
    newPrice: "$30.00",
    imageUrl: "/images/product8.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
];

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-20">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 text-center ">
          <div
            className="w-full h-48 bg-cover bg-center mb-4 "
            style={{ backgroundImage: `url(${product.imageUrl})` }}
          ></div>
          <h5 className="text-lg font-bold text-[#252B42] mb-2">
            {product.name}
          </h5>
          <h6 className="text-sm font-semibold text-[#737373] mb-2">
            {product.category}
          </h6>
          <div className="flex justify-center items-center mb-2 space-x-2">
            <h5 className="text-sm font-semibold text-[#BDBDBD] line-through">
              {product.oldPrice}
            </h5>
            <h5 className="text-sm font-semibold text-[#23856D]">
              {product.newPrice}
            </h5>
          </div>
          <div className="flex justify-center space-x-2">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
