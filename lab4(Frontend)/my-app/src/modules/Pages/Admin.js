import React from 'react';
import {Button, Container} from "react-bootstrap";

const Admin = () => {
    return (
        <Container>
            <Button>Добавить Товар</Button>
            <Button>Добавить Категорию</Button>
            <Button>Добавить Поставщика</Button>
        </Container>
    );
};

export default Admin;