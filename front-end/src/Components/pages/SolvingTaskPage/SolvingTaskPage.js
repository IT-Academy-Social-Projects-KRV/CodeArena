import axios from "axios";
import React from "react";

import { Alert, Card, Col, Form, FloatingLabel, Button } from "react-bootstrap";

class SolvingTaskPage extends React.Component {
    state = {
        task: {},
        solution: {
            coder_id: "de305d54-75b4-431b-adb2-eb6b9e546013", // TODO: get user id
            task: "",
            solution: "",
            status: "DR",
        },
    };

    handleChange = async (event) => {
        // Triggered when something changed in forms components

        this.setState(
            (prevState) => ({
                solution: {
                    ...prevState.solution,
                    status: "DR",
                    solution: event.target.value,
                },
            }),
            async () => await this.sendSolution()
        );
    };

    sendSolution = async () => {
        const changeURL = (solution_id) => {
            // Insert solution ID in URL without reloading page

            if (this.props.match.params.solution_id == null) {
                const task_id = this.props.match.params.task_id;
                const newPath = `/solve_task/${task_id}/${solution_id}`;

                window.history.pushState({}, null, newPath);
                this.props.match.params.solution_id = solution_id;
            }
        };

        await axios
            .post("/api/task/create_codertask/", this.state.solution)
            .then((response) => {
                this.setState(
                    { solution: response.data },
                    changeURL(response.data._id)
                );
            });
    };

    getTask = async () => {
        const task_id = this.props.match.params.task_id;

        await axios.get(`/api/task/get_task/${task_id}`).then((response) => {
            this.setState({ task: response.data[0] });
        });
    };

    getSolution = async () => {
        const solution_id = this.props.match.params.solution_id;

        if (solution_id == null) {
            return null;
        }

        await axios
            .get(`/api/task/codertasks/${solution_id}`)
            .then((response) => {
                const solution = response.data[0];

                if (solution.task === this.state.task._id) {
                    this.setState({ solution: solution });
                }
            });
    };

    testTask = async () => {
        this.setState(
            (prevState) => ({
                solution: {
                    ...prevState.solution,
                    status: "ED",
                },
            }),
            async () => await this.sendSolution()
        );

        const interval = setInterval(async () => {
            await this.getSolution();

            if (["CR", "FL"].includes(this.state.solution.status)) {
                clearInterval(interval);
            }
        }, 1000);
    };

    publishTask = () => {
        this.setState(
            (prevState) => ({
                solution: {
                    ...prevState.solution,
                    status: "PB",
                },
            }),
            async () => await this.sendSolution()
        );
    };

    showSolutionStatusInfo = () => {
        const status = this.state.solution.status;
        const info =
            status === "CR"
                ? { variant: "success", text: "Submitted tests" }
                : status === "FL"
                ? { variant: "danger", text: "Tests failed" }
                : status === "PB"
                ? { variant: "info", text: "Task was published" }
                : { variant: "warning", text: "Something went wrong" };

        return (
            <Alert variant={info.variant} className="m-0 mt-3 p-2">
                {info.text}
            </Alert>
        );
    };

    async componentDidMount() {
        await this.getTask();
        this.setState((prevState) => ({
            solution: {
                ...prevState.solution,
                task: this.state.task._id,
            },
        }));
        await this.getSolution();
    }

    render() {
        const { task, solution } = this.state;

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
                                    defaultValue={solution.solution}
                                    disabled={["ED", "TS"].includes(solution.status)}
                                />
                            </FloatingLabel>

                            {["CR", "FL", "PB"].includes(solution.status)
                                ? this.showSolutionStatusInfo()
                                : null}
                        </Card.Body>
                        <Card.Footer className="row m-0 p-3 justify-content-center gap-5">
                            <Button
                                className="col-2"
                                variant={
                                    solution.status === "CR"
                                        ? "success"
                                        : "danger"
                                }
                                onClick={this.publishTask}
                                disabled={solution.status !== "CR"}
                            >
                                {solution.status === "CR"
                                    ? "Publish"
                                    : "Publish is blocked"}
                            </Button>
                            <Button
                                className=" col-2"
                                variant="success"
                                onClick={this.testTask}
                                disabled={solution._id ? false : true}
                            >
                                Test solution
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </div>
        );
    }
}

export default SolvingTaskPage;
