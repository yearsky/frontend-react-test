import axios from "axios";
// import browserHistory from "./history";

export const GET_PRODUCTS_LIST = "GET_PRODUCTS_LIST";
export const GET_PRODUCTS_DETAIL = "GET_PRODUCTS_DETAIL";
export const POST_PRODUCTS_CREATE = "POST_PRODUCTS_CREATE";
export const PUT_PRODUCTS_EDIT = "PUT_PRODUCTS_EDIT";
export const DELETE_PRODUCTS = "DELETE_PRODUCTS";

export const getProductsList = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:9000/products")
      .then(function (response) {
        dispatch({
          type: GET_PRODUCTS_LIST,
          payload: {
            data: response.data.rows,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PRODUCTS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getProductsDetail = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:9000/products/${+id}`)
      .then(function (response) {
        dispatch({
          type: GET_PRODUCTS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PRODUCTS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postProductsCreate = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:9000/products/`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        dispatch({
          type: POST_PRODUCTS_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_PRODUCTS_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putProductsUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:9000/products/${+id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        dispatch({
          type: PUT_PRODUCTS_EDIT,
          payload: {
            data: response.data,
            errorMessage: true,
          },
        });
      })
      .then(() => {
        window.location.href = "/";
      })
      .catch(function (error) {
        dispatch({
          type: PUT_PRODUCTS_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteProducts = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:9000/products/${+id}`)
      .then(function (response) {
        dispatch(getProductsList());

        console.log(response);
        dispatch({
          type: DELETE_PRODUCTS,
          payload: {
            data: id,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: DELETE_PRODUCTS,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// export const deleteDataProducts = (id) => {
//   return (dispatch) => {
//     dispatch({
//       type: DELETE_PRODUCTS,
//       payload: {
//         data: id,
//         errorMessage: false,
//       },
//     });

//     dispatch({
//       type: POST_PRODUCTS_CREATE,
//       payload: {
//         data: false,
//         errorMessage: false,
//       },
//     });
//   };
// };
