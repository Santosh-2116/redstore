import React, { useRef, useState } from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const[toggle,setToogle]=useState(false);
    const menuToggle=()=>{
        setToogle(!toggle)
    }

  return (
        <div className="navbar uni-padding">
            <div className="logo">
                <NavLink to="/"><img src="/assets/logo.png" alt="Logo" className="logo-img" width="110px"/></NavLink>
            </div>

            <nav>
                <ul id="menuItems" className={` ${toggle ? "navToggleShow" : "navToggleHide"}`}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/account">Account</NavLink></li>
                </ul>
            </nav>
            <NavLink to="/cart"><img src="/assets/cart.png" alt="cart" className="cart-img" width="25px" /></NavLink>
            <img src='/assets/menu.png' className='menu-icon' alt="menu-icon" onClick={menuToggle}/>
        </div>
  )
}
