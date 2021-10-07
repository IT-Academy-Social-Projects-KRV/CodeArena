import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form'
import { Row, Col, Button } from 'react-bootstrap'
import './createCompetitionPage.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CreateCompetitionPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  const [formCompetition, setFormCompetition] = useState({
    name: "",
    start_time: "",
    finish_time: "", 
    description: ""
  });
  useEffect(() => {
    console.log(formCompetition)
  }, [formCompetition]);
  (function show_items () {
    window.onload = () => {
      document.querySelector(".competition_info_about").classList.add("show");
      document.querySelector(".competition_info_form").classList.add("show");
    }
  })()
  let sendForm = async () => {
    try {
      const data = await axios.post("/competition/create_competition/", {...formCompetition, start_time:startDate, finish_time:endDate});


    } catch (error) {
      console.error(error);
    }  
  }
  return (
    <section className="competition_info">
      <div><h2>Create your competition</h2></div>
      <div className="competition_info_inner" >
        <div className="competition_info_about" >
          <div>Create your own competition on our site!</div>
          <div> Give to beginer coders the opportunity to choose
             your own tasks, grow their reiting and get exlusive
             achivements.<br />
             Add all information about your competition
             in our form</div>
        </div>
        <div className="competition_info_form">
        <Form onSubmit={sendForm}>
          <Form.Group as={Col} controlId="formGridComprtition">
            <Form.Label>Competition</Form.Label>
            <Form.Control onChange={event => setFormCompetition({...formCompetition, name: event.target.value})} type="Competition" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridStart">
            <Form.Label>Start</Form.Label>
            <DatePicker selected={startDate} onChange={date => {setStartDate(date); setFormCompetition({...formCompetition, start_time: date.toLocaleDateString()})}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridFinish">
            <Form.Label>Finish</Form.Label>
            <DatePicker selected={endDate} onChange={date => {setEndDate(date); setFormCompetition({...formCompetition, finish_time: date.toLocaleDateString()})}}/>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={event => setFormCompetition({...formCompetition, description: event.target.value})} as="textarea" />
            </Form.Group>
          </Row>


          <Button variant="primary" type="start">
            Create competition
          </Button>
        </Form>
        </div>
      </div>
    </section>
  )
}

export default CreateCompetitionPage;
