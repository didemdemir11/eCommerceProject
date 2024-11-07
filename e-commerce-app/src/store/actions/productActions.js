import api from "../../services/api";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const SET_LOADING = "SET_LOADING";

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: SET_LOADING });

  api
    .get("/products")
    .then((response) => {
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: {
          products: response.data.products,
          total: response.data.total,
        },
      });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: error.message,
      });
    });
};

export const FETCH_PRODUCT_BY_ID_SUCCESS = "FETCH_PRODUCT_BY_ID_SUCCESS";
export const FETCH_PRODUCT_BY_ID_FAILURE = "FETCH_PRODUCT_BY_ID_FAILURE";
export const fetchProductById = (id) => (dispatch) => {
  api
    .get(`/products/${id}`)
    .then((response) => {
      dispatch({ type: FETCH_PRODUCT_BY_ID_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.error("Error fetching product by ID:", error);
      dispatch({ type: FETCH_PRODUCT_BY_ID_FAILURE, payload: error.message });
    });
};
