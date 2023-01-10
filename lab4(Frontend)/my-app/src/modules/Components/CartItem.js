import React from 'react';
import "./css/CartItem.css"
import ButtonInCart from "./ButtonInCart";

const CartItem = (props) => {
    return (
            <div className="cart-item">
               <span>{props.model.name}</span>
                <div className="cart-item-price">
                    <span>{props.model.price} руб.</span>
                </div>
                <ButtonInCart model={props.model}/>
            </div>
    );
};

export default CartItem;