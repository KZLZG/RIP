import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import Footer from "../Components/frame/Footer";
import Header from "../Components/frame/Header";
import NextBreadCrumbs from "../Components/frame/NextBreadCrumbs";
import {useSelector} from "react-redux";
import ButtonInCart from "../Components/cart/ButtonInCart";

/*const product =[
    {pk: 1, name: 'Масло Моторное машинное', fabricant: 1, description: 'Идеально для машин', in_stock: 15, category:1, price:"300.00", img:"https://rowe-russland.ru/images/cms/thumbs/3ef4676849371dcf2e5a6636440f8f726bf49c45/25114-0010-99_auto_395_png_5_100.png"}
]*/

const ProductPage = () => {
    const product = useSelector(state => state.product.currentProduct);
    return (
        <Container className='prop-page-container'>
            <Header/>
            <NextBreadCrumbs />
            <h2>{product.name}</h2>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={product.img} responsive/>
                </Col>
                <Col xs={6} md={4}>
                    <b>{product.price}</b>
                    <div><ButtonInCart model={product}/></div>
                    <p>{product.description}</p>
                    <p>Количество на складе: {product.in_stock}</p>
                </Col>
            </Row>
            <Footer/>
        </Container>
    );
};

export default ProductPage;