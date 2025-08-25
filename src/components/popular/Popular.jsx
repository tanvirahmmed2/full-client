import React from 'react'
import data_product from "../Assets/data"
import Item from './Item'
const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-3 h-screen w-full justify-center'>
      
      <h1 className='text-2xl font-semibold'>POPULAR IN WOMEN</h1>
      <div className='mt-12 flex items-center justify-center w-full flex-row '>
        {
            data_product.map((item)=>{
                return <Item  key= {item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
      </div>
    </div>
  )
}

export default Popular
