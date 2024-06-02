import React from 'react'
import './ProductDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from "react-icons/fa";
import { cartProductsAction } from '../../store/cart';



export default function ProductDetails() {
    const dispatch=useDispatch();
    const {productId}=useParams();
    const allProducts=useSelector(store=>store.allProducts.all_Products);
    const [item]=allProducts.filter(product=>product.id===productId)
    const cartProduct=useSelector(store=>store.cartProducts);
    const navigate=useNavigate();

    const actualPrice=(mrp,discount)=>{
        let price=mrp-(mrp*(discount/100));
        return Math.floor(price);
    }
  return (
    <div className="product-details uni-padding">
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2 img-column">
                        <img src={`${item.image_path[0]}`} id="productImg"/>

                        <div className="small-img-row">
                            {item.image_path.map((thumb,index)=>{
                                return <div key={index} className="small-img-col">
                                    <img src={`${thumb+item.thumbnail}`} className="small-img"/>
                                </div>
                            })}
                        </div>
                    </div>

                    <div className="col-2">
                        <h1>{item.brand}</h1>
                        <p>{item.title}</p>
                        <p className="product-price">₹{actualPrice(item.mrp,item.discount)}  <span>{item.discount}% Off</span></p>
                        <p className="mrp">MRP<span>₹{item.mrp}</span>/- Inclusive of all taxes</p>
                        <div className='specs'>
                            <select>
                                <option>Select Size</option>
                                {item.sizes.map(size=><option key={size} value={size}>{size}</option>)}
                            </select>
                            <div>
                                <label htmlFor="">Qty: </label><input type="number" defaultValue="1"/>
                            </div>
                        </div>
                        <div className="btnwrapper">
                            <button className="btn watchlistbtn">Add To Watchlist</button>
                            {cartProduct.indexOf(item.id)>=0?
                            <button className="bag-btn" onClick={()=>{navigate("/cart")}}>Go To Cart</button>
                            :
                            <button className="item-btn" onClick={()=>{dispatch(cartProductsAction.addToCart(item.id))}}>Add To Cart</button>
                            }
                        </div>

                        <h2>Product Details <i className="fas fa-indent"></i></h2>
                        <p>{item.description}</p>

                        <h2>Cutomer Reviews</h2>
                        <div className='reactions'>
                            <p className='reviews'><FaStar className='star' />{item.stars}/5</p>
                            <p>Based on {item.ratings} ratings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
