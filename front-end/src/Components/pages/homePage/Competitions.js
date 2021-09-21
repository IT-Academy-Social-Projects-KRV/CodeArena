import React from 'react';
import './blueBlocks.css';

function Competition () {
    return (
        <section className="competitions blue_block">
            <h2><a href="/"> Competition</a></h2>
            <div>
                <ol>
                    <li><a href="/competitions">Competition from first company</a></li>
                    <li><a href="/competitions">Competition from first company</a></li>
                    <li><a href="/competitions">Competition from another company</a></li>      
                </ol>
            </div>
        </section>
    )
}

export default Competition;