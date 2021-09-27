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
                <div className="TaskCard" id={`TaskCard${this.state.task._id}`}>
                    <div
                        className="TaskShortInfo"
                        onClick={() => this.setState({ open: !this.state.open })}
                        aria-controls="TaskMoreInfo"
                        aria-expanded={this.state.open}
                    >
                        <div className="TaskShortInfoName InLine">
                            {this.state.task.name}
                        </div>
                        <div className="TaskShortInfoAuthor InLine">
                            {this.state.task.user_id}
                        </div>
                        <div className="TaskShortInfoRate InLine">
                            {this.state.task.rate}
                        </div>
                        <div className="TaskShortInfoLevel InLine">
                            {this.state.task.level}
                        </div>
                        <div className="TaskShortInfoStatus InLine">
                            {this.state.task.status}
                        </div>
                        <div className="TaskShortInfoCreated InLine">
                            {(new Date(this.state.task.created_at)).toLocaleString("ua-UK")}
                        </div>
                        <div className="TaskShortInfoUpdated InLine">
                            {(new Date(this.state.task.updated_at)).toLocaleString("ua-UK")}
                        </div>
                    </div>
                    <Collapse in={this.state.open}>
                        <div id="TaksMoreInfo" className="TaskMoreInfo">
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
                                            <Form.Control name="description" className="DescriptionTextField" as="textarea">
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
                                        <div className="CurrentFile">
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
                                        <FormSelect name="status" className="InLine">
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
                                        <Datetime className="DateTime" value={(new Date(this.state.task.created_at)).toLocaleString("ua-UK")} />
                                    </Col>
                                </FormGroup>
                                <FormGroup as={Row} >
                                    <Form.Label column sm={2}>
                                        Updated:
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Datetime
                                            className="DateTime"
                                            value={(new Date(this.state.task.updated_at)).toLocaleString("ua-UK")}
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>
                            <Button
                                variant="secondary"
                                className="Button"
                                onClick={() => this.setState({ open: !this.state.open })}
                                aria-controls="TaskMoreInfo"
                                aria-expanded={this.state.open}
                            >
                                Close
                            </Button>
                            <Button
                                variant="secondary"
                                className="Button"
                                onClick={() => this.updateTask(this.state.task._id)}
                            >
                                Update
                            </Button>
                            <Button
                                variant="secondary"
                                className="Button"
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
