import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import Badge from "./Badge";

class AchievementCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { card } = this.props
        return (
            <Card className="achievementCard">
                <Card.Body>
                    <div className="achievementCardTitle">
                        <div className="achievementIcon">
                            <Badge />
                        </div>
                        <Card.Title className="achievementTitle">
                            {card.name}
                        </Card.Title>
                    </div>
                    <div className="achievementDescription">
                        <Card.Text className="achievementDescriptionText">
                            {card.description}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}
export default AchievementCard;
