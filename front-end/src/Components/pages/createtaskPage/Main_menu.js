
import React from 'react';
import { Row } from 'react-bootstrap';
import Left_block from './Left_block';
import Right_block from './Right_block';

export default function Menu() {

    return (
        <>
            <Row className="m-3">
                <Left_block />
                <Right_block />
            </Row>
        </>
    )
}
