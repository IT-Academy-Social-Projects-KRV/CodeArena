import { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

// import CategoriesDropDown from '../../Common/CategoriesDropDown';
// import LanguagesDropDown from '../../Common/LanguagesDropDown';
// import LeftBlock from '../../Common/MainMenu';
import LanguagesDropDown from "../../Common/LanguagesDropDown";
import CategoriesDropDown from "../../Common/CategoriesDropDown";


// export default function LeftColumn() {
export default class LeftColumn extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         chosen_langs:[],
    //         chosen_cats:[],
    //         sort_by:''
    //     };
    // }


    // state = {
    //     chosen_langs:[],
    //     chosen_cats:[],
    //     sort_by:''
    // }

    // componentDidMount() {
    //     this.state
    // }



    // handleClick = async(param) =>{
    //     console.log('ppp' + param)
    // }

    render () {


        return (
            <Card className="text-center" bg='dark' text='light'>
                <Card.Body>
                    <Card.Text>
                        <Form>

                            <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                                <Form.Label for='language-choosing'> Choose the language </Form.Label>
                                <LanguagesDropDown className='language-choosing' overrideOnSelect={this.props.handleSelect} isSingleSelect='false'
                                // id='la_id'
                                />
                            </Form.Group>
                            <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                                <Form.Label for='category-choosing' > Choose categories </Form.Label>
                                <CategoriesDropDown className='category-choosing' overrideOnSelect={this.props.handleSelect} />
                            </Form.Group>


                            <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                                <Form.Label for='sort_by' > Sort by: </Form.Label>
                                <Form.Select className='sort_by' aria-label="Default select example">
                                <option value="1">Title</option>
                                <option value="2">Popularity</option>
                                <option value="3">Newest</option>
                                <option value="4">Oldest</option>
                                <option value="5">Hardest</option>
                                <option value="6">Easiest</option>
                                </Form.Select>
                            </Form.Group>

                            {/* <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                                <Form.Label for='langs' > choose language: </Form.Label>
                                <Form.Select className='langs' aria-label="Default select example">
                                <option value="1" onClick={() => this.setState({chosen_langs: this.state.chosen_langs.push('Python')})}>Python</option>
                                <option value="2" onClick= { this.handleClick.bind(this, 'uiuiu')} >Ruby</option>
                                <option value="3">JavaScript</option>
                                </Form.Select>
                            </Form.Group> */}


                            <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                                <Form.Label for='searching-by-name'> Se arch a task by the name </Form.Label>
                                <Form.Control className='searching-by-name' placeholder='Enter the name of the task' />
                                {/* <input type="text" value={this.state.value} onChange={this.handleChange}> enter name </input>
                            </Form.Group>
    
                            <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
                                {/* <LeftBlock /> */}
                                {/* <LanguagesDropDown style={{margin:'10px', padding:'10px', background:'black'}} /> */}
                                {/* <CategoriesDropDown /> */}
    
                            </Form.Group>
                        </Form>
                    </Card.Text>
                    <Button size="md" style={{ margin: '10px'}} variant="danger" onClick={this.attemptParams}>Attempt</Button>
                    {/* <Button size="md" style={{ margin: '10px'}} variant="danger" onClick={this.props.attemptParams} language={this.la_id}>Attempt</Button> */}
                </Card.Body>
            </Card>
        )

    }
    
}


// export default class LeftColumn extends Component {
//     constructor(props) {
//         super(props);
//         this.handleChangeLangs.bind(this)
//         this.handleChangeCats.bind(this)
//         // this.handleChangeSearch.bind(this)

//         this.state = {
//             language_for_search: '',
//             categories_for_search: [],
//             // field_for_searching_by_name: '',
//         }

//     }

//     handleChangeLangs(event) {
//         this.setState({language_for_search: event.target.language_for_search})
//         console.log(`set ${event}`)
//     } 
//     handleChangeCats(event) {
//         this.setState({categories_for_search: event.target.categories_for_search})
//     } 
//     // handleChangeSearch(event) {
//     //     this.setState({language_for_search: event.target.language_for_search})
//     // } 

//     // async componentDidMount() {
//     //     await this.getTasks()
//     // }

//     render() {
//         return (
//             <Card className="text-center" bg='dark' text='light'>
//                 <Card.Body>
//                     <Card.Text>
//                         <Form>
//                             <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
//                                 <Form.Label for='language-choosing'> Choose the language </Form.Label>
//                                 <LanguagesDropDown className='language-choosing' onChange={this.handleChangeLangs}/>
//                             </Form.Group>
//                             <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
//                                 <Form.Label for='category-choosing' > Choose categories </Form.Label>
//                                 <CategoriesDropDown className='category-choosing' onChange={this.handleChangeCats}/>
//                             </Form.Group>
//                             <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
//                                 <Form.Label for='sort_by' > Sort by: </Form.Label>
//                                 <Form.Select className='sort_by' aria-label="Default select example">
//                                 {/* <option value="1">Title</option>
//                                 <option value="2">Popularity</option>
//                                 <option value="3">Newest</option>
//                                 <option value="4">Oldest</option>
//                                 <option value="5">Hardest</option>
//                                 <option value="6">Easiest</option> */}
//                                 <option value="6" onChangeLangs={'Python'}>Easiest</option>
//                                 <option value="6">Easiest</option>
//                                 <option value="6">Easiest</option>
//                                 </Form.Select>
//                             </Form.Group>
//                             <Form.Group style={{margin: '10px', marginBottom: '30px'}}>
//                                 <Form.Label for='searching-by-name'> Search a task by the name </Form.Label>
//                                 <Form.Control className='searching-by-name' placeholder='Enter the name of the task' />
//                             </Form.Group>
//                         </Form>
//                     </Card.Text>
//                     <Button size="md" style={{ margin: '10px'}} variant="danger">Attempt</Button>
//                 </Card.Body>
//             </Card>
//         )
//     }
// }
