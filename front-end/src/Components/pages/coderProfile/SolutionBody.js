
import { Component } from "react";
import { ButtonGroup, Card, Container, Button, Nav } from 'react-bootstrap';

export default class SolutioBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { card } = this.props
        return (
            <>
                <Card  bg="light" className="mt-2 body">
                    <h2 className="ms-2">{card.name}</h2>
                    <Card  bg="light" className="mt-2">
                    <h5 className="ms-2">Language: {card.languages}</h5>
                    <h6 className="text-center">Task description</h6>
                    <h6 className="text-center">{card.description}</h6>
                </Card>
                </Card>
                
            </>
        );
    }
}
