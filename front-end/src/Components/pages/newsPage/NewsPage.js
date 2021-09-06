import { Component } from "react"
import { Container, Col, Navbar, Nav, Row } from "react-bootstrap"
import CardRows from "./CardRows";
import Footer from "../../Footer/Footer"



export default class NewsPage extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" className="grey">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="ms-5">
                        <div className="ms-5">
                            <Row className="ms-5"> 
                            <Col className="ms-5">
                        <Nav className="ms-5">
                            <Container className="justify-content-center ms-5 grey text-white">
                                <div className="m-3">
                                <h1 className="text-center me-4 type">NEWS</h1>
                                </div>
                                <CardRows />
                                <Footer />
                            </Container>
                        </Nav>
                        </Col>
                        </Row>
                        </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
