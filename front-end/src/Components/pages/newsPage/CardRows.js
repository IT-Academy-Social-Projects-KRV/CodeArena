import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import CardNews from './CardNews'


class CardRows extends Component {
    constructor() {
        super();
        this.state = {
            news: [
                {
                    title: "The real victims of mass crypto-hacks that keep happening",
                    src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    title: "22222The real victims of mass crypto-hacks that keep happening",
                    src: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    title: "33333The real victims of mass crypto-hacks that keep happening",
                    src: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    title: "44444The real victims of mass crypto-hacks that keep happening",
                    src: "https://images.pexels.com/photos/929280/pexels-photo-929280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    title: "55555The real victims of mass crypto-hacks that keep happening",
                    src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    title: "66666The real victims of mass crypto-hacks that keep happening",
                    src: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    title: "77777The real victims of mass crypto-hacks that keep happening",
                    src: "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    title: "88888The real victims of mass crypto-hacks that keep happening",
                    src: "https://images.pexels.com/photos/33684/astronaut-spacewalk-iss-tools.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
            ]
        }
    }


    render() {
        const { news } = this.state
        return (
            <Container>
                <Row >
                    {news.map(card => {
                        return (
                            <Col md={3}>
                                <CardNews card={card} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        )
    }
}
export default CardRows;
