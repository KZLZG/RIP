import React from 'react';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {useLocation} from "react-router-dom";
import Header from "../Components/frame/Header";
import Footer from "../Components/frame/Footer";
import NextBreadCrumbs from "../Components/frame/NextBreadCrumbs";
import {Button, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router";

const Auth = () => {
    const isLogin = useLocation().pathname === LOGIN_ROUTE;
    const navigate = useNavigate();
    return (
        <Container className="justify-content-center">
            <Header/>
            <NextBreadCrumbs/>
            <Container>
                <Form>
                    <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="SuPeRPAssWoRd1337" />
                    </Form.Group>
                    <Row>
                        {isLogin ?
                        <div>
                            <Button>Войти</Button>
                            <Button onClick={() => navigate(REGISTRATION_ROUTE)}>
                                Зарегистрироваться
                            </Button>
                        </div>
                            :
                            <div>
                                <Button>Создать аккаунт</Button>
                                <Button onClick={() => navigate(LOGIN_ROUTE)}>
                                    Eсть аккаунт - войти"
                                </Button>
                            </div>
                        }
                    </Row>
                </Form>
            </Container>
            <Footer/>
        </Container>
    );
};

export default Auth;