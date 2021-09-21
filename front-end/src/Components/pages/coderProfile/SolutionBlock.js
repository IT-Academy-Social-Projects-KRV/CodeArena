
import { Component } from "react";
import { ButtonGroup, Card, Container, Button, Nav } from 'react-bootstrap';
import './coderProfile.css'

export default class SolutioBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { card } = this.props
        return (
           
            <div className="grey">
                <Nav>
                    <Container className="mt-2" >
                        <div className="blue">
                            <Card style={{ height: 'auto' }} border="primary">
                                <div className="blue" >
                                    <ButtonGroup style={{ height: '4rem' }} variant="outline-succes">
                                        <a href="/profile">
                                            <Button style={{ width: '14rem', height: '4rem' }} variant="outline-success" className="text-white" >
                                                Data</Button>
                                        </a>
                                        <div className="green">
                                            <Button style={{ width: '14rem', height: '4rem' }} variant="outline-success" className="text-white">
                                                Solutions</Button>
                                        </div>
                                        <a href="/tasks_coder_id">
                                            <Button style={{ width: '14rem', height: '4rem' }} variant="outline-success" className="text-white">
                                                My Tasks</Button>
                                        </a>
                                    </ButtonGroup>
                                </div>
                                <Card.Body border="primary" >
                                   {/* <Card.Header style={{ width: 'auto', height: '15rem' }} bg="light" className="mt-2 body"> 
                                        <h2>{card.name}</h2>
                                   </Card.Header> */}
                                   {/* {solutions.map(card => <SolutioBody card={card} />)} */}
                                   <Card style={{ width: 'auto', height: '15rem' }} bg="light" className="mt-2"> 
                                        <h2>Solution 2</h2>
                                   </Card>
                                </Card.Body>
                            </Card>
                        </div>

                    </Container>
                </Nav>
            </div>

        );
    }
}
