import React from 'react'
import './Item.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartProductsAction } from '../../store/cart';
import { buttonAction } from '../../store/button';

export default function Item({item}) {
  const cartProduct=useSelector(store=>store.cartProducts);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  return (
    <div className="col-4">
      <NavLink to={`/products/${item.id}`} style={{textDecoration:"none",color:"#000"}}><div className='imgwrap'><img src={`${item.image_path[0]}`} alt=""/></div></NavLink>
      <h3 className='item-brand'>{item.brand}</h3>
      <div className='item-title'>{item.title}</div>
      <p>Rs. {item.mrp}/-</p>
      {cartProduct.indexOf(item.id)>=0?
      <button className="bag-btn" onClick={()=>{navigate("/cart")}}>Go To Cart</button>
      :
      <button className="item-btn" onClick={()=>{dispatch(cartProductsAction.addToCart(item.id))}}>Add To Cart</button>
      }
    </div>
  )
}
