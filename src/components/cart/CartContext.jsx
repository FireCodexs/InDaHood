import { createContext, useState } from "react";
// import products array

export const CartContext = createContext ({
items: [],
getProductQuantity: () => {},
addOneToCart: () => {},
removeOneFromCart: () => {},
deleteFromCart: () => {},
getTotalCost: () => {}

});

export function CartProvider({children}) {

  const [cartProducts, setCartProducts] = useState([]);

  // storing id and quantity only 

  function getProductQuantity(id) {
    const quantity = cartProducts.find()(product => product.id === id)?.quantity
    if (quantity === undefined){
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id){
    const quantity = getProductQuantity(id);
    if (quantity === 0){
      setCartProducts(
        [...cartProducts, {id: id, quantity: 1}]
      )
    } else {
      setCartProducts(
        cartProducts.map(
          product => product.id === id ? { ...product, quantity: product.quantity}
          : product

        )
      )
    }

  }

  function removeOneFromCart

  function deleteFromCart(id){
    setCartProducts => cartProducts.filter(currentProduct => {
      return currentProduct.id != id;
    })
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  }
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

 

//Context (cart, addToCart, removeCart)
