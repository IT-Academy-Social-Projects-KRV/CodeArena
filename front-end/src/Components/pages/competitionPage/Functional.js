import React from 'react';
import { Navbar } from 'react-bootstrap';

import LeftFunctional from './LeftFunctional';
import RightFunctional from './RightFunctional';

export default function Functional() {
    return (
            <Navbar collapseOnSelect expand="md" className="grey type" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <LeftFunctional />
                    <RightFunctional />
                </Navbar.Collapse>
            </Navbar>
    )
}
