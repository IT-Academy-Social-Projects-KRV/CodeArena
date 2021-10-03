import React from "react";
import { Col, Row } from "react-bootstrap";


function StatsRow({size, name, nameWidth, number}) {
    return (
        <Row className={"h" + size}>
            <Col className={"d-flex flex-row-reverse col-" + nameWidth}>
                {name}:
            </Col>
            <Col>{number}</Col>
        </Row>
    );
}
export default StatsRow;
