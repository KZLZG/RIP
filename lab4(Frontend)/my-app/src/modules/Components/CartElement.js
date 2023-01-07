import React from 'react';
import {calcTotalPrice} from "../../utils/funcs";
import {Button} from "@mui/material";

const CartElement = (models) => {
    console.log(models)
    return (
        <div className='shop-cart'>
            <div className="shop-cart_games-list">
                {
                    models.models.map(model => model.name)
                }
            </div>
            {
                models.models.length >0 ?
                    <div>
                        <span>Итого: </span>
                        <span>{calcTotalPrice(models.models)}</span>
                    <Button type="primary" size="m" >
                        Оформить заказ
                    </Button>
                    </div>
                    :null
            }
        </div>
    );
};

export default CartElement;