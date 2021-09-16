import React, { Component } from 'react';
import Navigation from '../Header/Navigation';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom"
import MainContainer from '../pages/homePage/MainContainer';
import CreatePage from '../pages/createtaskPage/CreatePage';
import NewsPage from '../pages/newsPage/NewsPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import CompetitionPage from '../pages/competitionPage/CompetitionPage';
import CreateVacancy from '../pages/createVacancyPage/CreateVacancy';
import VacanciesPage from '../pages/vacanciesPage/VacanciesPage';
import AchievementsPage from '../pages/achievementsPage/AchievementsPage';


export default class Auth_Header extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <section className="top_menu">
                        <div>
                            <Navbar collapseOnSelect expand="rg" className="grey" variant="dark">
                                <Navbar.Brand className="ms-3" >  </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="m-2">
                                        <Nav.Link href="/" >Home </Nav.Link>
                                        <Nav.Link href="profile" >Profile </Nav.Link>
                                        <Nav.Link href="/competitions">List of competitions</Nav.Link>
                                        <Nav.Link href="/jobs">Vacancies list</Nav.Link>
                                        <Nav.Link href="/creating_task">Creating task</Nav.Link>
                                        <Nav.Link href="/creating_vacancy">Creating vacancy</Nav.Link>
                                        <Nav.Link href="/achievements">Achievements</Nav.Link>
                                    </Nav>
                                    <Nav.Link href="exit" className="ms-auto">
                                        <Button variant="danger" className="me-2" >sign out</Button >
                                    </Nav.Link>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </section>
                    <div className="mainheader">
                    <h3><b><nav className="main_navigation" font-size="2">
                        <a href="/">Code Arena</a>
                    </nav></b></h3>
                        <Navigation />
                    </div>
                </header>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainContainer} />
                        <Route exact path="/creating_task" component={CreatePage} />
                        <Route exact path="/news" component={NewsPage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/competitions" component={CompetitionPage}/>
                        <Route exact path="/jobs" component={VacanciesPage}/>
                        <Route exact path="/creating_vacancy" component={CreateVacancy}/>
                        <Route exact path="/achievements" component={AchievementsPage}/>
                    </Switch>
                </Router>
            </>
        )
    }
}

