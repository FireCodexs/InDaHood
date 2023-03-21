import React from "react";
import { AiOutlinePlusSquare , AiOutlineMinusSquare } from "react-icons/ai";

const Cart = ({setIsShowCart, cart, handleAddToCart}) => {
  const total = (arr) => {
    return arr.reduce((cal,item)=> {
      return cal + item.price * item.amount;
    }, 0);
  };


  return (
    <div 
    className="z-30 fixed inset-0 bg-[rbga(0,0,0,0.7)]"
    onClick={() => setIsShowCart(false)}
    >
      <div
      className="bg-white w-[350px] h-full absolute right-0 overflow-y-scroll" 
      onClick={(e)=>e.stopPropagation()}
      >
        <h1 className="bg-red-400 py-4 text-center text-white">Cart</h1>
        <div className="flex flex-col items-center px-2 py-4">
          {cart.map(item=> (
            <div key={item.id} className="text-center border-b-[3px] w-full mb-2 flex flex-col items-center">
              <img
              className="w-34 h-36"
              src={item.image}
              alt={item.name}
              />
              <p className="text-red-700 font-bold">Qty: {item.amount}</p>
              <h3 className="text-[0.8rem]">{item.name}</h3>
              <div className="flex items-center my-2">
                <button>
                  <AiOutlineMinusSquare className="text-[25px] text-gray-500"/>
                </button>
                <p className="text-red-600 mx-2">£{item.price}</p>
                <button onClick={() => handleAddToCart(item)}>
                  <AiOutlinePlusSquare className="text-[25px] text-gray-500"/>
                </button>
              </div>
            </div>
          ))}
          <p className="text-gray-600">Total: £{total(cart)}</p>
        </div>
      </div>
    </div>
  )
}

export default Cart;