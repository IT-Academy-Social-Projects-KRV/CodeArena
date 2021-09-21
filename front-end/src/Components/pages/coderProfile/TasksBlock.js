
import { Component } from "react";
import { ButtonGroup, Card, Container, Button, Nav } from 'react-bootstrap';

export default class TasksBlock extends Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        const { card } = this.props
        const { card2 } = this.props
        return (
            <>
            
                
            <Card bg="light" className="mb-2"> 
            <h2 className="ms-2">Achievements</h2> 
                    <div className="ms-2"></div>
                    <div className="ms-2 text-center"></div>
                    <div className='text-end'>See all</div>
                    </Card>
                <Card bg="light" className="mt-2">
                    <h2 className="ms-2">Competitions</h2>
                    <div></div>
                </Card>
                <Card bg="light" className="mt-2">
                    <h2 className="ms-2">Vacancies</h2>
                    <div> </div>
                </Card>
            </>
        );
    }
}
