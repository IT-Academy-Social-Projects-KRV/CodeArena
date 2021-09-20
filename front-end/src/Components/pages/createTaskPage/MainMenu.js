import React from 'react';
import { Row } from 'react-bootstrap';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';

export default function MainMenu() {

    return (
        <>
            <Row className="m-3">
                <LeftBlock />
                <RightBlock />
            </Row>
        </>
    )
}
