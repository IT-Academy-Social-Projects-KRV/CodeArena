import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './aboutpage.css';
import AboutSM from './AboutSM';

function AboutPage() {
    return (
        <section>
        <div className="about_title">Achieve code mastery through challenge with Code Arena!</div>
        <Carousel variant="dark">
            <Carousel.Item>
                <section className="about_page">
                    <div><strong>CodeArena is a web application for coders to increase their knowledge of the programming language
                        by solving tasks, which gives the opportunity to find their first job.</strong></div>

                    <div> This project is being developed by SoftServe trainees as part of Python and web development training course at IT Academy.
                        <br /><strong>The main goals of this project are to give opportunity for:</strong>
                        - coders to improve their knowledge of programming languages ​​by solving tasks, raise their rating, discuss tasks, add their own and find their first job;
                        - recruiters to post vacancies, create competitions and select the best coders for recruitment.
                    </div>
                </section>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
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
        <AboutSM />
        </section>
    )
}

export default AboutPage;
