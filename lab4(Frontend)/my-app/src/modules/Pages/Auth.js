import React from 'react';
import {Button, Card, Link, Container, FormControl, InputLabel, Input} from "@mui/material";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../consts";
import {useLocation} from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NextBreadCrumbs from "../Components/NextBreadCrumbs";
import {Row} from "react-bootstrap";

const Auth = () => {
    const isLogin = useLocation().pathname === LOGIN_ROUTE;
    return (
        <Container className="justify-content-center">
            <Header/>
            <NextBreadCrumbs/>
            <Container>
                {/*<Form>
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
                            <Link to={REGISTRATION_ROUTE}> Зарегистрироваться</Link>
                        </div>
                            :
                            <Button href={LOGIN_ROUTE}>
                                Eсть аккаунт - войти"
                            </Button>
                        }
                        <Button>
                            {isLogin ? "Войти" : "Зарегистрироваться"}
                        </Button>
                    </Row>
                </Form>*/}
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-helper">Логин</InputLabel>
                    <Input
                        id="component-helper"
                        defaultValue="admin"
                        aria-describedby="component-helper-text"
                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-helper">Пароль</InputLabel>
                    <Input
                        id="component-helper"
                        defaultValue="admin"
                        aria-describedby="component-helper-text"
                    />
                </FormControl>
                <Row>
                {isLogin ?
                    <div>
                        <Link href={REGISTRATION_ROUTE}> Зарегистрироваться</Link>
                    </div>
                    :
                    <Button href={LOGIN_ROUTE}>
                        Eсть аккаунт - войти"
                    </Button>
                }
                <Button>
                    {isLogin ? "Войти" : "Зарегистрироваться"}
                </Button>
                </Row>
            </Container>
            <Footer/>
        </Container>
    );
};

export default Auth;