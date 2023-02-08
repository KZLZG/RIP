import React from "react";
import "../css/ProductCard.css"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {setCurrentProduct} from "../../../redux/product/reducer";
import ButtonInCart from "../cart/ButtonInCart";
import {Card} from "react-bootstrap";


const ProductCard = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function clickOnCard(){
        dispatch(setCurrentProduct(props.model));
        navigate('/product/' + props.model.pk)
    }
    return(
    <Card onClick={clickOnCard}>
        <Card.Img variant="top" src={props.model.img} />
        <Card.Body>
            <Card.Title>{props.model.name}</Card.Title>
            <Card.Text>{props.model.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <Card.Subtitle className="text-muted">{props.model.price}</Card.Subtitle>
            <ButtonInCart model={props.model}/>
        </Card.Footer>
    </Card>
    );
};
export default ProductCard;

/*
       <div className="card"  onClick={clickOnCard}>
           <img src={props.model.img} className="card-img-top"/>
           <div className="card-body">
               <h4 className="card-title">{props.model.name}</h4>
               <p className="card-text">{props.model.description}</p>
               <h5 className="card-title">{props.model.price}</h5>
               <ButtonInCart model={props.model}/>
           </div>
       </div>*/
