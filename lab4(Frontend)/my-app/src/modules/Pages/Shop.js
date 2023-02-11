import React from 'react';
import Footer from "../Components/frame/Footer";
import Header from "../Components/frame/Header";
import CardsList from "../Components/products/CardsList";
import "./css/Shop.css";
import NextBreadCrumbs from "../Components/frame/NextBreadCrumbs";
import {Container} from "react-bootstrap";


export default function Shop() {

    return(
        <Container fluid={true}>
            <Header/>
            <NextBreadCrumbs />
            <CardsList/>
            <Footer/>
        </Container>
    )
}