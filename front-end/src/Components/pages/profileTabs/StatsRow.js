import React from "react";
import { Col, Row } from "react-bootstrap";


function StatsRow(props) {
    return (
        <Row className={"h" + props.size}>
            <Col className={"d-flex flex-row-reverse col-" + props.nameWidth}>
                {props.name}:
            </Col>
            <Col>{props.number}</Col>
        </Row>
    );
}
export default StatsRow;
