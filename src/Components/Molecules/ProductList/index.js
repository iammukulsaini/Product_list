import React from 'react'
import { calculateMRP } from '../../../Utils/Functions'
import { Currency_Symbol } from '../../../Utils/Constants'
import { CartIcon, Staricon } from '../../Atoms/Svgicons/icons'

const ProductList = ({ Product }) => {
    return (
        <div className='productlistCard display-flex space-between' >
            <div className='productImagediv'>
                <img className='productImage' src={Product?.images[0] || Product?.thumbnail} alt={Product?.title || "Product"} />
            </div>
            <div>
                <div className='display-flex space-between productheading'>
                    <h2>{Product?.title}</h2>
                    <div className='productRatings display-flex space-around'>
                        {Product?.rating} <Staricon />
                    </div>
                </div>
                <p className='productDescription'>{Product?.description}</p>

                <div style={{ margin: '0px' }} className='display-flex space-between'>
                    <div>
                        <h4 className='productPrice'>{Currency_Symbol}{Product?.price}</h4>
                        <h6 className='productMrp'>
                            <span style={{ textDecoration: 'line-through' }}>
                                {Currency_Symbol} {calculateMRP(Product?.price, Product?.discountPercentage)}
                            </span>
                            <span className='productDiscount'>
                                {Product?.discountPercentage} % off
                            </span>
                        </h6>
                    </div>
                    <button className='display-flex center buynowbtn'>
                        <CartIcon />
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductList