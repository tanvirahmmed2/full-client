import React from 'react'
import data_product from "./Assets/data"
import Item from './Item'
const Popular = () => {
  return (
    <div>
      <h1>POPULAR IN WOMEN</h1>
      <div>
        {
            data_product.map((item)=>{
                return <Item  key= {i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
      </div>
    </div>
  )
}

export default Popular
