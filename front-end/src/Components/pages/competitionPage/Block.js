import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import MainBlockCard from './MainBlockCard';

export default function Block() {
    return (
        <Navbar collapseOnSelect expand="md" className="grey">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Container style={{ width: 'auto' }}>
                    <MainBlockCard />
                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
}
