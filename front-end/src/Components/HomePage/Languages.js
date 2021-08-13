import React from 'react';
import './languages.css';

function Launguages () {
    return (
        <section className="launguages">
            <div><span>Improve your skills by training with others on real code challenges!</span></div>
            <div className="launguages_wrapper">
                <a href="/"><div className="js"></div></a>
                <a href="/"><div className="css"></div></a>
                <a href="/"><div className="python"></div></a>
                <a href="/"><div className="html"></div></a>
            </div>
        </section>
    )
}

export default Launguages;