import React from "react";
import { Col, Row } from "react-bootstrap";


function StatsBlock(props) {
    console.log(props.nameWidth);
    return (
        <Row className="deep-grey my-4 py-3">
            <Col>
                {props.children}
            </Col>
        </Row>
    )
}
export default StatsBlock;