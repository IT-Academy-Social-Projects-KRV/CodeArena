import { Component } from "react";
import { Form } from 'react-bootstrap';

export default class Step1 extends Component {

    render() {
        return (
            <>
                <h3 className="text-start ms-2">Step 1</h3>
                <Form.Select className="my-3" aria-label="Default select example" >
                    <option>Choose language</option>
                    <option value="1">Java</option>
                    <option value="2">С</option>
                    <option value="3">C++</option>
                    <option value="4">Python</option>
                    <option value="5">CSS</option>
                    <option value="6">Javascript</option>
                </Form.Select>
                <Form.Select className="my-3" aria-label="Default select example">
                    <option>Choose min level</option>
                    <option value="1">Trainee</option>
                    <option value="2">Junior</option>
                    <option value="3">Middle</option>
                    <option value="4">Senior</option>
                </Form.Select>
            </>
        );
    }
}
