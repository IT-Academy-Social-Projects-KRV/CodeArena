import React from 'react';
import { Container, Card, CardGroup, Button, Form, Col, FloatingLabel } from 'react-bootstrap';


export default function RightBlock() {

    return (
        <>
            <Col className="ms-2">
                <Container className="m-2">
                    <CardGroup className="my-1" style={{ height: '33rem' }} >
                        <Card bg="light"  >
                            <Card.Body >
                                <Card.Text className="text-center m-3" > Description of your task </Card.Text>
                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '415px' }}
                                    />
                                </FloatingLabel>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <div className="d-grid gap-2" >
                        <Button style={{ width: 'auto' }} variant="success" > Test task </Button>
                    </div>
                </Container>
            </Col>
        </>
    )
}
