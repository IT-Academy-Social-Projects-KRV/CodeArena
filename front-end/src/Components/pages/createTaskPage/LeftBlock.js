import React from 'react';
import { Container, Card, CardGroup, Button, Form, Col, FloatingLabel } from 'react-bootstrap';

import CategoriesDropDown from '../../Common/CategoryDropDown';
import LanguagesDropDown from '../../Common/LanguagesDropDown';

class LeftBlock extends React.Component {
    render(){
    return (
        <>
            <h3 className="text-center m-3 type">Creating task</h3>
            <Col className="ms-2">
                <Container className="m-2" >
                    <CardGroup className="my-1" style={{ height: '33rem' }} >
                        <Card bg="light" >
                            <Card.Body >
                                <Card.Text className="text-center m-3" > Select options to create task  </Card.Text>
                                <LanguagesDropDown className="my-3" />
                                <CategoriesDropDown className="my-3" />
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
    );
    }
}

export default LeftBlock;
