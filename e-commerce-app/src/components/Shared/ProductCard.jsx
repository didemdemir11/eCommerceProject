import React from "react";
import products from "../../data/products";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-20">
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
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
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
