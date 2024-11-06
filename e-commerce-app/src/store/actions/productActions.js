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
