import React from 'react';
import './greenBlocks.css';

function News () {
    return (
        <section className="news green_block">
            <h2>News</h2>
            <div>
                <ol>
                    <li><a href="/news">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</a></li>
                    <li><a href="/news">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</a></li>
                    <li><a href="/news">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</a></li>
                    <li><a href="/news">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</a></li>
                    <li><a href="/news">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</a></li>
                    <li><a href="/news">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</a></li>           
                </ol>
            </div>
        </section>
    )
}

export default News;