import React from 'react'

function Example(props) {
    return (
        <>
            <div className="products_items">
                <div className='products_img'>
                    <img src={props.image} alt="prouctsitem" />
                </div>
                <p className='products_name'>{props.shortTitle}</p>
                <p className='products_offer'>{props.discount}</p>
                <p className='products_explore'>{props.tagline}</p>
                <p className='products_price'>{props.cost}</p>
            </div>
        </>
    )
}

export default Example
