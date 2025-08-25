import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {useParams} from  'react-router-dom'
import Breadcrum from '../components/Breadcrum'
import ProductDisplay from '../components/ProductDisplay'

const Product = () => {
  
  const { all_products } = useContext(ShopContext)
  const {productId} =useParams()
  const Products= all_products.find((e)=> e.id=== Number(productId))
  return (
    <div>
      <Breadcrum product={Products}/>
      <ProductDisplay product={Products}/>
    </div>
  )
}

export default Product
