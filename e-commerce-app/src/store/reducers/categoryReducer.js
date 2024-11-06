import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from "../actions/categoryActions";

const initialState = {
  categories: [],
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;
