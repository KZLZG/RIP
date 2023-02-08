import React from 'react';
import Footer from "../Components/frame/Footer";
import Header from "../Components/frame/Header";
import CardsList from "../Components/products/CardsList";
import "./css/Shop.css";
import NextBreadCrumbs from "../Components/frame/NextBreadCrumbs";


export default function Shop() {

    return(
        <div className="container-fluid">
            <Header/>
            <NextBreadCrumbs />
            <CardsList/>
            <Footer/>
        </div>
    )
}