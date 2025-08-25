import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from "../components/Assets/dropdown_icon.png"
import Item from "../components/Item"

const ShopCategory = (props) => {
  const {all_products}= useContext(ShopContext)
  return (
    <div>
      <img src={props.banner} alt="" />
      <div>
        <p>
          <span>Showing 1-12</span>
        </p>
        <div>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
        <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 '>
          {all_products.map((item)=>{
            if(props.category === item.category){
              return <Item  key= {item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default ShopCategory
