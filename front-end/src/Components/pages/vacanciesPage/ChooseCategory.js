import React, { Component } from 'react';
import { Card, Container, Row, CardGroup, Form } from 'react-bootstrap';

class ChooseCategory extends Component {
    render() {
        return (
            <Container style={{ width: '25rem' }} className="mt-4">
                <CardGroup>
                    <Row>
                        <Card className="mb-1">
                            <Card.Body >
                                <Card.Text className="text-center m-1" >
                                    <h3>Choose category</h3>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card bg="light"  >
                            <Card.Body >
                                <Form.Group className="mb-3" id="form1" >
                                    <Form.Check type="checkbox" label="C++" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="form2">
                                    <Form.Check type="checkbox" label="C" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="form3">
                                    <Form.Check type="checkbox" label="Java" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="form3">
                                    <Form.Check type="checkbox" label="JavaScript" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="form4">
                                    <Form.Check type="checkbox" label="Python" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="form5">
                                    <Form.Check type="checkbox" label="CSS" />
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Row>
                </CardGroup>
            </Container>
        )
    }
}

export default ChooseCategory
