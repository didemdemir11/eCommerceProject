import api from "../../services/api";

export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

export const fetchCategories = () => (dispatch) => {
  api
    .get("/categories")
    .then((response) => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
      dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error.message });
    });
};
