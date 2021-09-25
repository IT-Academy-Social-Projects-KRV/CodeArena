import React, { Component } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import LanguagesDropDown from '../../Common/LanguagesDropDown'
import CategoryDropDown from '../../Common/CategoriesDropDown'

export default function LeftColumn() {
    return (
        <Card className="text-center" bg='dark' text='light'>
            <Card.Body>
                <Card.Text>
                    <Form>
                        <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                            <Form.Label for='language-choosing'> Choose the language </Form.Label>
                            <LanguagesDropDown className='language-choosing'/>
                        </Form.Group>
                        <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                            <Form.Label for='category-choosing' > Choose categories </Form.Label>
                            <CategoryDropDown className='category-choosing'/>
                        </Form.Group>
                        <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                            <Form.Label for='sort_by' > Sort by: </Form.Label>
                            <Form.Select className='sort_by' aria-label="Default select example">
                            <option value="1">Title</option>
                            <option value="2">Popularity</option>
                            <option value="3">Newest</option>
                            <option value="4">Oldest</option>
                            <option value="5">Hardest</option>
                            <option value="6">Easiest</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                            <Form.Label for='searching-by-name'> Search a task by the name </Form.Label>
                            <Form.Control className='searching-by-name' placeholder='Enter the name of the task' />
                        </Form.Group>
                    </Form>
                </Card.Text>
                <Button size="md" style={{ margin: '10px'}} variant="danger">Attempt</Button>
            </Card.Body>
        </Card>
    )
}
