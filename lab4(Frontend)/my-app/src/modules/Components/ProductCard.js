import {Button, Card, Col, Row} from "react-bootstrap";
import React from "react";
import "./css/ProductCard.css"

const ProductCard = (props) => {
    return(
            <div className="card">
                <img className="card-img-top" src={props.model.img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.model.name}</h5>
                    <p className="price">{props.model.price}</p>
                    <p className="card-text">
                        {props.model.description}
                    </p>
                    <p><button className="store">В Корзину</button></p>
                </div>
            </div>
    )/*
    return (
        <Card>
            <Card.Img variant="top" src={props.model.img} alt="Card image" style={{resizeMode: "cover", height: 150, width: 150}} />
            <Card.Body>
                <Card.Title>{props.model.name}</Card.Title>
                <Card.Subtitle>{props.model.price}</Card.Subtitle>
                <Card.Text>
                    {props.model.description}
                </Card.Text>
                <Button variant="primary">В Корзину</Button>
            </Card.Body>
        </Card>
    );*/
};
export default ProductCard;