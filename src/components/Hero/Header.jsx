import {React} from 'react';
import {Link} from 'react-scroll';

function Header() {

  return (
    <div className="w-full h-[32rem] bg-[url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80')] bg-cover bg-center">
    <div className="bg-gradient-to-b from-yellow-300 to-transparent">

    <h1 className=" subpixel-antialiased font-semi text-center pt-6 text-9xl font-semi text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-blue-300">InDaHood</h1>

      <h1 className=" subpixel-antialiased font-cursive text-center pt-2 text-9xl text-[#FFA600]">Spring</h1>
      <h1 className="subpixel-antialiased font-bold text-center  pb-2 text-8xl mb-3 text-orange-600">SALE</h1>
      <div className="justify-center flex ">
      <Link to="cards" spy={true} smooth={true} offset={-10} duration={500} className="relative px-6 py-3 font-bold text-white rounded-lg group cursor-pointer">
        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-orange-500 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-yellow-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
        <span className="relative">Shop Now!</span>
        </Link>
      </div>
      

    </div>
  </div>
  )
}

export default Header;