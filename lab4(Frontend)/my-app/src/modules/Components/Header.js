import React, {useState} from "react";
import './css/Header.css'
import Menu from "./Menu";
import {FaShoppingCart} from "react-icons/fa"
import {AppBar, Box, Button, IconButton, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import CartBlock from "./CartBlock";

export default function Header() {
    return (
        <header className='Header'>
            <div className="header-box">
                <span className='logo'>Avalon</span>
                <CartBlock/>
                <Menu/>
            </div>
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