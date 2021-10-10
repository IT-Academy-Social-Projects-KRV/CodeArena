import { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

// import CategoriesDropDown from '../../Common/CategoriesDropDown';
// import LanguagesDropDown from '../../Common/LanguagesDropDown';
// import LeftBlock from '../../Common/MainMenu';
import LanguagesDropDown from "../../Common/LanguagesDropDown";
import CategoriesDropDown from "../../Common/CategoriesDropDown";
import './s.css'

// export default function LeftColumn() {
export default class LeftColumn extends Component {
    render () {
        return (
            <Card className="text-center" bg='dark' text='light'>
                <Card.Body>
                    <Card.Title style={{marginBottom:'40px'}}> Choose task by parameters</Card.Title>
                    <Card.Text>
                        <Form>

                            <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                                {/* <Form.Label for='language-choosing'> Choose the language </Form.Label> */}
                                <LanguagesDropDown className='language-choosing' overrideOnSelect={this.props.handleSelect} isSingleSelect='false'/>
                            </Form.Group>
                            <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                                {/* <Form.Label for='category-choosing' > Choose categories </Form.Label> */}
                                <CategoriesDropDown className='category-choosing' overrideOnSelect={this.props.handleSelect} />
                            </Form.Group>


                            <Form.Group style={{margin: '10px', marginBottom: '30px', }}>
                                <Form.Label for='sort_by' > Sort by: </Form.Label>
                                <Form.Select className='sort_by' aria-label="Default select example" style={{backgroundColor: '#292929', color: 'white'}}
                                onChange={this.props.handleSortChange}> 
                                <option value="1">Title</option>
                                <option value="2">Popularity</option>
                                <option value="3">Newest</option>
                                <option value="4">Oldest</option>
                                <option value="5">Hardest</option>
                                <option value="6">Easiest</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group style={{margin: '10px', marginBottom: '30px', }}>
                                <Form.Label for='searching-by-name' style={{color: 'white'}}> Search a task by the name 
                                <Form.Control className='searching-by-name' placeholder='Enter the name of the task' 
                                style={{backgroundColor: '#292929', color: 'white'}} value={this.props.value} onChange={this.props.handleSearchChange}/>
                                </Form.Label>
                            </Form.Group>

                            {/* <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                                <Form.Label for='langs' > choose language: </Form.Label>
                                <Form.Select className='langs' aria-label="Default select example">
                                <option value="1" onClick={() => this.setState({chosen_langs: this.state.chosen_langs.push('Python')})}>Python</option>
                                <option value="2" onClick= { this.handleClick.bind(this, 'uiuiu')} >Ruby</option>
                                <option value="3">JavaScript</option>
                                </Form.Select>
                            </Form.Group> */}

                        </Form>
                    </Card.Text>
                    {/* <Button size="md" style={{ margin: '10px'}} variant="danger" onClick={this.attemptParams}>Attempt</Button> */}
                    {/* <Button size="md" style={{ margin: '10px'}} variant="danger" onClick={this.props.attemptParams} language={this.la_id}>Attempt</Button> */}
                </Card.Body>
            </Card>
        )

    }
    
}
