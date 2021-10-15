import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import logo from '../images/logo.png';

const search = <FontAwesomeIcon icon={faSearch} />
const Header = () => {
    return (
        <>
            <div className="header-container">
                <img src={logo} alt=""/>
            </div>
            <div className="nav-container">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
            <div className="search-box">
                <input className="search-text" type="text" placeholder="Search please what you want"/>
            </div>
        </>
    )
}

export default Header
