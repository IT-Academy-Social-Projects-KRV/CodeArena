import { Component } from "react"
import { Nav, Container, Card, ButtonGroup, Button } from "react-bootstrap";

import SolutioBody from "./SolutionBody";


class SolutionCard extends Component {
    constructor() {
        super();
        this.state = {
            solutions: [
                {
                    name: "Name of task",
                    languages:"Python",
                    description: "Write 'hello world' in five different languages",
                    
                },
                {
                    name: "Return function",
                    languages:"C++",
                    description: "It was tra lal laal"
                    
                },
                {
                    name: "Write calculator",
                    languages:"C++",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                },
                {
                    name: "Achievement Title",
                    languages:"Python",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                }
            ]
        }
    }

    render() {
        const { solutions } = this.state
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
                                        <div className="green">
                                            <Button style={{ width: '14rem', height: '4rem' }} variant="outline-success" className="text-white">
                                                Solutions</Button>
                                        </div>
                                        <a href="/tasks_coder_id">
                                            <Button style={{ width: '14rem', height: '4rem' }} variant="outline-success" className="text-white">
                                                My Tasks</Button>
                                        </a>
                                    </ButtonGroup>
                                </div>
                                <Card.Body border="primary" className="grey2">
                                   {solutions.map(card => <SolutioBody card={card} />)}
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
export default SolutionCard
