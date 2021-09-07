import React from 'react';
import { Component } from 'react';
import { Card, } from 'react-bootstrap';

class LeftBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { card } = this.props
        return (
            <Card bg="light" style={{ width: '23rem' }} >
                <Card.Body style={{ height: 'auto' }}>
                    <Card.Text className="text-start " > <h4>Language: {card.name_language}</h4>
                        <h5>Recomend level: {card.level} </h5>
                        <div>Time for competition: {card.time} </div>
                        <h5>Start in:{card.start_time} </h5>
                        <h6>Author: {card.author}</h6>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default LeftBlock
