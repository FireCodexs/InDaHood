import React from 'react';
import Cart from '../cart/Cart';

function HeroBanner() {
  return (
    <div className="w-full h-4/5 bg-[url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80')] bg-cover bg-center">
      <div className="bg-gradient-to-b from-yellow-300 to-transparent py-3">

    
    <h1 className="subpixel-antialiased font-cursive text-center pt-20 text-9xl text-[#FFA600]">Spring</h1>
    <h1 className="subpixel-antialiased font-semibold text-center pt-2 pb-2 text-8xl mb-3 text-orange-600">SALE</h1>
    <div className='lg:bg-white lg:mx-96 p-0'>
    <p className=" text-center font-semibold text-rose-600 mb-3 text-4xl">
     10% off everything
    </p>
    </div>
   
    </div>
    <Cart/>
  </div>
  )
}

export default HeroBanner;