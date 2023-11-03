import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer_container'>
        <div className='footer_details_one'>
            <h3>Get to know us</h3>
            <p>About Us </p>
             <p>Careeres</p>
            <p>Press Releases</p>
            <p>Amazon Cares</p>
        </div>
        <div className='footer_details_one'>
            <h3>Connect With Us</h3>
            <p>Facebook</p>
             <p>Twitter</p>
            <p>Instagram</p>
        </div>
        <div className='footer_details_one'>
            <h3>Make money with us</h3>
            <p>Sell on Amazon</p>
             <p>Become Affiliate</p>
            <p>Advertise you products</p>
            <p>Amazon Pay</p>
        </div>
        
      </div>
      <div className='lastdetails'>
            <img src='./amazon_PNG25.png' alt=''/>
            <p>Conditions Of Use  &nbsp; &nbsp; &nbsp; Privacy Notice &nbsp; &nbsp; &nbsp; Intrest Based Ads &nbsp; &nbsp; &nbsp; © 1996-2023, Amazon.com, Inc. or its affiliates</p>

        </div>
    </footer>
  )
}

export default Footer
