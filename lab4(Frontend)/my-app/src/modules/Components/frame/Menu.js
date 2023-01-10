import React from "react";
import '../css/Menu.css'
import {LOGIN_ROUTE} from "../../../utils/consts";
import {Button} from "@mui/material";
import {useNavigate} from "react-router";

export default function Menu(){
    const navigate = useNavigate();
    return(
        <div className="Menu">
            <ul className='nav'>
                <li><Button onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button></li>
                <li>Контакты</li>
            </ul>
        </div>
    )
}