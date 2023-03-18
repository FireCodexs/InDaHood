import React, { createContext, useState } from "react";



export const CartContext = createContext();

export const CartContextProvider = (props) => {
const [cartItems, setCartItems] = useState([]);

return <CartContext.Provider>{props.children}</CartContext.Provider>

}

// add item to cart attached to button function
// remove remove item to cart a 
// count number
//total price