import React from 'react';
import Footer from '../pages/Footer/Footer';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import SideBar from '../pages/SideBar/SideBar';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}><SideBar></SideBar></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;