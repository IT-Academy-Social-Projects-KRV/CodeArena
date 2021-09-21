import { Component } from "react"
import { Nav, Container, Card, ButtonGroup, Button } from "react-bootstrap";
import DataBody from "./SettingBody";
import TasksBlock from "./TasksBlock";



class TaskCard extends Component {
    constructor() {
        super();
        this.state = {
            achievements: [
                {
                    name: "Hello world Guru",
                    description: "Write 'hello world' in five different languages"
                },
                
            ],
            competition:[
                {
                    name: "Name of competition",
                    name_language: "Python",
                    level: "Middle",
                    time: "12h",
                    start_time: " 10:00",
                    author: "Name",
                    description: "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task. Programming involves tasks such as: analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms in a chosen programming language (commonly referred to as coding).[1][2] The source code of a program is written in one or more languages that are intelligible to programmers, rather than machine code.",
                    company_name: "Name of company",
                    
                }

            ]
        }
    }

    render() {
        const { achievements } = this.state
        const { competition } = this.state
        return (
            <>
                <div className="grey">
                <Nav>
                    <Container className="mt-2" >
                        <div className="blue">
                            <Card style={{ height: 'auto' }} border="primary">
                                <div className="blue" >
                                    <ButtonGroup style={{ height: '4rem' }} variant="outline-succes">
                                        <a href="/profile">
                                            <Button style={{ width: '14rem', height: '4rem' }} variant="outline-success" className="text-white" >
                                                Data</Button>
                                        </a>
                                        <a href="/solutions_coder_id">
                                            <Button style={{ width: '14rem', height: '4rem' }} variant="outline-success" className="text-white">
                                                Solutions</Button>
                                        </a>
                                        <div className="green">
                                            <Button style={{ width: '14rem', height: '4rem' }} variant="outline-success" className="text-white">
                                                My Tasks</Button>
                                        </div>
                                    </ButtonGroup>
                                </div>
                                <Card.Body border="primary" className="mt-2">
                                    
                                        
                                {achievements.map(card => <TasksBlock card={card} />)}
                                {/* {competition.map(card2 => <TasksBlock card2={card2} />)} */}
                                
                                </Card.Body>
                            </Card>
                        </div>

                    </Container>
                </Nav>
            </div>
            </>
        )
    }
}
export default TaskCard
