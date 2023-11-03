import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import { Divider } from '@mui/material';
import { products3 } from './Productsdata3'
import "./slide.css";
import Example from '../Slider/Example';
import { NavLink } from 'react-router-dom';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const items = products3.map((e) => (
    <NavLink to={`/getproductsone/${e.id}`}>
        <Example image={e.url} shortTitle={e.title.shortTitle} discount={e.discount} tagline={e.tagline} price={e.cost}/>
    </NavLink>
))


const Slide3 = ({ title }) => {
    return (
        <div className='products_section'>
            <div className='products_deal'>
                <h3>{title}</h3>
                <button className='view_btn'>View all</button>
            </div>
            <Divider />
            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                showdots={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >

                {items}
            </Carousel>
        </div>
    )
}

export default Slide3