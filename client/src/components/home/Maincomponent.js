import React, { useEffect } from 'react'
import Banner from './Banner';
import "./maincomponent.css";
import Slide from './Slide';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import {getProducts} from "../redux/actions/Action";
import {useDispatch,useSelector} from "react-redux";


const Maincomponent = () => {
    
    const {products} = useSelector(state => state.getproductsdata);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);



    return (
        <div className='home_section'>
            <div className="banner_part">
                <Banner />
            </div>
            <Slide title="Deal Of The Day"  products={products}/>
            <div className='center_img'>
                <img src=" https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/Header/Electronics_PC.gif" alt=""/>
            </div>
            <Slide2 title="Upto 50% off"  products={products}/>
            <div className='center_img'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/SummerGD/xglingress/1500x300.jpg' alt=''/>
            </div>
            <Slide3 title="Best Sellers"  products={products}/>
        </div>
    )
}

export default Maincomponent