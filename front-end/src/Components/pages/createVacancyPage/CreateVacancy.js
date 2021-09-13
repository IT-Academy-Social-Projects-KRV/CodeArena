
import { Container, Card, Form, Nav, Button, Modal } from 'react-bootstrap';
import "./CreateVacancy.css"
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ModalBlock from './ModalBlock';
import { useState } from 'react';

function CreateVacancy() {
   
    return (
            <div className="grey">
                <Nav>
                    <Container className="mt-5 mb-3">
                        <Card >
                            <Card.Body className="color_block">
                                <Card.Text className="text-center m-3" >
                                    <h2>Create vacancy</h2>
                                </Card.Text>
                                <Form>
                                    <Step1 />
                                <Step2 />
                                <Step3 />
                            </Form>
                            <ModalBlock/>
                            
                        </Card.Body>
                    </Card>
                </Container>
                </Nav>
            </div>
    )
}

export default CreateVacancy