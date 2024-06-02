import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className="footer uni-padding">
            <div className="row">
                <div className="foot-col-1">
                    <h4>Download Our App</h4>
                    <p>Download App for Android and ios mobile phone.</p>
                    <div className="app-logo">
                        <img src="/assets/play-store.png"/>
                        <img src="/assets/app-store.png"/>
                    </div>
                </div>

                <div className="foot-col-2">
                    <img src="/assets/logo-white.png"/>
                    <p>Our purpose Is To Sustainably Make The Pleasure And Benefits Of Sports Accessibile To The Many.</p>
                </div>

                <div className="foot-col-3">
                    <h4>Useful Links</h4>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>

                <div className="foot-col-3">
                    <h4>Follow Us</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>

            <hr/>
            <p className="copyright">Copyright 2020 - Easy Tutorials</p>
        </div>
  )
}
