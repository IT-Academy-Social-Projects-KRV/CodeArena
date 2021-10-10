import React, { Component } from 'react';
import './header.css';
import Navigation from '../Header/Navigation';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom"
import MainContainer from '../pages/homePage/MainContainer';
import CreatePage from '../pages/createTaskPage/CreatePage';
import NewsPage from '../pages/newsPage/NewsPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import CreateCompetitionPage from '../pages/CreateCompetition/CreateCompetitionPage';
import CompetitionPage from '../pages/competitionPage/CompetitionPage';
import CreateVacancy from '../pages/createVacancyPage/CreateVacancy';
import VacanciesPage from '../pages/vacanciesPage/VacanciesPage';
import AchievementsPage from '../pages/achievementsPage/AchievementsPage';
import TableProfileSetting from '../pages/coderProfile/DataCard';
import TaskManagingPage from '../pages/tasksmanagingPage/TaskManagingPage';
import UsersTable from '../pages/userslistPage/UsersTable';
import ContactsPage from '../pages/contactsPage/contactsPage';
import SolvingTaskPage from '../pages/SolvingTaskPage/SolvingTaskPage';


export default class Auth_Header extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <section className="main_menu">
                        <div>
                            <Navbar collapseOnSelect expand="rg" className="grey" variant="dark">
                                <Navbar.Brand className="ms-3" >  </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="m-2">
                                            <Nav.Link href="/" >Home </Nav.Link>
                                            <Nav.Link href="profile" >Profile </Nav.Link>
                                            <Nav.Link href="/creating_task">Creating task</Nav.Link>
                                            <Nav.Link href="/create_competition">Create competition</Nav.Link>
                                            <Nav.Link href="/competitions">List of competitions</Nav.Link>
                                            <Nav.Link href="/jobs">Vacancies list</Nav.Link>
                                            <Nav.Link href="/creating_vacancy">Creating vacancy</Nav.Link>
                                            <Nav.Link href="/achievements">Achievements</Nav.Link>
                                            <Nav.Link href="/admin/tasks">Tasks</Nav.Link>
                                            <Nav.Link href="/users">List of users</Nav.Link>
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
                        <Route exact path="/create_competition" component={CreateCompetitionPage} />
                        <Route exact path="/competitions" component={CompetitionPage}/>
                        <Route exact path="/jobs" component={VacanciesPage}/>
                        <Route exact path="/creating_vacancy" component={CreateVacancy}/>
                        <Route exact path="/achievements" component={AchievementsPage}/>
                        <Route exact path="/profile" component={TableProfileSetting}/>
                        <Route exact path="/admin/tasks" component={TaskManagingPage}/>
                        <Route exact path="/users" component={UsersTable}/>
                        <Route exact path="/contacts" component={ContactsPage} />
                        <Route exact path="/solve_task/:task_id/:solution_id?" component={SolvingTaskPage}/>
                    </Switch>
                </Router>
            </>
        )
    }
}

