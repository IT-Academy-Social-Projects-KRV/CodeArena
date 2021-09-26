import React from "react";
import { Row, Col } from "react-bootstrap";

import ProfileInfo from "./ProfileInfo";
import ProfileTabs from "./ProfileTabs";

import "./profile.css";


function ProfilePage(props) {
    const { tabsNames, userInfo, children } = props;
    return (
        <Row className="grey pe-5 pt-5 pb-5">
            <Col className="col-3">
                <ProfileInfo userInfo={userInfo} />
            </Col>

            <Col className="col-9 h-5">
                <ProfileTabs tabsNames={tabsNames}>{children}</ProfileTabs>
            </Col>
        </Row>
    );
}
export default ProfilePage;
