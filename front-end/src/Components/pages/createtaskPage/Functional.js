import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function Functional() {
    return (
        <Navbar collapseOnSelect expand="md" className="grey">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-4">
                    <Nav.Link href="pr_task" className="ms-auto">
                        <Button size="sm" variant="primary" className="me-2" >  go back </Button >
                    </Nav.Link>
                    <Nav.Link href="draft" className="ms-auto">
                        <Button size="sm" variant="primary" className="me-2"> save as draft </Button >
                    </Nav.Link>
                    <Nav.Link href="my_tasks" className="ms-auto">
                        <Button size="sm" variant="primary" className="me-2" >my tasks</Button >
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
