import React from 'react'

import arrow_icon from "../components/Assets/breadcrum_arrow.png"
const Breadcrum = (props) => {
  const {product} =props
  return (
    <div className='flex w-full gap-4 mt-20 text-xs items-center flex-row justify-start'>
      Home <img src={arrow_icon} alt="" className='scale-50 font-bold' /> Shop <img src={arrow_icon} alt="" className='scale-50 font-bold' /> {product.category} <img src={arrow_icon} alt="" className='scale-50 font-bold' /> {product.name} <img src={arrow_icon} alt="" className='scale-50 font-bold' />
    </div>
  )
}

export default Breadcrum
