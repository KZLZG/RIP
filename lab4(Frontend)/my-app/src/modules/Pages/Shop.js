import React from 'react';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import CardsList from "../Components/CardsList";
import "./css/Shop.css";


export default function Shop() {

    return(
        <div>
            <Header/>
            <CardsList/>
            <Footer/>
        </div>
    )
}