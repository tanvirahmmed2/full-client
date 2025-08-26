import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {useParams} from  'react-router-dom'
import Breadcrum from '../components/Breadcrum'
import ProductDisplay from '../components/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
  
  const { all_product } = useContext(ShopContext)
  const {productId} =useParams()
  const Products= all_product.find((e)=> e.id=== Number(productId))
  return (
    <div>
      <Breadcrum product={Products}/>
      <ProductDisplay product={Products}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
