import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import { Button, Col, Container, CardGroup, Card, Row, } from 'react-bootstrap';
import HeaderBlock from './HeaderBlock';
import LeftBlock from './LeftBlock';
import MiddleBlock from './MiddleBlock';
import RightBlock from './RightBlock';


class MainBlockCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parametrs: []
        }
    }

    

    async componentDidMount() {
        try {
            const response = await axios.get("/api/competition/competition/");
            this.setState({ parametrs: response.data});
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { parametrs } = this.state
        return (
            <Row style={{height:'auto'}} >
                <Container style={{ width: '90rem' }}>
                    {parametrs.map(card => {
                        return (
                            <CardGroup className="m-2" style={{ height: 'auto' }} >
                                <Card >
                                    <HeaderBlock card={card} />
                                    <Col >
                                        <Row className="ms-0 ">
                                            <LeftBlock card={card} />
                                            <MiddleBlock card={card} />
                                            <RightBlock card={card} />
                                        </Row>
                                    </Col>
                                    <div className="d-grid gap-2" >
                                        <Button style={{ width: 'auto' }} variant="success" className="my-2"> Join </Button>
                                    </div>
                                </Card>
                            </CardGroup>
                        );
                    })}
                </Container>
            </Row>
        )
    }
}

export default MainBlockCard;
