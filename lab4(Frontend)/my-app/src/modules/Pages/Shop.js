import React from 'react';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import CardsList from "../Components/CardsList";
import "./css/Shop.css";
import NextBreadCrumbs from "../Components/NextBreadCrumbs";
import {Box} from "@mui/material";


export default function Shop() {

    return(
        <Box>
            <Header/>
            <NextBreadCrumbs />
            <CardsList/>
            <Footer/>
        </Box>
    )
}