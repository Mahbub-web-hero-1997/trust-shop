
import React from 'react';

import './Header.css'
const Header = () => {
    return (

        <nav className='nav_Item'>

            <div className='nav_Logo'>
                <h1><a href="/Trust-Shop">TRUST-SHOP</a></h1>
            </div>

            <div className='nav_Menu'>

                <a href="/Home"> Home</a>
                <a href="/Product"> Product</a>
                <a href="/Review">Review</a>
                <a href="/About">About</a>
            </div>
        </nav>
    );
};

export default Header;