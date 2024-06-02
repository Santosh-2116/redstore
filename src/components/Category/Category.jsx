import React from 'react';
import './category.css'
import { NavLink } from 'react-router-dom';

export default function Category() {
  return (
    <div className="feature-category uni-padding">
      <h2 className='title'>Browse By Category</h2>
            <div className="small-container uni-padding">
                <div className="row">
                    <NavLink to={"/products/men"} className={`col-3 men`}><img src="/assets/men.jpg" alt=""/></NavLink>
                    <NavLink to={"/products/kids"} className={`col-3 kids`}><img src="/assets/kids.png" alt=""/></NavLink>
                    <NavLink to={"/products/women"} className={`col-3 women`}><img src="/assets/women.png" alt=""/></NavLink>
                </div>
            </div>
        </div>
  )
}
