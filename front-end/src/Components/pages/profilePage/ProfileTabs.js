import { Tab, Row, Nav, Image } from "react-bootstrap";

import SettingsIco from "./images/settingsIco.svg";


function ProfileTabs(props) {
    const navLinks = props.tabsNames;

    return (
        <Tab.Container defaultActiveKey="0">
            <Row>
                <Nav variant="pills" className="flex-row h4 nav-row p-0">
                    {navLinks.map((tabName, index) => (
                        <Nav.Item>
                            <Nav.Link eventKey={index} className="rounded-0">
                                {tabName}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                    <div className="flex-grow-1"></div>
                    <Nav.Item className="">
                        <Nav.Link eventKey="-1" className="rounded-0">
                            <Image src={SettingsIco} className="settings-pic" />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>

            <Row>
                <Tab.Content className="p-0">{props.children}</Tab.Content>
            </Row>
        </Tab.Container>
    );
}
export default ProfileTabs;
