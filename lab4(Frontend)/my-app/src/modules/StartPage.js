import React from 'react';
import DownPage from "./DownPage";
import Header from "./Header";
import Shop from "./Shop";
import "./StartPage.css";


export default function StartPage() {

    return(
        <div>
            <Header/>
            <Shop/>
            <DownPage/>
        </div>
    )
}