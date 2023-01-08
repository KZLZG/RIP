import React from 'react';
import "./css/CartItem.css"

const CartItem = (props) => {
    return (
            <div className="cart-item">
               <span>{props.model.name}</span>
                <div className="cart-item-price">
                    <span>{props.model.price} руб.</span>
                </div>
            </div>
    );
};

export default CartItem;