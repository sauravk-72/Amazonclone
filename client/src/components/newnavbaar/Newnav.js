import React from 'react'
import "./newnav.css";

const Newnav =()=>{
    return(
        <div className='new_nav'>
            <div className='nav_data'>
                <div className='left_data'>
                    <p>All</p>
                    <p>Mobiles</p>
                    <p>Best Sellers</p>
                    <p>Fashion</p>
                    <p>Electronics</p>
                    <p>Amazon Prime</p>
                    <p>Today Deals</p>
                    <p>Amazon Pay</p>
                </div>
                <div className='rigt_data'>
                    <img src="./nav.jpg" alt="nav" />
                </div>
            </div>
        </div>
    )
}
export default Newnav