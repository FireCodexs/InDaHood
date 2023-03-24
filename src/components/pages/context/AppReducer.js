const AppReducer = ({ state, action }) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_WISHLIST":
      return {
        ...state,
        wishlist: [action.playload, ...state.wishlist],
      };
    default:
      return state;
  }
};

export default AppReducer;
