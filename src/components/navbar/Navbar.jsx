import React from 'react';
//import { NavLink } from 'react-router-dom';
import {IoMdContact} from 'react-icons/io';


function Navbar() {
  return( 
  <nav className="nav">
    <a href="/" className="site-title">InDaHood</a>
    <ul>
        <li>
            <a href="/women">Women</a>
        </li>
        <li>
            <a href="/men">Men</a>
        </li>
        <li>
            <a href="/contact"><IoMdContact/></a>
        </li>
        <button type="button" className="btn btn-outline-light">Sign In</button>
        <button className="btn btn-primary" href="#">Sign Up</button>
    </ul>
  </nav> 
  )
  
  
}

export default Navbar;