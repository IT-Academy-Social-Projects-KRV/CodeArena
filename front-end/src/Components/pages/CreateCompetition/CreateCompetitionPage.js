import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Row, Col, Button } from 'react-bootstrap'
import './createCompetitionPage.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CreateCompetitionPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  (function show_items () {
    window.onload = () => {
      document.querySelector(".competition_info_about").classList.add("show");
      document.querySelector(".competition_info_form").classList.add("show");
    }
  })()
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
        <Form>
          <Form.Group as={Col} controlId="formGridComprtition">
            <Form.Label>Competition</Form.Label>
            <Form.Control type="Competition" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control type="Company" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridStart">
            <Form.Label>Start</Form.Label>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridtime">
            <Form.Label>Time</Form.Label>
            <Form.Control type="Company" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridFinish">
            <Form.Label>Finish</Form.Label>
            <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" />
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





