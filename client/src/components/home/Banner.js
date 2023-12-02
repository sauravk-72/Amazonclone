import React from 'react'
import Carousel from 'react-material-ui-carousel';
import './banner.css';

const data = [
    "https://cdn.wccftech.com/wp-content/uploads/2022/05/fwebp-10.webp",
    "https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=1380&t=st=1701092371~exp=1701092971~hmac=abc793a51cfbcf8fa05238fea03b623ee591b61352641acbc4c43d1731c059d5",
    
   
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
