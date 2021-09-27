import axios from 'axios';
import React, { Component, useState } from 'react';
import {Form, Button, Collapse, FormGroup, FormControl, FormSelect, Row, Col, FloatingLabel } from "react-bootstrap";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import CategoriesDropDown from '../../Common/CategoriesDropDown';
import LanguagesDropDown from '../../Common/LanguagesDropDown';


class TaskCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            task: props.task,
        }
    }

    async deleteTask(pk) {
        const response = await axios.delete(`/task/task/${pk}`);
        var task = document.getElementById(`TaskCard${pk}`)
        task.remove()
    }

    async updateTask(pk) {
        var form = document.getElementById(`TaskForm${pk}`)
        const response = await axios.put(`/task/task/${pk}`, new FormData(form), { "Content-Type": "multipart/form-data" })
    }

    render() {
        const { task } = this.props;
        return (
            <>
                <div className="task-card" id={`TaskCard${this.state.task._id}`}>
                    <div
                        className="task-shortnfo"
                        onClick={() => this.setState({ open: !this.state.open })}
                        aria-controls="task-moreinfo"
                        aria-expanded={this.state.open}
                    >
                        <div className="task-shortinfo-name inline">
                            {this.state.task.name}
                        </div>
                        <div className="task-shortinfo-author inline">
                            {this.state.task.user_id}
                        </div>
                        <div className="task-shortinfo-rate inline">
                            {this.state.task.rate}
                        </div>
                        <div className="task-shortinfo-level inline">
                            {this.state.task.level}
                        </div>
                        <div className="task-shortinfo-status inline">
                            {this.state.task.status}
                        </div>
                        <div className="task-shortinfo-created inline">
                            {(new Date(this.state.task.created_at)).toLocaleString("ua-UK")}
                        </div>
                        <div className="task-shortinfo-updated inline">
                            {(new Date(this.state.task.updated_at)).toLocaleString("ua-UK")}
                        </div>
                    </div>
                    <Collapse in={this.state.open}>
                        <div id="TaksMoreInfo" className="task-moreinfo">
                            <Form id={`TaskForm${this.state.task._id}`}>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Name:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control name="name" type="text" defaultValue={this.state.task.name} />
                                    </Col>
                                </Form.Group>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Description:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <FloatingLabel controlId="floatingTextarea" label="Description">
                                            <Form.Control name="description" className="description-textfield" as="textarea">
                                                {this.state.task.description}
                                            </Form.Control>
                                        </FloatingLabel>
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Author:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <FormControl name="user_id" type="text" defaultValue={this.state.task.user_id} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Tests:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control name="tests" type="file" ref="sa" label={this.state.task.unit_test} multiple />
                                        <div className="current-file">
                                            Current file: {this.state.task.unit_test ? <a href={this.state.task.unit_test}>{this.state.task.unit_test}</a> : "No file uploaded"}
                                        </div>
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Rate:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <FormControl name="rate" type="number" defaultValue={this.state.task.rate} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Level:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <FormControl name="level" type="text" defaultValue={this.state.task.level} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Status:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <FormSelect name="status" className="inline">
                                            <option selected={this.state.task.status == "DR"} value="DR">Draft</option>
                                            <option selected={this.state.task.status == "PB"} value="PB">Published</option>
                                        </FormSelect>
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Languages:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <LanguagesDropDown selected={this.state.task.languages} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Categories:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <CategoriesDropDown selected={this.state.task.categories} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Created:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Datetime className="datetime" value={(new Date(this.state.task.created_at)).toLocaleString("ua-UK")} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Updated:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Datetime
                                            className="datetime"
                                            value={(new Date(this.state.task.updated_at)).toLocaleString("ua-UK")}
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
                                onClick={() => this.updateTask(this.state.task._id)}
                            >
                                Update
                            </Button>
                            <Button
                                variant="secondary"
                                className="task-card-button"
                                onClick={() => this.deleteTask(this.state.task._id)}
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
