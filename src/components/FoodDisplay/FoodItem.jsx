
import './FoodItem.css' 
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';
const FoodItem = ({id , name , description , image , price}) => {

     const{food_list} = useContext(StoreContext)
    const {cartItems , setCartItems ,  addToCart , removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
      
          {
            !cartItems[id]
              ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
              : <div className='food-item-counter'>
                  <img className='counter-image' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
                  <p>{cartItems[id]}</p>
                  <img className='counter-image' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add More" />
                </div>
          }
         
       
      </div>
      <div className="food-item-rating">
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
      </div>
      <p className="food-item-desc">
        {description}
      </p>
      <p className='food-item-price'>${price}</p>
    </div>
  )
}

export default FoodItem
