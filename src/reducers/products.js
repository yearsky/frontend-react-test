import {
  GET_PRODUCTS_LIST,
  GET_PRODUCTS_DETAIL,
  POST_PRODUCTS_CREATE,
  PUT_PRODUCTS_EDIT,
  DELETE_PRODUCTS,
} from "../actions/productAction";

const initialState = {
  //   getProductsList: false,
  //   errorProductsList: false,
  //   getProductsDetail: false,
  //   errorProductsDetail: false,
  //   getResponDataProducts: false,
  errorResponDataProducts: false,
  product: [],
  title: "React Node JS Products Crud",
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return {
        ...state,
        product: action.payload.data,
        errorResponDataProducts: action.payload.errorMessage,
      };

    case GET_PRODUCTS_DETAIL:
      return {
        ...state,
        product: action.payload.data,
        errorResponDataProducts: action.payload.errorMessage,
      };

    case POST_PRODUCTS_CREATE:
      return {
        ...state,
        product: [...state.product, action.payload.data],
        errorResponDataProducts: action.payload.errorMessage,
      };

    case PUT_PRODUCTS_EDIT:
      return {
        ...state,
        product: action.payload.data,
        errorResponDataProducts: action.payload.errorMessage,
      };

    case DELETE_PRODUCTS:
      return {
        ...state,
        product: state.product.filter(
          (el) => el.id !== parseInt(action.payload.id)
        ),
        errorResponDataProducts: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default products;
