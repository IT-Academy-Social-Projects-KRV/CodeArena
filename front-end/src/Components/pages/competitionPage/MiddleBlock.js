import React from 'react';
import { Card } from 'react-bootstrap';
import { Component } from 'react';

class MiddleBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { card } = this.props
        return (
            <Card bg="light" style={{ width: '43.8rem' }} >
                <Card.Body style={{ height: '17rem' }}>
                    <Card.Title className="text-center type">
                        Description of this competition
                    </Card.Title>
                    <Card.Text > <p> {card.description}  </p> </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default MiddleBlock
