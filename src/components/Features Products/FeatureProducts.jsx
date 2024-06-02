import React from 'react'
import './featureproduct.css'
import { useSelector } from 'react-redux'
import Item from '../Item/Item'

export default function FeatureProducts() {
    const popularProducts=useSelector(store=>store.allProducts.popular_product)
  return (
    <div className="latest-product uni-padding">
            <h2 className="title">Featured Products</h2>
            <div className="small-container">
                <div className="row">
                    {
                        popularProducts.map(item=><Item key={item.id} item={item}/>)
                    }
                </div>
            </div>
        </div>
  )
}
