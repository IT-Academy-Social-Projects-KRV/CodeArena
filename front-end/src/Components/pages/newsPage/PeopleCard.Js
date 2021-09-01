import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class PeopleCard extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div>
                <Card
                    style={{ width: '16rem' }}
                >
                    <Card.Img
                        variant="top"
                        src="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                    <Card.Body>
                        <Card.Title>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default PeopleCard;