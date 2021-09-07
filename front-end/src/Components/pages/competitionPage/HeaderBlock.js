import React from 'react';
import { Component } from 'react';
import { Card, } from 'react-bootstrap';
import '../../../App.css';

class HeaderBlock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { card } = this.props
        return (
            <>
                <div className="blue">
                    <Card.Header >
                        <h2 >{card.name} </h2>
                    </Card.Header>
                </div>
            </>
        )
    }
}

export default HeaderBlock
