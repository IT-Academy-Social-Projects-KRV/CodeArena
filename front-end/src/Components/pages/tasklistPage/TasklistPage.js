import { Component } from "react"
import { Card, Col, Container, Row, ListGroup, Image, Button, Form } from "react-bootstrap"
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import axios from 'axios';
import React from "react";






export default class TasklistPage extends Component {
    constructor() {
        super();
        this.state = {
            allTasks:[],
            selectedTasks:[],
            languages: [],
            categories: [],
            order:'name',
            searchField: ''
        }

        this.attemptParams.bind(this)
        this.handleSearchChange.bind(this)
        // this.handleSortChange.bind(this)
        // this.attemptParams = this.attemptParams.bind(this);
        // this.handleSearchChange = this.handleSearchChange.bind(this);
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
        if (this.state.languages.length == 0) {
            return true
        } else {return (one_task.languages[0] == this.state.languages)}
    }

    filterCats = (one_task) => {
        if (this.state.categories.length == 0) {
            return true
        } else {return (this.state.categories.every(val => one_task.categories.includes(val)))}
    }
    
    searchFunc = (one_task) => {
        console.log(one_task.name.includes(this.state.searchField))
        if (this.state.searchField) {
            return one_task.name.includes(this.state.searchField)
        } else {return true}
    }

    // sortingFunc = (order = this.state.order) => {
    //     console.log('order', order)
    //     this.state.selectedTasks.sort((a,b) => (a.order > b.order) ? 1 : -1)
    // }


    // customFunc = (langs = this.state.languages[0], cats = this.state.categories, tasks = this.state.allTasks) => {

    //     console.log('langs: ', langs)
    //     console.log('cats:', cats)

    //     // if (typeof(langs) === 'undefined' && cats.length == 0) {
    //     //     return tasks
    //     // } else {
    //     //     if (typeof(langs) === 'undefined') {
    //     //         return tasks.filter(this.filterCats)
    //     //     }
    //     //     else {
    //     //         return tasks.filter(this.filterLangs).filter(this.filterCats)
    //     //     }
    //     // }

    //     return tasks.filter(this.filterLangs).filter(this.filterCats).filter(this.searchFunc).sort(this.sortingFunc)
    // }


    handleClcick = async() =>  {
        console.log(this.state)
        console.log('preparing for customFunc')
        this.setState({selectedTasks: this.state.allTasks.filter(this.filterLangs)
            .filter(this.filterCats).filter(this.searchFunc).sort(this.sortingFunc) })
        
        console.log('after customFunc')

        console.log(this.state)

        // await this.getTasks();

    }
    // handleSortChange = async (event) => {
    //     this.setState({order: event.target.value});
    //     console.log(this.state)
    // };


    handleSearchChange = async (event) => {
        await this.setState({searchField: event.target.value});
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
{/* 
                            <Card bg='dark'>
                            <Card.Body>

                            <Form.Group style={{margin: '10px', marginBottom: '30px', }}>
                            <Form.Label for='sort_by' style={{color:'white', textAlign: 'right'}}> Sort by: </Form.Label>
                                <Form.Select className='sort_by' aria-label="Default select example" style={{backgroundColor: '#292929', color: 'white'}}
                                onChange={this.handleSortChange}> 
                                <option selected value="name"  >Title</option>
                                <option value="created_at" >Date of creation</option>
                                <option value="3">Newest</option>
                                <option value="4"></option>
                                <option value="5">Hardest</option>
                                <option value="6">Easiest</option>
                                </Form.Select>
                            </Form.Group>
                            </Card.Body>

                            </Card> */}

                            <div className="d-grid gap-2">
                            <Button size="md"  onClick={this.handleClcick}>Attempt</Button>
                            </div>
                            </Col>
                        <Col>
                        <RightColumn selectedTasks={selectedTasks} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}