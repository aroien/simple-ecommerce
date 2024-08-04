import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => { 

    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>  
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4> <br />
                <p>Price: ${price}</p> <br />
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
                <button  
                 onClick={() => handleAddToCart(props.product)} 
                  className='btn-cart'  >
                   <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </button>
            </div>
           
        </div>
    );
};

export default Product;