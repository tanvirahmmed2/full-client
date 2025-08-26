import React from 'react'
import data_product from '../components/Assets/data'
import Item from "../components/Item"

const RelatedProducts = () => {
  return (
    <div className='flex flex-col min-h-screen w-full items-center'>
      <h1 className='text-3xl font-semibold text-black'>RELATED PRODUCTS</h1>
      <div className=' w-full grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-items-center'>
        {
            data_product.map((item)=>{
                return  <Item  key= {item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
      </div>
    </div>
  )
}

export default RelatedProducts
