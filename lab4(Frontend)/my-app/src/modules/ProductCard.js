import {Button, Card} from "react-bootstrap";
import React from "react";
import  "../jpgs/1.png"

const ProductCard = (data) => {
    return <Card className="card">
        <Card.Img className="cardImage" variant="top" src="../jpgs/1.png" height={100} width={100}  />
        <Card.Body>
            <div className="textStyle">
                <Card.Title>{data}</Card.Title>
            </div>
            <div  className="textStyle">
                <Card.Text>
                    {console.log(data)}
                    {data.price}
                </Card.Text>
            </div>
        </Card.Body>
    </Card>
}
export default ProductCard;