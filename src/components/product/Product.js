import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';
const Product = (props) => {
    // console.log(props)
    const {product, handleAdToCart} =props;

    const {img,name,seller,price,ratings} = product;
   
    return (
        <div className='product'>
         <img src={img} alt="" />
         <p className='product-name' >{name}</p>
         <h4>Price: ${price}</h4>
         <p>{seller} <br/>
          Ratings: {ratings} stars</p>
         <button onClick={ ()=> handleAdToCart(product)} className='btn-cart'>
            <h3>add to cart</h3>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
         </button>
        </div>
    );
};

export default Product;
