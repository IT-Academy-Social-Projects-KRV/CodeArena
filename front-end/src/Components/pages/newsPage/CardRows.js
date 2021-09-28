import axios from "axios";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardNews from "./CardNews";

class CardRows extends Component {
    constructor() {
        super();
        this.state = {
            news: [],
        };
    }

    async componentDidMount() {
        try {
            const data = await axios.get("/api/news/");
            this.setState({ news: data.data });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { news } = this.state;
        return (
            <Container>
                <Row>
                    {news.map((card) => {
                        return (
                            <Col md={3}>
                                <CardNews card={card} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
}
export default CardRows;
