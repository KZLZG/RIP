import React from "react";
import './css/header.css'
import Menu from "./Menu";

export default function Header() {
    return (
        <div className="header-box">
        <header>
            <div>
                <span className='logo'>Avalon</span>
                <Menu/>
            </div>
            <div className='presentation'></div>
        </header>
        </div>
    )
}