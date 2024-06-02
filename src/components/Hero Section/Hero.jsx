import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <div className="hero uni-padding">
        <div className="row">
            <div className="col-2">
                <h1>Give Your Workout<br/>A New Style!</h1>
                <p>Success isn't always about greatness. It's about consistency. Consistent<br/>hard work gains success. Greatness will come.</p>
                <a className="btn">Explore Now &#8594;</a>
            </div>
            <div className="col-2">
                <img src="/assets/image1.png" alt="bannerimg" />
            </div>
        </div>
    </div>
  )
}
