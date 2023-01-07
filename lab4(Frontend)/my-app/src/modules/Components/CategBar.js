import React, {useEffect, useState} from 'react';
import {ListGroup} from "react-bootstrap";
import "./css/CardsList.css"

const CategBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/categories/')
            .then(response => response.json())

            .then(data => {
                setCategories(data);

            })
    }, [])
    return (
            <div className="bar-text-move">
                <ListGroup>
                    {categories.map((category) =>
                        <ListGroup.Item key={category.pk}>
                            <span className="bar-text">{category.name}</span>
                        </ListGroup.Item>)}
                </ListGroup>
            </div>
    );
};

export default CategBar;