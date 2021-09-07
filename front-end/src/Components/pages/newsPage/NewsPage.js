import { Component } from "react"
import { Container, Row, Navbar, Nav } from "react-bootstrap"
import CardRows from "./CardRows";



export default class NewsPage extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" className="grey">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-center ms-5">
                            <Container className="justify-content-center ms-5 grey text-white">
                                <h1 className="text-center m-3 type">NEWS</h1>
                                <CardRows />
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
