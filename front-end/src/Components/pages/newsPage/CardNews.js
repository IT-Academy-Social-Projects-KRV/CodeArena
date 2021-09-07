import React, { Component } from 'react';
import { Card } from "react-bootstrap";


class NewsCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        var colorArray = ["success", "primary", "light"]
        const randomColour = colorArray[(Math.random() * colorArray.length) | 0]
        const { card } = this.props
        return (
            <a href="/news_id">
                <Card
                    className="my-3"
                    bg={randomColour}
                    style={{ width: '16rem' }}
                    text={randomColour === 'light' ? 'dark' : 'white'}
                >
                    <Card.Img
                        variant="top"
                        src={card.src}
                    />
                    <Card.Body>
                        <Card.Title className="underline-on-hover">{card.title}</Card.Title>
                    </Card.Body>
                </Card>
            </a>
        )
    }
}

export default NewsCard;
