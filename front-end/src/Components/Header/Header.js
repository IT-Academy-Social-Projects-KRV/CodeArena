import React, { useState } from 'react';
import Navigation from './Navigation';
import './header.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import { Button, InputGroup, Form, Modal, Row, Col } from 'react-bootstrap';


import MainContainer from '../pages/homePage/MainContainer';
import NewsPage from '../pages/newsPage/NewsPage';

function Header() {

    const [showIn, setShowIn] = useState(false);
    const handleCloseIn = () => setShowIn(false);
    const handleShowIn = () => setShowIn(true);

    const [showUp, setShowUp] = useState(false);
    const handleCloseUp = () => setShowUp(false);
    const handleShowUp = () => setShowUp(true);


    return (
        <>
            <header className="header type">
                <section className="top_menu">
                    <div>
                        <button onClick={handleShowUp}> Sign Up</button>
                        <button onClick={handleShowIn}>Log In</button>
                    </div>
                </section>
                <div className="mainheader type">
                    <h3><b><nav className="main_navigation type" font-size="2">
                        <a href="/">Code Arena</a>
                    </nav></b></h3>
                    <Navigation />
                </div>
            </header>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route exact path="/news" component={NewsPage} />
                </Switch>
            </Router>
            <Modal show={showUp} onHide={handleCloseUp}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" contriolId="fromBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text muted">We'll never share your email with anyone else</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control id="inlineFormInputGroup" placeholder="Enter nickname" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" contriolId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <fieldset>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                    Role
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="coder"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="recruiter"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="moderator"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="admin"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>


                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Select>
                                <option>Select your role from the drop-down list</option>
                                <option value="1">coder</option>
                                <option value="2">recruiter</option>
                                <option value="3">moderator</option>
                                <option value="4">admin</option>
                            </Form.Select>
                        </Form.Group>
                        
                        <Form.Group className="mb-4" contriolId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Form.Group contriolId="fromBasicCheckbox">
                            <Button type="submit">Sign up</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showIn} onHide={handleCloseIn}>
                <Modal.Header className="type" closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control id="inlineFormInputGroup" placeholder="Enter nickname" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" contriolId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Form.Group className="mb-4" contriolId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Form.Group contriolId="fromBasicCheckbox">
                            <Button type="submit">Log in</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Header;
