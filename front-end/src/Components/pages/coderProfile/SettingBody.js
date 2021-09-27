import { Component } from "react";
import { Card, Button, Form, InputGroup, Col, Row } from 'react-bootstrap';
import FacebookLogo from "./images/FacebookLogo.png"
import LinkedinLogo from "./images/LinkedinLogo.png"
import RegistrationForm from "./ConfirmPassword";
import TwitterLogo from "./images/TwitterLogo.png"

export default class SettingsBody extends Component {
    render() {
        const { card } = this.props
        return (
            <div >
                <Card bg="success" className="mt-2">
                    <h2 className="ms-2"> Information</h2>
                </Card>
                <Form>
                    <Row className="mt-3">
                        <Form.Group as={Col} md="4">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue={card.first_name}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue={card.second_name}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="email"
                                    defaultValue={card.email}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mt-2">
                        <Form.Group as={Col} md="4">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nickname"
                                defaultValue={card.nickname}
                            />
                        </Form.Group>
                    </Row>
                </Form>
                <Card className="mt-3" bg="primary">
                    <h2 className='ms-2'>Personal data</h2>
                </Card>
                <Form>
                    <Form.Group>
                        <Form.Label md="4" className="mt-2">Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Write about yourself, hobbies, interests"
                            style={{ height: '150px' }}
                            defaultValue={card.description}
                        />
                    </Form.Group>
                </Form>
                <Row className="mt-2">
                    <Form.Group as={Col}>
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Location"
                            defaultValue={card.city}
                        />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>Your phone</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Phone"
                            defaultValue={card.phone}
                        />
                    </Form.Group>
                    <div className="mt-2">Registred from: {card.created_at}</div>
                </Row>
                <Card className="mt-3" bg="primary">
                    <h2 className='ms-2'>Social</h2>
                </Card>
                <div className="mt-3 mb-3">
                    <Row>
                        <Form.Group as={Col} md="1">
                            <a href="https://www.linkedin.com/">
                                <img style={{ width: "35px", height: "35px" }} src={LinkedinLogo} />
                            </a>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Control placeholder="Your Linkedin Profile URL"></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row className="mt-3">
                        <Form.Group as={Col} md="1">
                            <a href="https://twitter.com/login">
                                <img style={{ width: "35px", height: "35px" }} src={TwitterLogo} />
                            </a>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Control placeholder="Your Twitter username"></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row className="mt-3">
                        <Form.Group as={Col} md="1">
                            <a href="https://www.facebook.com/">
                                <img style={{ width: "35px", height: "35px" }} src={FacebookLogo} />
                            </a>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Control placeholder="Your Facebook Profile URL"></Form.Control>
                        </Form.Group>
                    </Row>
                </div>
                <Card bg="success" className="mt-3">
                    <h2 className="ms-2"> Privacy</h2>
                </Card>
                <Form.Check
                    className="mt-3 "
                    label="Show personal data only for recruters"
                    required
                />
                <Form.Check
                    className="mt-3 "
                    label="Show ..."
                    required
                />
                <Form.Check
                    className="mt-3 "
                    label="Show ..."
                    required
                />
                <Row className="mt-3">
                    <h6 className="text-center">Do you want to change your password?</h6>
                    <RegistrationForm />
                </Row>
                <div className="d-grid gap-2 mt-2">
                    <Button type="submit">Save</Button>
                </div>
            </div>
        );
    }
}
