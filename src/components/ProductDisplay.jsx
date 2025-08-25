import React from 'react'
import star_icon from "../components/Assets/star_icon.png"
import star_dull_icon from "../components/Assets/star_dull_icon.png"
const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div>
        <div className='w-full'>
            <div>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div>
                <img src={product.image} alt="" />
            </div>
        </div>


        <div className='w-full'>
            <h1>{product.name}</h1>
            <div className='flex flex-row gap-2'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className='flex flex-row items-center juc gap-4'>
                <div className='text-3xl font-semibold' >
                ${product.new_price}
            </div>
            <div className='text-xl font-semibold text-red-600'>
                ${product.old_price}
            </div>
            </div>

        </div>
      
    </div>
  )
}

export default ProductDisplay
