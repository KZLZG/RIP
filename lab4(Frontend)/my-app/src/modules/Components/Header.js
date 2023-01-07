import React, {useState} from "react";
import './css/header.css'
import Menu from "./Menu";
import {FaShoppingCart} from "react-icons/fa"
import {AppBar, Box, Button, IconButton, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Header() {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header className='Header'>
            <div>
                <span className='logo'>Avalon</span>
                <Menu/>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={cartOpen ? 'shop-cart-button active' : 'shop-cart-button'}/>
                {cartOpen && (
                    <div className='shop-cart'>
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>

    )
    /*return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                        AVALON
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )*/
}