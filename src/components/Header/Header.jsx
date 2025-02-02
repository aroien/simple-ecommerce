import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <a href='/'> <img src={logo} alt="" /></a>
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;