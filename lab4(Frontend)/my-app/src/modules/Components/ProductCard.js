import React from "react";
import "./css/ProductCard.css"
import Typography from "@mui/material/Typography";
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton} from "@mui/material";
import {useDispatch} from "react-redux";
import {setCartItem} from "../../redux/cart/cart.reducer";


const ProductCard = (props) => {
    const dispatch = useDispatch();

    function handleClick(e) {
        e.stopPropagation();
        dispatch(setCartItem(props.model));
    }

    return(/*}
            <div className="card">
                <img className="card-img-top" src={props.model.img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.model.name}</h5>
                    <p className="price">{props.model.price}</p>
                    <p className="card-text">
                        {props.model.description}
                    </p>
                    <p><button className="store">В Корзину</button></p>
                </div>
            </div>
    )*/
        <Card sx={{ minWidth: 180 }}>
            <CardMedia
                component="img"
                sx={{ display: "flex", marginLeft: "auto",
                    marginRight: "auto", maxWidth: 150 }}
                height="300"
                image={props.model.img}
                alt="Товар"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.model.name}
                </Typography>
                <Typography sx={{ fontSize: 18 }} color="text.primary   " gutterBottom>
                    {props.model.price}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.model.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" type="primary" onClick={handleClick}>В корзину</Button>
            </CardActions>
        </Card>
    );
};
export default ProductCard;