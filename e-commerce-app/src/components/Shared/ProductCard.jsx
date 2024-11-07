import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/actions/productActions";

const ProductCard = ({ category, filter, sort }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    dispatch(fetchProducts({ category, filter, sort }));
  }, [dispatch, category, filter, sort]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-20">
      {products.slice(0, 8).map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <div className="bg-white p-4 text-center ">
            <div
              className="w-full h-48 bg-cover bg-center mb-4 "
              style={{ backgroundImage: `url(${product.images[0]?.url})` }}
            ></div>
            <h5 className="text-lg font-bold text-[#252B42] mb-2">
              {product.name}
            </h5>
            <h6 className="text-sm font-semibold text-[#737373] mb-2">
              {product.category}
            </h6>
            <div className="flex justify-center items-center mb-2 space-x-2">
              {product.oldPrice ? (
                <>
                  <h5 className="text-sm font-semibold text-[#BDBDBD] line-through">
                    {product.oldPrice}₺
                  </h5>
                  <h5 className="text-sm font-semibold text-[#23856D]">
                    {product.price}₺
                  </h5>
                </>
              ) : (
                <h5 className="text-sm font-semibold text-[#23856D]">
                  {product.price}₺
                </h5>
              )}
            </div>
            <div className="flex justify-center space-x-2">
              {product.colors?.map((color, index) => (
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
