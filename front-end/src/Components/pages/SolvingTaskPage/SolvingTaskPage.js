import { auto } from "@popperjs/core";
import axios from "axios";
import React from "react";

import { Card, Col, Form, FloatingLabel, Button } from "react-bootstrap";
// 615771c46344018301e1f87c
class SolvingTaskPage extends React.Component {
    state = {
        task: {},
        solution: {
            coder_id: "de305d54-75b4-431b-adb2-eb6b9e546013",
            task: "",
            solution: "",
            status: "DR",
        }
    };

    handleChange = (event) => {
        // Triggered when something changed in forms components. Use component id as object key

        this.setState((prevState) => ({
            solution: {
                ...prevState.solution,
                solution: event.target.value,
            },
        }));
    };

    getTask = async () => {
        const task_id = this.props.match.params.id;
        await axios.get(`/api/task/get_task/${task_id}`).then((response) => {
            this.setState({ task: response.data[0] });
        });
    };

    async componentDidMount() {
        await this.getTask();
        this.setState((prevState) => ({
            solution: {
                ...prevState.solution,
                task: this.state.task._id,
            },
        }));
        console.log(this.state)
    }

    render() {
        const { task } = this.state;
        return (
            <div className="d-flex justify-content-center grey py-5">
                <Col className="col-9">
                    <Card className="row">
                        <Card.Title as="h3" className="m-0 p-2">
                            {task.name}
                        </Card.Title>
                        <Card.Subtitle className="py-1 text-secondary">
                            {task.languages} | {task.categories}
                        </Card.Subtitle>
                        <Card.Body>{task.description}</Card.Body>
                    </Card>
                    <Card className="row mt-4">
                        <Card.Title
                            as="h4"
                            className="m-0 py-2 pb-0 pt-3 text-center"
                        >
                            Write your solution here
                        </Card.Title>
                        <Card.Body>
                            <FloatingLabel
                                controlId="solution"
                                label="Solution"
                                onChange={this.handleChange}
                            >
                                <Form.Control
                                    as="textarea"
                                    placeholder="Solution"
                                    className="m-0"
                                    style={{ height: "200px" }}
                                />
                            </FloatingLabel>
                        </Card.Body>
                        <Card.Footer className="row m-0 p-3 justify-content-center gap-5">
                            <Button
                                className="col-2"
                                variant="primary"
                                onClick={this.putSolution}
                            >
                                Create task
                            </Button>
                            <Button
                                className=" col-2"
                                variant="success"
                            >
                                Test task
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </div>
        );
    }
}

export default SolvingTaskPage;
