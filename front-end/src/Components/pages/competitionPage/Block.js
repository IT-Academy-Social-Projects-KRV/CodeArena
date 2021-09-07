import React from 'react';
import { Navbar, Container, Row, } from 'react-bootstrap';

import MainBlockCard from './MainBlockCard';

export default function Block() {
    return (        
            <Navbar collapseOnSelect expand="md" className="grey">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Row className="ms-5">
                        <Container className="ms-5 " style={{ width: '100rem' }}>
                            <MainBlockCard />                                                       
                        </Container>                        
                    </Row>                                      
                </Navbar.Collapse>                
            </Navbar>                   
    )
}
