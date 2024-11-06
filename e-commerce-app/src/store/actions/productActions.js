import api from "../../services/api";

export const fetchCategories = () => (dispatch) => {
  api
    .get("/categories")
    .then((response) => {
      dispatch({ type: "SET_CATEGORIES", payload: response.data });
    })
    .catch((error) => {
      console.error("Fetch categories error:", error);
    });
};
export const fetchProducts = () => (dispatch) => {
  api
    .get("/products")
    .then((response) => {
      dispatch({ type: "SET_PRODUCT_LIST", payload: response.data });
      dispatch({ type: "SET_TOTAL", payload: response.data });
    })
    .catch((error) => {
      console.error("Fetch products error:", error);
    });
};
