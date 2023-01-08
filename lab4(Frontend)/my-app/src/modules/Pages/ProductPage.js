import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NextBreadCrumbs from "../Components/NextBreadCrumbs";
import {Box, Container} from "@mui/material";
import {useSelector} from "react-redux";
import ButtonInCart from "../Components/ButtonInCart";

/*const product =[
    {pk: 1, name: 'Масло Моторное машинное', fabricant: 1, description: 'Идеально для машин', in_stock: 15, category:1, price:"300.00", img:"https://rowe-russland.ru/images/cms/thumbs/3ef4676849371dcf2e5a6636440f8f726bf49c45/25114-0010-99_auto_395_png_5_100.png"}
]*/

const ProductPage = () => {
    const product = useSelector(state => state.product.currentProduct);
    return (
        <Container className='prop-page-container'>
            <Header/>
            <NextBreadCrumbs />
            <Box md={6}>
                <Image src={product.img}/>
            </Box>
            <Box>
                <Row>
                    <h2>{product.name}</h2>
                    <ButtonInCart model={product}/>
                    <p>{product.description}</p>
                    <b>{product.price}</b>
                    <p>Количество на складе: {product.in_stock}</p>
                    <div className="add-to-busket" onClick={() => console.log("added")}/>

                </Row>
            </Box>
            <Footer/>
        </Container>
    );
};

export default ProductPage;