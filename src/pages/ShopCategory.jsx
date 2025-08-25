import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from "../components/Assets/dropdown_icon.png"
import Item from "../components/Item"

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext)
  return (
    <div className='w-full flex flex-col items-center justify-center gap-6'>
      <img src={props.banner} alt="" className='' />
      <div className='w-full flex flex-col gap-8 items-center justify-between'>

        <div className='flex flex-row items-center justify-between gap-8 w-full px-4'>
          <p>
            <span>Showing 1-12</span>
          </p>
          <p className='flex flex-row items-center justify-center gap-4'>
            Sort by <img src={dropdown_icon} alt="" />

          </p>
        </div>
        <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 '>
          {all_products.map((item) => {
            if (props.category === item.category) {
              return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else {
              return null
            }
          })}
        </div>

      </div>
      <button className='p-2 px-4 bg-gray-100 border-2 border-black  rounded-2xl'>Load more</button>
    </div>
  )
}

export default ShopCategory
