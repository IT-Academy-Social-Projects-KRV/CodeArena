import { Component } from "react"
import { Col, Container, Row} from "react-bootstrap"
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";


export default class TasklistPage extends Component {

    render () {
        return (
            <div style={{'background':'#292929'}}>
                <Container style={{padding: '20px'}}>
                    <Row>
                        <Col md={3} > <LeftColumn /> </Col>
                        <Col md={9}> <RightColumn allTasks={12}/> </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
