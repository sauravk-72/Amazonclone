import React from 'react'
import Carousel from 'react-material-ui-carousel';
import './banner.css';

const data = [
    "https://cdn.wccftech.com/wp-content/uploads/2022/05/fwebp-10.webp",
    "https://hungamadeal.co.in/wp-content/uploads/2019/10/amazon-12.jpg",
    
   
    "https://m.media-amazon.com/images/G/31/img18/Fashion/2019/dec/EOSSL1/1._CB427602012_.jpg",
    
    

]

const Banner = () => {
  return (
   <Carousel className="carousel" autoPlay={true} animatiom='slide' indicators={false} navButtonsAlwaysVisible={true} cycleNavigation={true} navButtonsProps={{
    style:{
        backgroundColor:"#fff",
        color:"#494949",
        borderRadius:0,
        marginTop:-22,
    }
   }} >
    {
        data.map((imag,i)=>{
            return(
                <>
                <img src={imag} alt="" className='banner_img'/>
            </>
            )
        })
    }

   </Carousel>
  )
}

export default Banner
