import { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

// import CategoriesDropDown from '../../Common/CategoriesDropDown';
// import LanguagesDropDown from '../../Common/LanguagesDropDown';
// import LeftBlock from '../../Common/MainMenu';
import LanguagesDropDown from "../../Common/LanguagesDropDown";
import CategoriesDropDown from "../../Common/CategoriesDropDown";
import './s.css'

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

                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
