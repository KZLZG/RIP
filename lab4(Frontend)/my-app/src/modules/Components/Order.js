import React from 'react';
import CartItem from "./cart/CartItem";
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../utils/funcs";

const Order = () => {
    const models = useSelector(state => state.cart.cartItems);

    if(models.length <1){
        return <h1>Ваша корзина пуста</h1>
    }

    return (
        <div>
            <div className="order-page-left">
                {models.map(model => <CartItem model={model}/>)}
            </div>
            <div className="order-page-right">
                <span>{models.length} товаров на сумму {calcTotalPrice(models)} руб.</span>
            </div>
        </div>
    );
};

export default Order;