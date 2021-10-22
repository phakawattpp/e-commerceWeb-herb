export const initialState = [];

export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    // console.log('reducer', action);

    return [...state, action.payload];
  }
  if (action.type === 'CLEAR_CART') {
    return [];
  }
  if (action.type === 'UPDATE_CART') {
    return action.payload;
  }
  // if (action.type === 'CLOSE_MODAL') {
  //   return { ...state, isModalOpen: false };
  // }
  if (action.type === 'REMOVE_ITEM') {
    const newCart = state.filter(
      (element) => element.productID !== action.payload.productID
    );
    return newCart;
  }
};
