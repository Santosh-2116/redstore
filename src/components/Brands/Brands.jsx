import React from 'react'
import './brand.css'

export default function Brands() {
  return (
    <div className="brands">
        <div className="small-container">
            <div className="row">
                <div className="col-5">
                    <img src="/assets/logo-godrej.png"/>
                </div>
                <div className="col-5">
                    <img src="/assets/logo-oppo.png"/>
                </div>
                <div className="col-5">
                    <img src="/assets/logo-coca-cola.png"/>
                </div>
                <div className="col-5">
                    <img src="/assets/logo-paypal.png"/>
                </div>
                <div className="col-5">
                    <img src="/assets/logo-philips.png"/>
                </div>
            </div>
        </div>
    </div>
  )
}
