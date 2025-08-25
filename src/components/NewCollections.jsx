import React from 'react'
import new_collection from "../components/Assets/new_collections"
import Item from './Item'

const NewCollections = () => {
  return (
    <div className='flex flex-col items-center gap-3 min-h-screen w-full justify-center'>
      
      <h1 className='text-2xl font-semibold'>NEW COLLECTIONS</h1>
      <div className='mt-12 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] r w-full gap-6  '>
        {
            new_collection.map((item)=>{
                return <Item  key= {item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
      </div>
    </div>
  )
}

export default NewCollections
