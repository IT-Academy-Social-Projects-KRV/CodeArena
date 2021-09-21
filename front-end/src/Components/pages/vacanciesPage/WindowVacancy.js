import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap';
import MainBlockCard from './MainBlockCard';

class WindowVacancy extends Component {
    render() {
        return (
            <Col >
                <Container >
                    <MainBlockCard />
                </Container>
            </Col>
        )
    }
}

export default WindowVacancy
