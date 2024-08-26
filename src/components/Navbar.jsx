import React, { useContext, useState } from 'react'
import Lottie from 'lottie-react';
import animation from '../assets/animation/Animation - 1720793883856.json'
import  './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import {assets } from '../assets/frontend_assets/assets'
import { StoreContext } from '../context/StoreContext';
const Navbar = ({setShowLogin}) => {
const [menu , setMenu] = useState("menu");
const [cart , setCart] = useState('/cart');
const {getTotalAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
        
         <Lottie animationData={animation} className='logo1'>
         </Lottie>
         
      <img src={assets.logo} alt="" className='logo'/>
     
      <ul className='navbar-menu'>
    <Link to={'/'} onClick={()=>{setMenu("home")}} className={menu == "home" ? "active":""}>Home</Link>
    <a href='#explore-menu' onClick={()=>{setMenu("menu")}}className={menu == "menu" ? "active" : ""}>Menu</a>
    <a href='#' onClick={()=>{setMenu("mobile-app")}}className={menu == "mobile-app"?"active" :""}>mobile-app</a>
    <a href='#footer' onClick={()=>{setMenu("contact us")}}className={menu == "contact us"?"active" : ""}>contact us</a>
  
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
      <div className="navbar-search-icon">
        <span className='cart-button' onClick={()=>{
            cart === '/cart' ? setCart('/') : setCart("/cart");
        }}>
        < Link  to = {cart}>
        <img  src={assets.basket_icon} alt="" />
        </Link>
        </span>
      
        <div className={getTotalAmount()===0? "":"dot"}>
        
        </div>
        </div>

        <div className="">
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
      </div>
     


    </div>
  )
}

export default Navbar
