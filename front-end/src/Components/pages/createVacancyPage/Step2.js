
import { Component } from "react";
import { Form } from 'react-bootstrap';

export default class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name_vacancy: "",
            name_company: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange(event) {
        this.setState({
            name_vacancy: event.target.value
        });

    }

    handleChange2(event) {
        this.setState({
            name_company: event.target.value
        });

    }

    render() {
        return (
            <>
                <h3 className="ms-2">Step 2</h3>
                <Form.Group className="my-3" controlId="formGroupText">
                    <Form.Label className="ms-2">Enter name of vacancy:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={this.state.name_vacancy} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="my-3" controlId="formGroupText">
                    <Form.Label className="ms-2">Enter name of company:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={this.state.name_company} onChange={this.handleChange2} />
                </Form.Group>

            </>
        );
    }
}