import React, { useContext } from 'react'
import {ShopContext} from "../context/ShopContext"

const CartItems = () => {
    const {all_product, cartItems, removeFromCart} =useContext(ShopContext)
  return (
    <div>
      
    </div>
  )
}

export default CartItems
