import React from 'react';
import "./css/ItemsInCart.css"

//Кружок количества товаров в корзине
const ItemsInCart = (quantity=0) => {
    return quantity>0 ?(
        <div className="items-in-cart">
            {quantity}
        </div>
    ) : null;

};

export default ItemsInCart;