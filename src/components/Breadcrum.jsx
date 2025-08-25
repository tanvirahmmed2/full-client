import React from 'react'
import arrow_icon from "../components/Assets/breadcrum_arrow.png"
const Breadcrum = (props) => {
  const {product} =props
  return (
    <div className='flex w-full gap-4 mt-20'>
      Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name} <img src={arrow_icon} alt="" />
    </div>
  )
}

export default Breadcrum
