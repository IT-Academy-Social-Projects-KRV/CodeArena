import React from 'react';
import { Nav } from 'react-bootstrap';

function FooterBl() {
    return (
        <Nav className="justify-content-center" >
            <Nav.Item className='my-3'>
                <Nav.Link href="/home">CODE ARENA 2021</Nav.Link>
            </Nav.Item >
            <Nav.Item className='my-3'>
                <Nav.Link href="/link-1">API</Nav.Link>
            </Nav.Item>
            <Nav.Item className='my-3'>
                <Nav.Link href="link-2">ABOUT</Nav.Link>
            </Nav.Item>
            <Nav.Item className='my-3'> 
                <Nav.Link href="link-3">PRIVACY</Nav.Link>
            </Nav.Item >
            <Nav.Item className='my-3'>
                <Nav.Link href="link-4">CONTACT</Nav.Link>
            </Nav.Item>

        </Nav>
    )
}
export default FooterBl;
