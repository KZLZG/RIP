import React, {useState} from 'react';
import {FaShoppingCart} from "react-icons/fa";
import CartBox from "./CartBox";
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../utils/funcs";
import ItemsInCart from "./ItemsInCart";

//Блок для хедера, в котором: Картинка(кнопка) корзины и Строка стоимости товаров в корзине
const CartBlock = () => {

    let [cartOpen, setCartOpen] = useState(false);
    const models = useSelector(state => state.cart.cartItems);
    const totalPrice = calcTotalPrice(models);

    return (
        <div className="cart-block">
            <ItemsInCart quantity={models.length}/>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={cartOpen ? 'shop-cart-button active' : 'shop-cart-button'}/>
            {cartOpen && (
                <CartBox models={models}/>
            )}
            {totalPrice>0?
                <span className="total-price">В корзине: {totalPrice}руб.</span>
            : null}
        </div>
    );
};

export default CartBlock;