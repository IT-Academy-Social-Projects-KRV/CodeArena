import React from 'react';
import Achievements from '../HomePage/Achievements';
import Competition from '../HomePage/Competitions';
import News from '../HomePage/News';
import Raiting from '../HomePage/Raiting';
import Launguages from '../HomePage/Languages';
import './mainContainer.css';

function MainContainer () {
    return (
        <main className="home_main">
            <div className="left_sections">
            <Raiting/>
            <News/>
            </div>
            <Launguages/>
            <div className="right_sections">
            <Achievements/>
            <Competition/>
            </div>
        </main>
    )
}

export default MainContainer;