import React from 'react';
import Achievements from './Achievements';
import Competition from './Competitions';
import News from './News';
import Raiting from './Raiting';
import Launguages from './Languages';
import './mainContainer.css';


function MainContainer() {
    return (
        <div className="grey">
            <div className="grey"><li></li></div>
            <main className="home_main">
                <div className="left_sections">
                    <Raiting />
                    <News />
                </div>
                <Launguages />
                <div className="right_sections">
                    <Achievements />
                    <Competition />
                </div>
            </main>
        </div>
    )
}

export default MainContainer;
