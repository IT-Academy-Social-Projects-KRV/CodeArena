import axios from 'axios';
import React, { Component, useState } from 'react';
import { Form, Button, Collapse, FormGroup, FormControl, FormSelect, Row, Col, FloatingLabel } from "react-bootstrap";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import CategoriesDropDown from '../../Common/CategoriesDropDown';
import LanguagesDropDown from '../../Common/LanguagesDropDown';


class TaskCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    async deleteTask(pk) {
        const response = await axios.delete(`/api/task/task/${pk}`);
        var task = document.getElementById(`TaskCard${pk}`)
        task.remove()
    }

    async updateTask(pk) {
        var form = document.getElementById(`TaskForm${pk}`)
        const response = await axios.put(`/api/task/task/${pk}`, new FormData(form), { "Content-Type": "multipart/form-data" })
    }

    render() {
        const { task } = this.props;
        return (
            <>
                <div className="task-card" id={`TaskCard${task._id}`}>
                    <div
                        className="task-shortinfo"
                        onClick={() => this.setState({ open: !this.state.open })}
                        aria-controls="task-moreinfo"
                        aria-expanded={this.state.open}
                    >
                        <div className="task-shortinfo-name inline">
                            {task.name}
                        </div>
                        <div className="task-shortinfo-author inline">
                            {task.user_id}
                        </div>
                        <div className="task-shortinfo-rate inline">
                            {task.rate}
                        </div>
                        <div className="task-shortinfo-level inline">
                            {task.level}
                        </div>
                        <div className="task-shortinfo-status inline">
                            {task.status}
                        </div>
                        <div className="task-shortinfo-created inline">
                            {(new Date(task.created_at)).toLocaleString("ua-UK")}
                        </div>
                        <div className="task-shortinfo-updated inline">
                            {(new Date(task.updated_at)).toLocaleString("ua-UK")}
                        </div>
                    </div>
                    <Collapse in={this.state.open}>
                        <div id="TaksMoreInfo" className="task-moreinfo">
                            <Form id={`TaskForm${task._id}`}>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Name:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control name="name" type="text" defaultValue={task.name} />
                                    </Col>
                                </Form.Group>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Description:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <FloatingLabel controlId="floatingTextarea" label="Description">
                                            <Form.Control name="description" className="description-textfield" as="textarea">
                                                {task.description}
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Author:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <FormControl name="user_id" type="text" defaultValue={task.user_id} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Tests:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control name="tests" type="file" />
                                        <div className="current-file">
                                            Current file: {task.unit_test ? <a href={task.unit_test}>{task.unit_test}</a> : "No file uploaded"}
                                        </div>
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Rate:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <FormControl name="rate" type="number" defaultValue={task.rate} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Level:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <FormControl name="level" type="text" defaultValue={task.level} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Status:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <FormSelect name="status" className="inline">
                                            <option selected={task.status == "DR"} value="DR">Draft</option>
                                            <option selected={task.status == "PB"} value="PB">Published</option>
                                        </FormSelect>
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Languages:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <LanguagesDropDown selected={task.languages} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Categories:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <CategoriesDropDown selected={task.categories} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Created:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Datetime className="datetime" value={(new Date(task.created_at)).toLocaleString("ua-UK")} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Updated:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Datetime
                                            className="datetime"
                                            value={(new Date(task.updated_at)).toLocaleString("ua-UK")}
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>
                            <Button
                                variant="secondary"
                                className="task-card-button"
                                onClick={() => this.setState({ open: !this.state.open })}
                                aria-controls="TaskMoreInfo"
                                aria-expanded={this.state.open}
                            >
                                Close
                            </Button>
                            <Button
                                variant="secondary"
                                className="task-card-button"
                                onClick={() => this.updateTask(task._id)}
                            >
                                Update
                            </Button>
                            <Button
                                variant="secondary"
                                className="task-card-button"
                                onClick={() => this.deleteTask(task._id)}
                            >
                                Delete
                            </Button>
                        </div>
                    </Collapse>
                </div >
            </>
        )
    }
}
export default TaskCard;
