import React from 'react';
import { Container, Card, CardGroup, Button, Form, Col, FloatingLabel } from 'react-bootstrap';
import axios from "axios";

class Left_block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [],
            categories: [],
        };
    }

    async getLanguage() {
        // Geting list of language from API

        const response = await axios.get("/task/get_language/");
        return response.data;
    }

    async getCategory() {
        // Geting list of language from API

        const response = await axios.get("/task/get_category/");
        return response.data;
    }

    componentDidMount() {
        this.getLanguage().then(response => {
            this.setState({ languages: response });
        });
        this.getCategory().then(response => {
            this.setState({ categories: response });
        });
    }

    render(){
    const { languages, categories } = this.state
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
                                    <option selected disabled>
                                        Choose language
                                    </option>
                                    {languages.map(language => (
                                        <option value={language.name}>
                                            {language.name}
                                        </option>
                                    ))};
                                </Form.Select>
                                <Form.Select className="my-3" aria-label="Default select example">
                                    <option selected disabled>
                                        Choose category
                                    </option>
                                    {categories.map(category => (
                                        <option value={category.name}>
                                            {category.name}
                                        </option>
                                    ))};
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
    );
    }
}

export default Left_block;
