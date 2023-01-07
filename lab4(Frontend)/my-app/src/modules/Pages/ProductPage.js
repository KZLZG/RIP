import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NextBreadCrumbs from "../Components/NextBreadCrumbs";
import {Box, Container} from "@mui/material";

const prod =[
    {pk: 1, name: 'Масло Моторное машинное', fabricant: 1, description: 'Идеально для машин', in_stock: 15, category:1, price:"300.00", img:"https://rowe-russland.ru/images/cms/thumbs/3ef4676849371dcf2e5a6636440f8f726bf49c45/25114-0010-99_auto_395_png_5_100.png"}
]

const ProductPage = () => {
    return (
        <Container className='prop-page-container'>
            <Header/>
            <NextBreadCrumbs />
            <Box md={6}>
                <Image src={prod[0].img}/>
            </Box>
            <Box>
                <Row>
                    <h2>{prod[0].name}</h2>
                    <p>{prod[0].description}</p>
                    <b>{prod[0].price}</b>
                    <p>Количество на складе: {prod[0].in_stock}</p>
                    <div className="add-to-busket" onClick={() => console.log("added")}/>
                </Row>
            </Box>
            <Footer/>
        </Container>
    );
};

export default ProductPage;