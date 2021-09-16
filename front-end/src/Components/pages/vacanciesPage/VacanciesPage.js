import React, { Component } from 'react';
import {Container, Navbar, Row} from 'react-bootstrap';
import ChooseCategory from './ChooseCategory';
import WindowVacancy from './WindowVacancy';

class VacanciesPage extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" className="grey" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Container>
                        <Row >
                            <ChooseCategory />
                            <WindowVacancy />                           
                        </Row>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default VacanciesPage
