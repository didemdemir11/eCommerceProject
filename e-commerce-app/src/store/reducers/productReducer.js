import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SET_LOADING,
} from "../actions/productActions";

const initialState = {
  products: [],
  total: 0,
  isLoading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        total: action.payload.total,
        isLoading: false,
      };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default productReducer;
