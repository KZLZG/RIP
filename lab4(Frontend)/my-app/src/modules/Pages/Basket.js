import React from 'react';
import NextBreadCrumbs from "../Components/NextBreadCrumbs";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Basket = () => {
    return (
        <div>
            <Header/>
            <NextBreadCrumbs />
            <div>
                Basket page
            </div>
            <Footer/>
        </div>
    );
};

export default Basket;