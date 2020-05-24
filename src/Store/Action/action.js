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

export const keyWord = (key) => {
  return {
    type: types.KEY_WORD,
    payload: key,
  };
};

export const addTowish = (product) => {
  return {
    type: types.ADD_TO_WISH,
    payload: product,
  };
};

export const deleteCart = (id) => {
  return {
    type: types.DELETE_CART,
    payload: id,
  };
};

export const deleteWisht = (id) => {
  return {
    type: types.DELETE_WISH,
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: types.CLEAR_CART,
  };
};

export const sort = (type) => {
  return {
    type: types.SORT,
    payload: type
  };
};

