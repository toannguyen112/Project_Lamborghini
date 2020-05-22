import * as types from "../Action/type";
export const changeView = () => {
  return {
    type: types.CHANGE__VIEW,
  };
};

export const getProducts = () => {
  return {
    type: types.GET_PRODUCT,
  };
};

export const addToCart = (product) => {
  return {
    type: types.ADD_TO_CART,
    payload: product,
  };
};

export const deleteCart = (id) => {
  return {
    type: types.DELETE_CART,
    payload: id,
  };
};
