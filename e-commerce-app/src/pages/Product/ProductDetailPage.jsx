import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="p-4 max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-auto my-4"
      />
      <p className="text-gray-700">{product.category}</p>
      <div className="flex items-center space-x-2">
        <span className="text-gray-500 line-through">{product.oldPrice}</span>
        <span className="text-green-600 font-semibold">{product.newPrice}</span>
      </div>
      <p className="mt-4 text-gray-500">
        Description of the product can go here.
      </p>
    </div>
  );
};

export default ProductDetailPage;
