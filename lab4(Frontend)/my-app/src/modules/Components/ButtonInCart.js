import React from 'react';
import {Button} from "@mui/material";
import {deleteCartItem, setCartItem} from "../../redux/cart/cart.reducer";
import {useDispatch, useSelector} from "react-redux";

const ButtonInCart = (props) => {
    const items = useSelector(state => state.cart.cartItems);
    const isItemInCart = items.some(item => item.pk === props.model.pk);
    const dispatch = useDispatch();
    function handleClick(e) {
        e.stopPropagation();
        if(isItemInCart){
            dispatch(deleteCartItem(props.model.pk))
        }else{
            dispatch(setCartItem(props.model));
        }
    }
    return (
        <Button size="small" type={isItemInCart ? "secondary" : "primary"}
                onClick={handleClick}
        >{isItemInCart ? 'Убрать из корзины' : 'В корзину'}
        </Button>
    );
};

export default ButtonInCart;