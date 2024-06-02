import React from 'react'
import './Product.css'
import Banner from '../../components/Hero Section/Hero'
import { useSelector } from 'react-redux'
import Item from '../../components/Item/Item'
import Category from '../../components/Category/Category'

export default function Products({category}) {
  let allProducts=useSelector(store=>store.allProducts.all_Products)
  let products=[];
  if(category=="men"){
    products=allProducts.filter(item=>item.category=="men")
  }else if(category=="women"){
    products=allProducts.filter(item=>item.category=="women")
  }else if(category=="kids"){
    products=allProducts.filter(item=>item.category=="kids")
  }else{
    products=allProducts;
  }

  return (
    <>
    <Banner/>
    <Category/>
    <div className="product uni-padding">
      <h2 className="title">{category} Products</h2>
      <div className="small-container">
        <div className="row">
          {
            products.map(item=><Item key={item.id} item={item}/>)
          }
        </div>
      </div>
    </div>
    </>
  )
}
