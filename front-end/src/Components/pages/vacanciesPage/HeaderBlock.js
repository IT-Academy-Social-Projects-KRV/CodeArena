import React from 'react';
import { Component } from 'react';
import { Card, } from 'react-bootstrap';

class HeaderBlock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { card } = this.props
        return (
            <div className="green">
                <Card.Header>
                    <h2>{card.name_vacancy} </h2>
                    <h4>{card.name_company}</h4>
                </Card.Header>
            </div>
        )
    }
}

export default HeaderBlock
