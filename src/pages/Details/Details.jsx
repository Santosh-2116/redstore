import React from 'react'
import ProductDetails from '../../components/Product  Details/ProductDetails'
import { useParams } from 'react-router-dom'

export default function () {
  const productId=useParams()
  console.log(productId)
  return (
    <div>
        <ProductDetails/>
    </div>
  )
}
