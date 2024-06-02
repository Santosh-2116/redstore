import React from 'react'
import './latestproducts.css'
import Item from '../Item/Item'
import { useSelector } from 'react-redux'

export default function LatestProducts() {
    const new_collections=useSelector(store=>store.allProducts.new_collections)
  return (
    <div className="latest-product uni-padding">
            <h2 className="title">Latest Products</h2>
            <div className="small-container">
                <div className="row">
                    {
                        new_collections.map(item=><Item key={item.id} item={item}/>)
                    }
                </div>
            </div>
        </div>
  )
}
