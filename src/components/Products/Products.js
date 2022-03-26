// Import File From other Component
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Products.css'
const GetToLocalStorag = () => JSON.parse(localStorage.getItem('WatchCart')) || '[]';
// Products Component
const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(GetToLocalStorag);

    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    useEffect(() => {
        localStorage.setItem('WatchCart', JSON.stringify(cart))
    }, [cart])
    const clearCartItem = () => {
        const newCart = [];
        setCart(newCart)
    }
    const randomSelect = () => {
        const addedCart = cart.length;
        const randomNumber = Math.round(Math.random() * addedCart)
        const newRandomNumber = cart[randomNumber]
        console.log(newRandomNumber);
        const newCart = cart.filter(product => product.id !== newRandomNumber.id)
        console.log(newCart);
        for (const item of newCart) {
            cart.splice(item, 1)
            let newItem = [...cart]
            console.log(newItem);
            setCart(newItem);
        }

    }
    // Fetch Data From JSON File
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='Container'>
            <div className='all_Products'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }

            </div>
            {/* Cart Aria */}
            <div className='cart'>
                <h4>Add Watch</h4>
                {
                    cart.map(item =>
                        <h4>name:{item.name}</h4>
                    )
                }
                <button onClick={clearCartItem}>Clear</button>
                <button onClick={() => randomSelect()}> Random</button>
            </div>
        </div >
    );
};

export default Products;