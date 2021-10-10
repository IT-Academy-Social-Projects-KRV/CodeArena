import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import { Card, } from 'react-bootstrap';

class LeftBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {}
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`/api/user/1`)
            this.setState({ author: response.data[0] })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { card } = this.props
        return (
            <Card bg="light" style={{ width: '23rem' }} >
                <Card.Body style={{ height: 'auto' }}>
                    <Card.Text className="text-start " >
                        <h4>Language: {card.language}</h4>
                        <div>Time for competition: {(new Date(card.finish_time) - new Date(card.start_time)) / 3600000}h </div>
                        <h5>Start in: {new Date(card.start_time).toLocaleTimeString("uk-UA", { hour: '2-digit', minute: '2-digit' })} </h5>
                        <h6>Author: {this.state.author.nickname}</h6>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default LeftBlock
