import React from 'react';
import {Button, Container} from "@mui/material";

const Admin = () => {
    return (
        <Container maxWidth="sm">
            <Button>Добавить Товар</Button>
            <Button>Добавить Категорию</Button>
            <Button>Добавить Поставщика</Button>
        </Container>
    );
};

export default Admin;