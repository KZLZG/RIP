import React from "react";
import './header.css'
import Menu from "./Menu";

export default function Header() {
    return (
        <header>
            <div>
                <span className='logo'>Avalon</span>
                <Menu/>
            </div>
            <div className='presentation'></div>
        </header>
    )
}