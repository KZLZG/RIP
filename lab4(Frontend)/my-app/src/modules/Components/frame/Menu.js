import React from "react";
import '../css/Menu.css'
import {LOGIN_ROUTE} from "../../../utils/consts";
import {Button} from "@mui/material";

export default function Menu(){
    return(
        <div className="Menu">
            <ul className='nav'>
                <li><Button href={LOGIN_ROUTE}>Войти</Button></li>
                <li>Контакты</li>
            </ul>
        </div>
    )
}