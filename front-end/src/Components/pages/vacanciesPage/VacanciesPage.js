import React, { Component } from 'react';
import {Container, Navbar, Row} from 'react-bootstrap';
import Footer from '../../Footer/Footer';
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
                            <Footer/>
                        </Row>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default VacanciesPage
