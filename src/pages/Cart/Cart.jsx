import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const {cartItems, food_list , removeFromCart ,  getTotalAmount} = useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item , index ) =>{
            if(cartItems[index] > 0 ){
              return (
                <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                   <p>{cartItems[index]}</p>
                   <p>${item.price*cartItems[index]}</p>
                   <p  onClick={()=>{removeFromCart(index)}} className='cross' >x</p>
                </div>
                <hr />
                </div>
              )
            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>

            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
              
            </div>
            <hr />
            <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>${getTotalAmount()===0 ? 0 : 2}</p>
                 
            </div>
            <hr id='hr'/>
            <div className="cart-total-details">
                    
                    <b>Total</b>
                    <b>${getTotalAmount()===0 ? getTotalAmount() : getTotalAmount()+2}</b>
                    
            </div>
                <button onClick={()=>{navigate('/order')}} >PROCEED TO CHECK OUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
