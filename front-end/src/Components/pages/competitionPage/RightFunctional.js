import React from 'react';
import { Nav, Button, Form, FormControl, Dropdown } from 'react-bootstrap';

export default function RightFunctional() {
    return (
        <>
            <Nav className="ms-auto">
                <Dropdown className="me-4">
                    <Dropdown.Toggle style={{ width: '12rem' }} variant="success" id="dropdown-basic">
                        Sort by language
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="/language" >Language 1</Dropdown.Item>
                        <Dropdown.Item href="/language">Language 2</Dropdown.Item>
                        <Dropdown.Item href="/language">Language 3</Dropdown.Item>
                        <Dropdown.Item href="/language">Language 4</Dropdown.Item>
                        <Dropdown.Item href="/language">Language 5</Dropdown.Item>
                        <Dropdown.Item href="/language">Language 6</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form className="d-flex" >
                    <FormControl type="search" placeholder="Search" aria-label="Search" />
                    <Button variant="outline-success" className="me-2">Search</Button>
                </Form>
            </Nav>

        </>
    )
}
