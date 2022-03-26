import React from 'react';
import './Product.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
const Product = ({ product, addToCart }) => {
    const { name, price, img, id } = product
    return (
        <div className='single_Product'>
            <img src={img} alt="" />
            <h3>name : {name}</h3>
            <p><b>Price : ${price}</b></p>
            <p>Id : {id}</p>
            <button onClick={() => addToCart(product)} className='cart_Btn'>Add to cart <AiOutlineShoppingCart className='icon'></AiOutlineShoppingCart> </button>
        </div>
    );
};

export default Product;