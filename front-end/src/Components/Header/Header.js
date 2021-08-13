import React from 'react';
import Navigation from './Navigation';
import './header.css';

function Header () {
    return (
        <header className="header">
            <section className="top_menu">
                <div>
                    <button>Sign Up</button>
                    <button>Log In</button>
                </div>
            </section>
            <div className="mainheader">
                <div>Code Arena</div>
                <Navigation />
            </div>
        </header>
    )
}

export default Header;