import React from 'react'

const Item = (props) => {
  return (
    <div className='w-96 hover:scale-105 transition duration-500'>
        <img src={props.image} alt="item image" />
        <p className='mx-6'>{props.name}</p>
        <div className='flex flex-row gap-6'>
            <div className='text-xl font-semibold' >
                {props.new_price}
            </div>
            <div className='text-xl font-semibold'>
                {props.old_price}
            </div>
        </div>
      
    </div>
  )
}

export default Item
