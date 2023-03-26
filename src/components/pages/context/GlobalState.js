import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  wishlist: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addItemToWishlist = (product) => {
    dispatch({ type: "ADD_ITEM_TO_WISHLIST", payload: product });
  };
  return (
    <GlobalContext.Provider
      value={{ wishlist: state.wishlist, addItemToWishlist }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
