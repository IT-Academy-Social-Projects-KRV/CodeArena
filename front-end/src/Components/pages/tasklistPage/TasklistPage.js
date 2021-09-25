import { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

export default class TasklistPage extends Component {
    render () {
        return (
            <div style={{'background':'#292929', height: '82vh'}}>
                <Container style={{padding: '20px', height: '100%'}}>
                    <Row>
                        <Col md={3} > <LeftColumn /> </Col>
                        <Col md={9}> <RightColumn /> </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}