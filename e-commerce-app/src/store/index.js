import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import categoryReducer from "./reducers/categoryReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    shoppingCart: shoppingCartReducer,
    categories: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger),
});

export default store;
