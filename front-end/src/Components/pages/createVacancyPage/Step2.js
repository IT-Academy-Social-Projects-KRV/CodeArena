
import { Component } from "react";
import { Form } from 'react-bootstrap';

export default class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vacancy: "",
            company: "",
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCompany = this.handleChangeCompany.bind(this);
    }

    handleChangeName(event) {
        this.setState({
            vacancy: event.target.value
        });
    }

    handleChangeCompany(event) {
        this.setState({
            company: event.target.value
        });
    }

    render() {
        return (
            <>
                <h3 className="ms-2">Step 2</h3>
                <Form.Group className="my-3" controlId="formGroupText">
                    <Form.Label className="ms-2">Enter name of vacancy:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={this.state.vacancy} onChange={this.handleChangeName} />
                </Form.Group>
                <Form.Group className="my-3" controlId="formGroupText">
                    <Form.Label className="ms-2">Enter name of company:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={this.state.company} onChange={this.handleChangeCompany} />
                </Form.Group>

            </>
        );
    }
}
