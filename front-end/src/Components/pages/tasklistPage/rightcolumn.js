import React, { Component } from 'react';
import { Card, ListGroup, Image} from 'react-bootstrap';
import axios from 'axios';
import ruby from './images/ruby.svg' ;
import cpp from './images/cpp.svg' ;
import py from './images/p2.svg' ;
import js from './images/js.svg' ;
import c_sharp from './images/c_sharp.svg' ;

export default class RightColumn extends Component {

    state = {allTasks:[]}

    constructor() {
        super();
        this.getTasks()
        }

    getTasks = async() => {
        try{
            let datas = await axios.get('/task/get_task/')
            this.setState({allTasks: datas.data})
        } catch(err) {console.log(err)}
    }
    
    render() {

        const {allTasks} = this.state

        let languagesDict = {
            "C++": cpp,
            'Python': py,
            'Ruby': ruby,
            'C#': c_sharp,
            'JavaScript': js
        }
        return (
            allTasks.map(card => {
                return (
                    <Card bg='dark' style={{marginBottom: '10px'}}>
                        <ListGroup horizontal variant="flush" fluid > 
                            <ListGroup.Item action href='#task'variant='dark' style={{ height: 60 }}>
                                {card.name}
                            </ListGroup.Item>
                        
                            <ListGroup.Item variant='dark' style={{ width: '10rem' }}>
                                <Image src={languagesDict[card.languages]} style={{width: '2rem', }}></Image>
                            </ListGroup.Item>   
                        </ListGroup>
                    </Card>
                )
            })
        )
    }
}

