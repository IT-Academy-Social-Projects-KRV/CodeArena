import { Component } from 'react';
import { Card, ListGroup, Image} from 'react-bootstrap';

import axios from 'axios';

import cpp from './images/cpp.svg' ;
import c_sharp from './images/c_sharp.svg' ;
import js from './images/js.svg' ;
import py from './images/p2.svg' ;
import ruby from './images/ruby.svg' ;


export default class RightColumn extends Component {

    state = {allTasks:[]}

    getTasks = async() => {
        try{
            let datas = await axios.get('/task/get_task/')
            this.setState({allTasks: datas.data})
        } catch(err) {console.log(err)}
    }
    
    async componentDidMount() {
        await this.getTasks()
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

