import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HashRouter as Router } from "react-router-dom";
import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="./">
                        <img
                            id="logo"
                            alt=""
                            src="icon.png"
                            height="40"
                        />{' '}Scheduler</Navbar.Brand>
                </Navbar>
                <Container style={{marginTop: "70px"}} fluid>
                    <Row xs={1}>
                        <Col md={4} xl={3} xs={12} class="sidenav" >
                        </Col>
                        <Col md={8} xl={7} xs={12}>
                        </Col>
                    </Row>
                </Container>
            </Router>
        )
    }

}

export default App;
