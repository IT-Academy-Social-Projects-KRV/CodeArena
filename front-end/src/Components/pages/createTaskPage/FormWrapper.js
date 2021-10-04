import React from "react";

import { Card, Col } from "react-bootstrap";

function FormWrapper({ children, wrapperTitle }) {
    return (
        <Col className="p-0 h-100">
            <Card bg="light">
                <Card.Text className="text-center mt-4 mb-0 h5">
                    {wrapperTitle}
                </Card.Text>
                <Card.Body>{children}</Card.Body>
            </Card>
        </Col>
    );
}

export default FormWrapper;
