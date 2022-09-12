export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item,
});

export const Increase = item => ({
  type: INCREASE,
  payload: item,
});

export const Decrease = item => ({
  type: DECREASE,
  payload: item,
});

export const RemoveItem = item => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
