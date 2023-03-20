import React from 'react';
import Cart from '../cart/Cart';

function HeroBanner() {
  return (
    <div className="w-full h-3/5 bg-[url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80')] bg-cover bg-center flex justify-center items-center">
    <h1 className="text-2xl md:text-4xl mb-3">Kimia-UI Tutorial</h1>
    <p className="mb-3">
      Kimia-ui is a collection of React components built with tailwindcss and
      fully customizable that allows you to be more productive
    </p>
    <p>This is some text.</p>
    <Cart/>
    <p>This is another text.</p>
    <button className="text-sm px-6 py-1 mt-4 text-white active:bg-yellow-500 focus:outline-none border-solid border">
      Learn more
    </button>
  </div>
  )
}

export default HeroBanner;