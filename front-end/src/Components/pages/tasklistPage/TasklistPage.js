import { Component } from "react"
import { Card, Col, Container, Row, ListGroup, Image} from "react-bootstrap"
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import axios from 'axios';
import React from "react";
import Button from "@restart/ui/esm/Button";
// import LanguagesDropDown from "../../Common/LanguagesDropDown"
import cpp from './images/cpp.svg' ;
import c_sharp from './images/c_sharp.svg' ;
import js from './images/js.svg' ;
import py from './images/p2.svg' ;
import ruby from './images/ruby.svg' ;





export default class TasklistPage extends Component {
    constructor() {
        super();
        this.state = {
            allTasks:[],
            selectedTasks:[],
            way: '/task/task/',
            languages: [],
            categories: []
        }

        this.attemptParams.bind(this)
        // this.attemptParams = this.attemptParams.bind(this);
    }




    // createtasks = async => {

    //     const selectedTasks = this.props
    //     let languagesDict = {
    //         "C++": cpp,
    //         'Python': py,
    //         'Ruby': ruby,
    //         'C#': c_sharp,
    //         'JavaScript': js
    //     }
    //     this.state.allTasks.map(card =>{
    //         return (
    //             <Card bg='dark' style={{marginBottom: '10px'}}>
    //                 {/* <Button onClick={this.setState({way: this.state.way+`?language=Python`})}>info</Button> */}
    //                 {/* <Button onClick={this.handleClick(`Python`)}>Python</Button>
    //                 <Button onClick={this.handleClick(`Ruby`)}>Ruby</Button>
    //                 <Button onClick={this.handleClick(`C#`)}>C#</Button> */}
    //                 {/* <Button onClick={this.handleClick.bind(this, `Ruby`)}>Ruby</Button>
    //                 <Button onClick={this.handleClick.bind(this, `Python`)}>Python</Button>
    //                 <Button onClick={this.props.handleClick.bind(this, `С#`)}>C#</Button> */}
    //                 {/* <Button onClick={this.setState({s: this.lan})}>info</Button> */}



    //                 <ListGroup horizontal  fluid >
    //                     <ListGroup.Item action href='#task'variant='dark' style={{ height: 60 }}>
    //                         {card.name}
    //                     </ListGroup.Item>

    //                     <ListGroup.Item variant='dark' style={{ width: '10rem' }}>
    //                         <Image src={languagesDict[card.language]} style={{width: '2rem', }}></Image>
    //                     </ListGroup.Item>
    //                 </ListGroup>
    //             </Card>
    //         )
    //     })
    // }


    handleSelect = (itemList, id) => {
        console.log('+')

        this.setState({
            [id]:itemList
        })
        console.log(this.state)

    }

    getTasks = async(path) => {
        try{
            let datas = await axios.get(path)
            this.setState({selectedTasks: this.state.allTasks})
        } catch(err) {console.log(err)}
    }

    attemptParams = async() => {
        console.log('--------');
    }


    filterLangs = (one_task) => {
        return (one_task.language == this.state.languages)
    }

    filterCats = (one_task) => {
        return this.state.categories.every(val => one_task.categories.includes(val))
    }

    customFunc = (langs = this.state.languages[0], cats = this.state.categories, tasks = this.state.allTasks) => {

        console.log('langs: ', langs)
        console.log('cats:', cats)

        if (typeof(langs) === 'undefined' && cats.length == 0) {
            return tasks
        } else {
            if (typeof(langs) === 'undefined') {
                return tasks.filter(this.filterCats)
            }
            else {
                return tasks.filter(this.filterLangs).filter(this.filterCats)
            }
        }
        
        // else {
        //     return tasks.filter(this.filterLangs).filter(this.filterCats)
        // }
    }


    handleClcick = async() =>  {
        console.log(this.state)

        // await this.getTasks(`/task/task/?language=${this.state.languages[0]}`) // added await

        // if (this.state.languages.length === 0) {
        //     // console.log('0000000000000000000000000000')
        //     await this.getTasks(`/task/task/`)
        // } else {
        //     await this.getTasks(`/task/task/?language=${this.state.languages[0]}`) // added await
        // }
        console.log('preparing for customFunc')

        this.setState({selectedTasks: this.customFunc()})
        // this.setState({selectedTasks: this.state.allTasks.filter(this.filterLangs)})
        console.log('after customFunc')

        console.log(this.state)

        // await this.getTasks();

    }




    async componentDidMount() {
        // await this.getTasks()
        let s = await axios.get('/task/task/?status=PB')
        this.setState({allTasks: s.data, selectedTasks: s.data})
        // console.log(this.state)
    }

    render () {

        const {selectedTasks} = this.state

        return (
            <div style={{'background':'#292929'}}>
                <Container style={{padding: '20px'}}>
                    <Row>
                        <Col md={3} > <LeftColumn handleSelect={this.handleSelect} />
                        <Button onClick={this.handleClcick} >TRY</Button>
                        </Col>
                        {/* <Col md={9}> <RightColumn allTasks={12}/> </Col> */}
                        {/* <Col><this.createtasks /></Col> */}
                        <Col>
                        <RightColumn selectedTasks={selectedTasks} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}