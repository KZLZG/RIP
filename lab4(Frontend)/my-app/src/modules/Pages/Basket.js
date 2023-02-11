import React from 'react';
import NextBreadCrumbs from "../Components/frame/NextBreadCrumbs";
import Header from "../Components/frame/Header";
import Footer from "../Components/frame/Footer";
import {useSelector} from "react-redux";
import CartItem from "../Components/cart/CartItem";
import {calcTotalPrice} from "../../utils/funcs";
import {Container, Row} from "react-bootstrap";

const Basket = () => {
    const models = useSelector(state => state.cart.cartItems);

    return (
        <Container>
            <Header/>
            <NextBreadCrumbs />
            <div>
                {models.length < 1 ?
                <h3>Ваша корзина пуста</h3>
                :
                    <Row>
                <div className="order-page-left">
                    {models.map(model => <CartItem model={model}/>)}
                </div>
                <div className="order-page-right">
                    <span>{models.length} товаров на сумму {calcTotalPrice(models)} руб.</span>
                </div>
                    </Row>
                }
            </div>
            <Footer/>
        </Container>
    );
};

export default Basket;