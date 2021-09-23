import { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import LeftColumn from "./leftcolumn";
import RightColumn from "./rightcolumn";

export default class TasklistPage extends Component {
    render () {
        return (
            <div style={{
                'background':'#292929',
                height: 'auto'}}>

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
