import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart);
    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
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
            <div className='cart'>
                {
                    cart && cart.map(item =>
                        <h1>name:{item.name}</h1>
                    )
                }
            </div>
        </div >
    );
};

export default Products;