import { Component } from "react";
import { Form, FloatingLabel } from 'react-bootstrap';

export default class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            img: "",
        };
    }

    handleChangeDescription = (event) => { this.setState({ description: event.target.value }); }

    handleChangeImg = (event) => {this.setState({img: event.target.value});}

    render() {
        return (
            <>
                <h3 className="ms-2">Step 3</h3>
                <div className="text-start ms-2"> Write all discription about your vacancy:</div>
                <FloatingLabel controlId="floatingTextarea2" label="Discription">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '150px' }}
                        className="my-2"
                        type="text"
                        value={this.state.description}
                        onChange={this.handleChangeDescription}
                    />
                </FloatingLabel>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label className="ms-2">Choose logo of your company</Form.Label>
                    <Form.Control
                        type="file"
                        value={this.state.img}
                        onChange={this.handleChangeImg}
                    />
                </Form.Group>
            </>
        );
    }
}
