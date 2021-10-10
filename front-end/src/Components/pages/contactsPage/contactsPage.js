import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import AboutSM from '../aboutPage/AboutSM';
import '../aboutPage/aboutpage.css';



function ContactsPage() {
    return (
        <section>
        <div className="about_title">Achieve code mastery through challenge with Code Arena!</div>
        <Carousel variant="dark">
            <Carousel.Item>
                <section className="teamtest">
                    <h2>Our team</h2>
                    <div>
                        <ol>
                            <li><a href="/">Intern's Softserve - authors</a></li>
                            <li><a href="/">Viktoriia Zakharko - moderator</a></li>
                            <li><a href="/">Sofiia Tkachuck - moderator</a></li>
                            <li><a href="/">Oksana Lisovska - moderator</a></li>
                            <li><a href="/">Dmytro Baryshnuik - moderator</a></li>
                            <li><a href="/">Oleksandr Havron - moderator</a></li>
                            <li><a href="/">Dmytro Smetanin - moderator</a></li>
                            <li><a href="/">Maryna Kucher - moderator</a></li>
                            <li><a href="/">Maksym Kovalchuk - moderator</a></li>
                            <li><a href="/">Oleksandr Vozny - moderator</a></li>
                            <li><a href="/">Oleksandr Voitovych - moderator</a></li>
                        </ol>
                    </div>
                </section>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </section>
    )
}

export default ContactsPage;
