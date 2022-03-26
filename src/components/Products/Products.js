// Import File From other Component
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Products.css'

// Products Component
const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [clear, setClear] = useState();
    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }

    const clearCartItem = () => {
        const clearCart = [];
        const newClearCart = [clear, clearCart]
        setClear(newClearCart)
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
                    cart && cart.map(item =>
                        <h4>name:{item.name}</h4>
                    )
                }
                <button onClick={() => { clearCartItem(clear) }}>Clear</button>
            </div>
        </div >
    );
};

export default Products;