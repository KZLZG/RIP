import React from 'react';
import {ListGroup} from "react-bootstrap";
import "./css/CardsList.css"
import {useDispatch, useSelector} from "react-redux";
import {clearCurrentCategories, setCurrentCategories} from "../../redux/categories/reducer";

const CategBar = () => {
    const dispatch = useDispatch();
    /*
        useEffect(() => {
            fetch('http://127.0.0.1:8000/categories/')
                .then(response => response.json())

                .then(data => {
                    dispatch(setAllCategories(data));
                    dispatch(setCurrentCategories(data));
                })
        }, [dispatch]);
    */
    const categories = useSelector(state => state.categories.allCategories);
    return (
            <div className="bar-text-move">
                <ListGroup className="bar-text">
                    <span onClick={() => dispatch(clearCurrentCategories())}>Все товары</span>
                    {categories.map((category) =>
                        <ListGroup.Item key={category.pk}>
                            <span onClick={() => dispatch(setCurrentCategories(category))}>{category.name}</span>
                        </ListGroup.Item>)}
                </ListGroup>
            </div>
    );
};

export default CategBar;