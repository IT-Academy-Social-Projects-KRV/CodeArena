import React from 'react';
import { Container, Card, CardGroup, Button, Form, Col, FloatingLabel } from 'react-bootstrap';

export default function Left_block() {

    return (
        <>
            <h3 className="text-center m-3 type">Creating task</h3>
            <Col className="ms-2">
                <Container className="m-2" >
                    <CardGroup className="my-1" style={{ height: '33rem' }} >
                        <Card bg="light" >
                            <Card.Body >
                                <Card.Text className="text-center m-3" > Select options to create task  </Card.Text>
                                <Form.Select className="my-3" aria-label="Default select example">
                                    <option>Choose language</option>
                                    <option value="1">Java</option>
                                    <option value="2">С</option>
                                    <option value="3">C++</option>
                                    <option value="4">Python</option>
                                    <option value="5">CSS</option>
                                    <option value="6">Javascript</option>
                                </Form.Select>
                                <Form.Select className="my-3" aria-label="Default select example">
                                    <option >Choose category</option>
                                    <option value="1">Functions and modules</option>
                                    <option value="2">Сlasses and objects</option>
                                    <option value="3">SOLID</option>
                                </Form.Select>
                                <Form.Group className="my-3" controlId="formGroupText">
                                    <Form.Label>Enter name of task:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Choose file for test</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                                <div>Add solutions:</div>
                                <FloatingLabel controlId="floatingTextarea2" label="Solutions">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '105px' }}
                                        className="my-2"
                                    />
                                </FloatingLabel>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <div className="d-grid gap-2" >
                        <Button style={{ width: 'auto' }} variant="primary" > Add task </Button>
                    </div>
                </Container>
            </Col>
        </>
    )
}
