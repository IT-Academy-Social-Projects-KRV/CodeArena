import React, { useState } from "react";
import { Container, Row, Col, Form, Button, } from "react-bootstrap";

const initialState = {
    newpassword: "",
    confirmPass: "",
};
const passVerificationError = {
    isLenthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    confirmPass: false,
};

const RegistrationForm = () => {
    const [user, setUser] = useState(initialState);
    const [passwordError, setPasswordError] = useState(passVerificationError);
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser({ user, [name]: value });
        if (name === "newpassword") {
            const isLenthy = value.length > 8;
            const hasUpper = /[A-Z]/.test(value);
            const hasLower = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            setPasswordError({
                ...passwordError,
                isLenthy,
                hasUpper,
                hasLower,
                hasNumber,
            });
        }
        if (name === "confirmPass") {
            setPasswordError({
                ...passwordError,
                confirmPass: user.newpassword === value,
            });
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>New password</Form.Label>
                            <Form.Control
                                type="text"
                                name="newpassword"
                                value={user.newpassword}
                                onChange={handleOnChange}
                                placeholder="New password"
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="text"
                                name="confirmPass"
                                value={user.confirmPass}
                                onChange={handleOnChange}
                                placeholder="Confirm Password"
                                required
                            />
                        </Form.Group>
                        <Form.Text>
                            {!passwordError.confirmPass && (<div className="text-danger mb-3">Password doesn't match!</div>)}
                        </Form.Text>
                        <ul className="mt-2">
                            <li className={passwordError.isLenthy ? "text-success" : "text-danger"}> Min 8 characters</li>
                            <li className={passwordError.hasUpper ? "text-success" : "text-danger"}>At least one upper case</li>
                            <li className={passwordError.hasLower ? "text-success" : "text-danger"}> At least one lower case</li>
                            <li className={passwordError.hasNumber ? "text-success" : "text-danger"}> At least one number</li>
                        </ul>
                        <Button variant="primary" type="submit" disabled={passwordError.confirmPass == false}>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegistrationForm;
