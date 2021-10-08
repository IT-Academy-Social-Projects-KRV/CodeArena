import { Component } from 'react';
import { Card, ListGroup, Image, Button} from 'react-bootstrap';

import axios from 'axios';

import cpp from './images/cpp.svg' ;
import c_sharp from './images/c_sharp.svg' ;
import js from './images/js.svg' ;
import py from './images/p2.svg' ;
import ruby from './images/ruby.svg' ;


export default class RightColumn extends Component {
    constructor(props){
        super(props);
    }

    // state = this.props

    // getTasks = async() => {
    //     try{
    //         let datas = await axios.get(this.state.way)
    //         this.setState({allTasks: datas.data, s: datas.data})
    //         // console.log(this.state.allTasks === this.state.s)
    //     } catch(err) {console.log(err)}
    // }




    // async componentDidMount() {
    //     await this.getTasks()
    // }

  


    render() {
        // this.props.getTasks()
        

        const {selectedTasks} = this.props

        let languagesDict = {
            "C++": cpp,
            'Python': py,
            'Ruby': ruby,
            'C#': c_sharp,
            'JavaScript': js
        }

        return (

            selectedTasks.map(card => {
                return (
                    <Card bg='dark' style={{marginBottom: '10px'}}>
                        {/* <Button onClick={this.setState({way: this.state.way+`?language=Python`})}>info</Button> */}
                        {/* <Button onClick={this.handleClick(`Python`)}>Python</Button>
                        <Button onClick={this.handleClick(`Ruby`)}>Ruby</Button>
                        <Button onClick={this.handleClick(`C#`)}>C#</Button> */}
                        {/* <Button onClick={this.handleClick.bind(this, `Ruby`)}>Ruby</Button>
                        <Button onClick={this.handleClick.bind(this, `Python`)}>Python</Button>
                        <Button onClick={this.props.handleClick.bind(this, `С#`)}>C#</Button> */}
                        {/* <Button onClick={this.setState({s: this.lan})}>info</Button> */}



                        <ListGroup horizontal  fluid > 
                            <ListGroup.Item action href='#task'variant='dark' style={{ height: 60 }}>
                                {card.name}
                            </ListGroup.Item>
                        
                            <ListGroup.Item variant='dark' style={{ width: '10rem' }}>
                                <Image src={languagesDict[card.language]} style={{width: '2rem', }}></Image>
                            </ListGroup.Item>   
                        </ListGroup>
                    </Card>
                )
            })
        )
    }
}

