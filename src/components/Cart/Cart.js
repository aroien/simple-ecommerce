import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
   
    const total = cart.reduce((total,pdct)=>total + pdct.price,0);
   
    let Shipping = 0;
    if(total>500){ Shipping = 2.99; }
        else if(total>50){Shipping=4.99; }
    return (
        <div>
            <h4>Order Summary: </h4>
            <h3>Items Orded : {cart.length} </h3>
            <h5>Shipping Cost :{Shipping} </h5>
            <h5>Total Price : {total+Shipping} </h5>
        </div>
    );
};

export default Cart;