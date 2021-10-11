import React, { useState } from 'react';
import axios from "axios";
import Navigation from './Navigation';
import './header.css';
import { HashRouter, BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import { Button, InputGroup, Form, Modal, Row, Col, Nav } from 'react-bootstrap';
import { toast } from "react-toastify";
import MainContainer from '../pages/homePage/MainContainer';
import NewsPage from '../pages/newsPage/NewsPage';
import VacanciesPage from '../pages/vacanciesPage/VacanciesPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import ActivateAccount from './ActivateAccount';

function Header() {

    const [showUp, setShowUp] = useState(false);
    const handleCloseUp = () => setShowUp(false);
    const handleShowUp = () => setShowUp(true);

    const [showIn, setShowIn] = useState(false);
    const handleCloseIn = () => setShowIn(false);
    const handleShowIn = () => setShowIn(true);

    const [formData, setFormData] = useState(0);
    const [errors, setErrors] = useState({}); // TODO errors handling
    
    const activeClick = () => {
        window.location = 'http://127.0.0.1:3000'
        setTimeout(() => {
        window.location.reload(true); }, 2500);
        window.location.reload(true);
        
    }

    const isValidForm = (password, confirmPassword) => { 
        if (password != undefined && confirmPassword != undefined) 
        {
            if (password != confirmPassword) {
                toast.error("passwords don't match!", {
                    position: toast.POSITION.TOP_CENTER
                })
                return false;
            }
        
        }
        return true;
    };
    
    
    const signUp = async(form) => { 
        form.preventDefault(); 
        const formFields = form.target
        if (isValidForm(formFields.password.value, formFields.confirmPassword.value))
        {
        const data = {email: form.target.email.value,
        username: form.target.nickname.value,
        role_id: (formData),
        
        password: form.target.password.value,
        status: "Active"
    }  
        console.log(data)
                                await axios.post("api/auth/users/", data)
                                .then(response => {
                                    console.log(data) 
                                });
                                    
    }
};


const logIn = async(formLogin) => { 
    formLogin.preventDefault(); 
    const formFieldsLogIn = formLogin.target
    const dataLogIn = {
    username: formFieldsLogIn.nickname.value,     
    password: formFieldsLogIn.password.value,
    
    }
    
                            await axios.post("api/auth/jwt/create/", dataLogIn)
                            .then(response => {
                                localStorage.setItem("access", response["data"]["access"]) 
                                localStorage.setItem("refresh", response["data"]["refresh"])
                                activeClick();
                                
                            
                            });
                                

};

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
                    <h3><b><nav className="main_navigation type" fontSize="2">
                        <a href="/">Code Arena</a>
                    </nav></b></h3>
                    <Navigation />
                </div>
            </header>
            <Modal show={showUp} onHide={handleCloseUp}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => {signUp(e)}}>
                        <Form.Group className="mb-3" contriolId="fromBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control id="inlineFormInputGroup" placeholder="Enter nickname" name="nickname"/>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" contriolId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" name="password"/>
                            <Form.Text className="text muted">Min 8 characters, use upper and lowercase letters, numbers</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" contriolId="fromBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" name='confirmPassword' />
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
                                        onClick={() => setFormData("3")}
                                        
                                        
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="recruiter"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        onClick={() => setFormData("4")}
                                        
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
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
                    <Form onSubmit={(e) => {logIn(e)}}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control id="inlineFormInputGroup" placeholder="Enter nickname"  name="nickname"/>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" contriolId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" name="password"/>
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
           
            <Router>
                <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route exact path="/news" component={NewsPage} />
                    <Route exact path="/jobs" component={VacanciesPage}/>
                    <Route exact path="/about" component={AboutPage} />
                    
                </Switch>
            </Router>

        </>
    )
}

export default Header;

//local storage setItem