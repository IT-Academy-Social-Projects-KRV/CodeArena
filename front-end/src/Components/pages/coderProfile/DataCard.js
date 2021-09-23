import { Component } from "react"
import { Nav, Container, Card } from "react-bootstrap";
import SettingsBody from "./SettingBody";

class TableProfileSetting extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    first_name:"Dodik",
                    second_name:"Bobik",
                    email: "CrazyDobik@gmail.ru",
                    nickname:"Baraban4k_99",
                    created_at:['2021.09.09'], 
                    description: "In this block i want to tell you about my intersts, hobbies and smth it",
                    city:"Rivne",
                    phone:"+3801234567890",                                     
                }
            ]
        }
    }

    render() {
        const { data } = this.state
        return (
            <div className="grey">
                <Nav>
                    <Container className="mt-4 mb-4">
                        <div className="blue">
                            <Card style={{ height: 'auto' }} border="success" bg="light">
                                <Card.Body border="success" >
                                    {data.map(card => <SettingsBody card={card} />)}
                                </Card.Body>
                            </Card>
                        </div>
                    </Container>
                </Nav>
            </div>
        )
    }
}
export default TableProfileSetting
