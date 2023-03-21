import React, { useState } from "react";
import { Transition } from "@headlessui/react";
//import { NavLink } from 'react-router-dom';
import {IoMdContact} from 'react-icons/io';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Navbar = ({setIsShowCart, cart}) => {
  const [isOpen, setIsOpen] = useState(false);

  return( 
    <div className="sticky top-0 z-20">
      <nav className="bg-gray-800">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <a
                    href="www.google.com"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="www.google.com"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-lg text-lg font-medium"
                  >
                    Women
                  </a>

                  <a
                    href="www.google.com"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-lg text-lg font-medium"
                  >
                    Men
                  </a>

                  <a
                    href="www.google.com"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-lg text-lg font-medium"
                  >
                    Wishlist
                  </a>

                  <a
                    href="www.google.com"
                    className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-lg text-lg font-medium"
                  >
                    <IoMdContact className="text-[24]"/>
                    Contact
                  </a>
                  <div className="flex items-center text-right text-gray-300 hover:bg-gray-700 hover:text-white px-5 rounded-lg text-[28px] font-medium"
                  >
                    <div className="relative" onClick={() => setIsShowCart(true)}>
                    <AiOutlineShoppingCart/>
                    {cart.length > 0 && (
                      <span className="bg-red-600 text-white w-5 h-5 rounded-full absolute -top-4 left-4 align-center leading-2">
                        {cart.length}
                      </span>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="www.google.com"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="www.google.com"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Women
                </a>

                <a
                  href="www.google.com"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Men
                </a>

                <a
                  href="www.google.com"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Wishlist
                </a>

                <a
                  href="www.google.com"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Navbar;