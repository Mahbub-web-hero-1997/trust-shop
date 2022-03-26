import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Products.css'
import Cart from '../Cart/Cart';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        setProduct(product);
    }
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
                {
                    product.map(item => console.log(item))
                }
            </div>
            <div className='cart'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Products;