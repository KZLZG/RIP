import React from "react";
import '../css/Header.css'
import CartBlock from "../cart/CartBlock";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../../utils/consts";
import {useNavigate} from "react-router";

export default function Header() {
    const navigate = useNavigate();
    return (
            <header
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <span className='logo'>Avalon</span>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-dark">Контакты</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Доставка</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">О нас</a></li>
                    <li><CartBlock/></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2" onClick={() => navigate(LOGIN_ROUTE)}>
                        Войти
                    </button>
                    <button type="button" className="btn btn-primary" onClick={() => navigate(REGISTRATION_ROUTE)}>
                        Зарегистрироваться
                    </button>
                </div>
            </header>
    )/*<header className='Header'>
            <div className="header-box">
                <span className='logo'>Avalon</span>

                <div className="Menu">
                    <ul className='nav'>
                        <li><Button onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button></li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>
        </header>*/
}