import React from "react";
import { Tab, Col, Row, Container } from "react-bootstrap";

import StatsBlock from "./StatsBlock";
import StatsRow from "./StatsRow";


class StatisticsTab extends React.Component {
    render() {
        const { eventKey } = this.props;
        return (
            <Tab.Pane eventKey={eventKey} className="light-grey">
                <Container>
                    <Row className="gap-5">
                        <Col>
                            <StatsBlock>
                                <StatsRow
                                    size="1"
                                    name="Users registered"
                                    nameWidth="9"
                                    number="35432"
                                />
                                <StatsRow
                                    size="3"
                                    name="Coders"
                                    nameWidth="9"
                                    number="2424"
                                />
                                <StatsRow
                                    size="3"
                                    name="Reqruiters"
                                    nameWidth="9"
                                    number="24"
                                />
                                <StatsRow
                                    size="3"
                                    name="Moderators"
                                    nameWidth="9"
                                    number="2"
                                />
                            </StatsBlock>

                            <StatsBlock>
                                <StatsRow
                                    size="1"
                                    name="Vacancies created"
                                    nameWidth="9"
                                    number="15"
                                />
                            </StatsBlock>

                            <StatsBlock>
                                <StatsRow
                                    size="1"
                                    name="Competitions created"
                                    nameWidth="9"
                                    number="41"
                                />
                                <StatsRow
                                    size="3"
                                    name="Open"
                                    nameWidth="9"
                                    number="32"
                                />
                                <StatsRow
                                    size="3"
                                    name="Closed"
                                    nameWidth="9"
                                    number="2"
                                />
                                <StatsRow
                                    size="3"
                                    name="Participants"
                                    nameWidth="9"
                                    number="231"
                                />
                            </StatsBlock>
                        </Col>

                        <Col>
                            <StatsBlock>
                                <StatsRow
                                    size="1"
                                    name="Tasks created"
                                    nameWidth="7"
                                    number="135432"
                                />
                                <StatsRow
                                    size="2"
                                    name="Language"
                                    nameWidth="6"
                                    number=""
                                />
                                <StatsRow
                                    size="3"
                                    name="Python"
                                    nameWidth="7"
                                    number="1354"
                                />
                                <StatsRow
                                    size="3"
                                    name="JS"
                                    nameWidth="7"
                                    number="105"
                                />
                                <StatsRow
                                    size="2"
                                    name="Status"
                                    nameWidth="6"
                                    number=""
                                />
                                <StatsRow
                                    size="3"
                                    name="Published"
                                    nameWidth="7"
                                    number="1052"
                                />
                                <StatsRow
                                    size="3"
                                    name="Moderated"
                                    nameWidth="7"
                                    number="105"
                                />
                                <StatsRow
                                    size="3"
                                    name="Draft"
                                    nameWidth="7"
                                    number="4052"
                                />
                                <StatsRow
                                    size="2"
                                    name="Created by"
                                    nameWidth="6"
                                    number=""
                                />
                                <StatsRow
                                    size="3"
                                    name="Coders"
                                    nameWidth="7"
                                    number="405"
                                />
                                <StatsRow
                                    size="3"
                                    name="Reqruiters"
                                    nameWidth="7"
                                    number="421"
                                />
                                <StatsRow
                                    size="3"
                                    name="Moderators"
                                    nameWidth="7"
                                    number="4211"
                                />
                            </StatsBlock>
                        </Col>
                    </Row>
                </Container>
            </Tab.Pane>
        );
    }
}
export default StatisticsTab;
