import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='w-80 hover:scale-105 transition duration-500 border-2 rounded-lg overflow-hidden flex flex-col items-center justify-center'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="item image" /></Link>
        <p className='mx-6'>{props.name}</p>
        <div className='flex flex-row gap-6'>
            <div className='text-3xl font-semibold' >
                ${props.new_price}
            </div>
            <div className='text-xl font-semibold text-red-600'>
                ${props.old_price}
            </div>
        </div>
      
    </div>
  )
}

export default Item
