import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const ShopCategory = (props) => {
  const {all_products}= useContext(ShopContext)
  return (
    <div>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCategory
