import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

const prod =[
    {pk: 1, name: 'Масло Моторное машинное', fabricant: 1, description: 'Идеально для машин', in_stock: 15, category:1, price:"300.00", img:"https://rowe-russland.ru/images/cms/thumbs/3ef4676849371dcf2e5a6636440f8f726bf49c45/25114-0010-99_auto_395_png_5_100.png"}
]

const ProductPage = () => {
    return (
        <Container>
            <Col md={6}>
                <Image src={prod[0].img}/>
            </Col>
            <Col md={6}>
                <Row>
                    <h2>{prod[0].name}</h2>
                </Row>
            </Col>
        </Container>
    );
};

export default ProductPage;