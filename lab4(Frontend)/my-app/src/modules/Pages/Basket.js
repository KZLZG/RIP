import React from 'react';
import NextBreadCrumbs from "../Components/frame/NextBreadCrumbs";
import Header from "../Components/frame/Header";
import Footer from "../Components/frame/Footer";
import Order from "../Components/Order"

const Basket = () => {
    return (
        <div>
            <Header/>
            <NextBreadCrumbs />
            <Order/>
            <Footer/>
        </div>
    );
};

export default Basket;