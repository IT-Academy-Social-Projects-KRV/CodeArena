import React from "react";
import './navigation.css';

function Navigation () {
    return (
        <nav className="main_navigation type">
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/contacts">Contacts</a></li>
                <li><a href="/jobs">Jobs</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;
