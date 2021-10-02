import React from "react";
import { Col, Row } from "react-bootstrap";


function StatsBlock({children}) {
    return (
        <Row className="deep-grey my-4 py-3">
            <Col>
                {children}
            </Col>
        </Row>
    )
}
export default StatsBlock;
