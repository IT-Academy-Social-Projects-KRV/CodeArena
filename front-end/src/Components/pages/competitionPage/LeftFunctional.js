import React from 'react';
import { Nav, Button } from 'react-bootstrap';

export default function LeftFunctional() {
    return (
        <>
            <Nav className="ms-4">
                <Nav.Link href="all" className="ms-auto">
                    <Button style={{ width: '12rem' }} variant="primary" className="me-2" >  All competitions </Button >
                </Nav.Link>
                <Nav.Link href="popular" className="ms-auto">
                    <Button style={{ width: '12rem' }} variant="primary" className="me-2"> Popular competitions </Button >
                </Nav.Link>
                <Nav.Link href="new" className="ms-auto">
                    <Button style={{ width: '12rem' }} variant="primary" className="me-2" >New competitions</Button >
                </Nav.Link>
            </Nav>
        </>
    )
}
