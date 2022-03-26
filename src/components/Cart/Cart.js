import React from 'react';
import './Cart.css'

const Cart = (item) => {
    return (
        <div className='cart_Container'>
            <h1>Name:{item.name}</h1>
        </div>
    );
};

export default Cart;