import axios from "axios";
import React from "react";

import { Form, FloatingLabel, Row, Col, Button, Alert } from "react-bootstrap";

import CategoriesDropDown from "../../Common/CategoriesDropDown";
import LanguagesDropDown from "../../Common/LanguagesDropDown";
import FormWrapper from "./FormWrapper";

class LeftBlock extends React.Component {
    state = {
        task: {
            name: "",
            description: "",
            user_id: "de305d54-75b4-431b-adb2-eb6b9e546013", // TODO: Getting current user ID
            rate: null,
            level: "lorem", // TODO: Create item for getting levels as dropdown menu
            languages: [],
            categories: [],
            status: "DR",
            unit_test: null,
        },
        solution: "",
        createdStatus: null,
    };

    createTask = async () => {
        // Create a task and get its HTTP status code. Set it in state

        await axios
            .post("/api/task/create_task/", this.state.task)
            .then((response) => {
                this.setState({ createdStatus: response.status });
            })
            .catch((error) => {
                this.setState({ createdStatus: error.response.status });
            });
    };

    testTask = () => {
        // TODO: Create functionality for creating the task and solution for this

        console.log(this.state);
    };

    handleChange = (event) => {
        // Triggered when something changed in forms components. Use component id as object key
        // TODO: Create the task when it is not created, and get its ID. If ID already exist - update this task

        this.setState((prevState) => ({
            task: {
                ...prevState.task,
                [event.target.id]: event.target.value,
            },
        }));
    };

    handleSelect = (itemList, id) => {
        // Triggered when something changed in drop-down components. Use component id as object key

        this.setState((prevState) => ({
            task: {
                ...prevState.task,
                [id]: itemList,
            },
        }));
    };

    render() {
        const { createdStatus } = this.state;

        const createTask = this.createTask;
        const handleChange = this.handleChange;
        const handleSelect = this.handleSelect;
        const testTask = this.testTask;

        return (
            <>
                <h3 className="text-center m-0 mt-3 type text-light">
                    Creating task
                </h3>
                <Col className="p-5 pt-3">
                    <Row className="gap-5" style={{ minheight: "656px" }}>
                        <FormWrapper wrapperTitle="Select options to create task">
                            <Form.Group
                                controlId="name"
                                className="my-3"
                                onChange={handleChange}
                            >
                                <Form.Label>Enter name of task:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                />
                            </Form.Group>

                            <Row className="gap-3">
                                <LanguagesDropDown
                                    id="languages"
                                    overrideOnSelect={handleSelect}
                                    isSingleSelect={true}
                                />

                                <CategoriesDropDown
                                    id="categories"
                                    overrideOnSelect={handleSelect}
                                />
                            </Row>

                            <Form.Group
                                controlId="rate"
                                className="my-3"
                                onChange={handleChange}
                            >
                                <Form.Label>
                                    Enter rating for this task
                                </Form.Label>
                                <Form.Control type="number" className="mb-1" />
                                <Form.Text className="text-muted">
                                    This rating will add to users rating while
                                    they solve task
                                </Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Add tests:</Form.Label>
                                <FloatingLabel
                                    controlId="unit_test"
                                    label="Tests"
                                    onChange={handleChange}
                                >
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Tests"
                                        className="my-2"
                                        style={{ height: "100px" }}
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Add solution:</Form.Label>
                                <FloatingLabel
                                    controlId="solution"
                                    label="Solution"
                                    onChange={handleChange}
                                >
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Solution"
                                        className="my-2"
                                        style={{ height: "100px" }}
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            {createdStatus ? (
                                <Alert
                                    variant={
                                        createdStatus === 422
                                            ? "danger"
                                            : "success"
                                    }
                                    className="m-0 mt-3 p-2"
                                >
                                    {createdStatus === 422
                                        ? "Get a problem when creating a task"
                                        : "Task created successfully"}
                                </Alert>
                            ) : null}
                        </FormWrapper>

                        <FormWrapper wrapperTitle="Description of your task">
                            <FloatingLabel
                                controlId="description"
                                label="Description"
                                className="mt-3"
                                onChange={handleChange}
                            >
                                <Form.Control
                                    as="textarea"
                                    placeholder="Description"
                                    style={{ height: "610px" }}
                                />
                            </FloatingLabel>
                        </FormWrapper>
                    </Row>

                    <Row className="gap-5 mt-4">
                        <Button
                            className="w-100 col"
                            variant="primary"
                            onClick={createTask}
                        >
                            Create task
                        </Button>
                        <Button
                            className="w-100 col"
                            variant="success"
                            onClick={testTask}
                        >
                            Test task
                        </Button>
                    </Row>
                </Col>
            </>
        );
    }
}

export default LeftBlock;
