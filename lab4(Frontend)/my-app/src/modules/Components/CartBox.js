import React from 'react';
import {calcTotalPrice} from "../../utils/funcs";
import {Button} from "@mui/material";
import {BASKET_ROUTE} from "../../utils/consts";

//Раскрывающееся поле Корзины с товарами в ней
const CartBox = (models) => {

    return (
        <div className='shop-cart'>
            <div className="shop-cart_games-list">
                <ul>
                    {
                        models.models.map(model =>
                            <li key={model.key}>{model.name}</li>)
                    }
                </ul>
            </div>
            {
                models.models.length >0 ?
                    <div>
                        <span>Итого: </span>
                        <span>{calcTotalPrice(models.models)}</span>
                    <Button type="primary" size="m" href={BASKET_ROUTE}>
                        Оформить заказ
                    </Button>
                    </div>
                    :<span>В корзине пусто:(</span>
            }
        </div>
    );
};

export default CartBox;