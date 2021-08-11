import React from 'react';
import Navigation from './Navigation';
import './header.css';

function Header () {
    return (
        <header className="header">
            <div>Code Arena</div>
            <Navigation />
        </header>
    )
}

export default Header;