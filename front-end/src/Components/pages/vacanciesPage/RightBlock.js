import React from 'react';
import { Component } from 'react';
import { Card } from 'react-bootstrap';

class RightBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { card } = this.props
        return (
            <Card bg="light" style={{ width: '12.5rem' }} border="light" >
                <Card.Body style={{ height: 'auto' }}>
                    <Card.Img style={{ width: '10rem' }} position="top" src={card.src}  />
                </Card.Body>
            </Card>
        )
    }
}

export default RightBlock
