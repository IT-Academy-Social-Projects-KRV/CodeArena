import { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Leftcol from "./leftcolumn";
import Rightcol from "./rightcolumn";

export default class TasklistPage extends Component {
    render () {
        return (
            <div style={{
                'background':'#292929',
                height: '82vh'}}>

            <Container style={{padding: '20px', height: '100%'}}>
                    <Row>
                        <Col md={3} > <Leftcol /> </Col>
                        <Col md={9}> <Rightcol /> </Col>
                    </Row>
            </Container>

            </div>
        )
    }
}
