import { Component } from "react"
import { Navbar } from "react-bootstrap"
import CardRows from "./CardRows";


export default class NewsPage extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" className="grey">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    </Navbar.Collapse>
                </Navbar>
                <div className="grey text-white">
                    <h1 className="text-center type">NEWS</h1>
                    <CardRows />
                </div>
            </>
        )
    }
}
