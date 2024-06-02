import React, { useRef, useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import EmptyMsg from './EmptyMsg';
import { cartProductsAction } from '../../store/cart';

export default function Cart() {
    const dispatch=useDispatch();
    const delivery_charges=199;
    const cartItem=useSelector(state=>state.cartProducts);
    const allProducts=useSelector(state=>state.allProducts.all_Products);

    const data=allProducts.filter(item=>cartItem.includes(item.id))
    const qtyElement=useRef("");

    const actualPrice=(mrp,discount)=>{
        let price=mrp-(mrp*(discount/100));
        return Math.floor(price);
    }
    console.log(data)
    const allProductPrice=()=>{
        let allprice=0;
        data.forEach(element => {
            allprice+=actualPrice(element.mrp,element.discount);
        });
        return allprice;
    }
    
    const[qty,setqty]=useState(1)
    const quantityChange=(e)=>{
        setqty(e.target.value)
    }
  return (
    <>
    {data.length!==0?
        <div className="cart-page uni-padding">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        {/* <th>Size</th> */}
                        <th>Quantity</th><th>Subtotal</th>
                    </tr>
                </thead>
                
                <tbody>
                    {data.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>
                                    <div className="cart-info">
                                        <img src={`${item.image_path[0]+item.thumbnail}`}/>
                                        <div>
                                            <p>{item.title}</p>
                                            <small>MRP: ₹{item.mrp}</small><br/>
                                            <button onClick={()=>{dispatch(cartProductsAction.deleteToCart(item.id))}}>Remove</button>
                                        </div>
                                    </div>
                                </td>
                                {/* <td>
                                    <select name="" id="">
                                        {item.sizes.map(size=><option value={size}>{size}</option>)}
                                    </select>
                                </td> */}
                                <td><input type="number" defaultValue={1} onChange={quantityChange}/></td>
                                <td>${actualPrice(item.mrp,item.discount)*qty}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>

            <div className="total-price">
                <table>
                    <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>${allProductPrice()}.00</td>
                    </tr>
                    <tr>
                        <td>Delivery Charges</td>
                        <td>{delivery_charges}.00</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>{allProductPrice()+delivery_charges}.00</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        :<EmptyMsg/>
        }
    </>
  )
}
