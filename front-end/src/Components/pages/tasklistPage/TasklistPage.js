import { Component } from "react"
import { Card, Col, Container, Row, ListGroup, Image, Button, Form } from "react-bootstrap"
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import axios from 'axios';
import React from "react";
// import Button from "@restart/ui/esm/Button";
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
            // way: 'api/task/get_task/',
            languages: [],
            categories: [],
            order:'',
            searchField: ''
        }

        this.attemptParams.bind(this)
        this.handleSortChange.bind(this)
        // this.handleSearchChange.bind(this)
        // this.attemptParams = this.attemptParams.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        // this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }


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
        // console.log(one_task.languages)
        // return (one_task.languages[0] == this.state.languages)
        if (this.state.languages.length == 0) {
            return true
        } else {return (one_task.languages[0] == this.state.languages)}
    }

    filterCats = (one_task) => {
        // return this.state.categories.every(val => one_task.categories.includes(val))
        if (this.state.categories.length == 0) {
            return true
        } else {return (this.state.categories.every(val => one_task.categories.includes(val)))}
    }
    
    searchFunc = (one_task) => {
        console.log(one_task.name.includes(this.state.searchField))
        if (this.state.searchField) {
            return one_task.name.includes(this.state.searchField)
        } else {return true}
        // return one_task.includes(this.state.searchField)
    }

    sortingFunc = (parametr) => {
        this.state.selectedTasks.sort((a,b) => (a.name > b.name) ? 1 : -1)
    }


    customFunc = (langs = this.state.languages[0], cats = this.state.categories, tasks = this.state.allTasks) => {

        console.log('langs: ', langs)
        console.log('cats:', cats)

        // if (typeof(langs) === 'undefined' && cats.length == 0) {
        //     return tasks
        // } else {
        //     if (typeof(langs) === 'undefined') {
        //         return tasks.filter(this.filterCats)
        //     }
        //     else {
        //         return tasks.filter(this.filterLangs).filter(this.filterCats)
        //     }
        // }

        return tasks.filter(this.filterLangs).filter(this.filterCats).filter(this.searchFunc)
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

        // this.setState({selectedTasks: this.customFunc()})
        this.setState({selectedTasks: this.state.allTasks.filter(this.filterLangs).filter(this.filterCats).filter(this.searchFunc) })
        // this.setState({selectedTasks: this.state.allTasks.filter(this.filterLangs)})
        
        console.log('after customFunc')

        console.log(this.state)

        // await this.getTasks();

    }
    handleSortChange = async (event) => {
        this.setState({sorting: event.target.value});
        console.log(this.state)
    };


    handleSearchChange = async (event) => {
        await this.setState({searchField: event.target.value});
        // console.log(event.target.value)
        // console.log(this.state.searchField)
    }
    

    async componentDidMount() {
        let s = await axios.get('api/task/get_task/?status=PB')
        this.setState({allTasks: s.data, selectedTasks: s.data})
    }





    render () {

        const {selectedTasks} = this.state

        return (
            <div style={{'background':'#292929'}}>
                <Container style={{padding: '20px'}}>
                    <Row>
                        <Col md={3} > <LeftColumn handleSelect={this.handleSelect} backgroundColor/>
                        {/* <Button onClick={this.handleClcick} >TRY</Button> */}
                        {/* <Card bg='dark'>
                            <Card.Text> */}
                            <Card bg='dark'>
                                <Card.Body>
                            <Form.Group style={{margin: '10px', marginBottom: '30px', }}>
                                <Form.Label for='searching-by-name' style={{color: 'white'}}> Search a task by the name 
                                <Form.Control className='searching-by-name' placeholder='Enter the name of the task' 
                                style={{backgroundColor: '#292929', color: 'white'}} value={this.state.value} onChange={this.handleSearchChange}/>
                                </Form.Label>
                            </Form.Group>
                            </Card.Body>
                            </Card>

                            <div className="d-grid gap-2">
                            <Button size="md"  onClick={this.handleClcick}>Attempt</Button>
                            </div>

                            


                            {/* <form onSubmit={this.handleSearchSubmit}>
                                <label>
                                Name:
                                <input type="text" value={this.state.value} onChange={this.handleSearchChange} />
                                </label>
                                <input type="submit" value="Submit" />
                            </form> */}












{/* 
                            <Form.Group style={{margin: '10px', marginBottom: '30px', }}>
                                <Form.Label for='sort_by' > Sort by: </Form.Label>
                                <Form.Select className='sort_by' aria-label="Default select example" style={{backgroundColor: '#292929', color: 'white'}}
                                onChange={this.props.handleSortChange}> 
                                <option value="1" onChange={this.props.handleSortChange} >Title</option>
                                <option value="2">Popularity</option>
                                <option value="3">Newest</option>
                                <option value="4">Oldest</option>
                                <option value="5">Hardest</option>
                                <option value="6">Easiest</option>
                                </Form.Select>
                            </Form.Group> */}
{/* 

                            <form onSubmit={this.handleSearchSubmit}>
                                <label>
                                Pick your favorite flavor:
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                                </label>
                                <input type="submit" value="Submit" />
                            </form> */}
                            {/* </Card.Text>
                        </Card> */}
                        

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