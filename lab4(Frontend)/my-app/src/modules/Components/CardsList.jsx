import React, {useEffect, useState} from 'react';
import ProductCard from "./ProductCard";
import "./css/CardsList.css"
import {ListGroup} from "react-bootstrap";


const data = [
    {pk: 3, name: 'Антифриз', fabricant: 3, description: 'Лучший антифриз на рынке', in_stock: 20, category:2, price:"400.00", img:"https://rowe-russland.ru/images/cms/thumbs/3ef4676849371dcf2e5a6636440f8f726bf49c45/25067-0010-99_auto_395_png_5_100.png"},
    {pk: 2, name: 'Масло Лодочное', fabricant: 2, description: 'Идеально для лодок', in_stock: 4, category:1, price:"200.00", img:"https://rowe-russland.ru/images/cms/thumbs/3ef4676849371dcf2e5a6636440f8f726bf49c45/25114-0010-99_auto_395_png_5_100.png"},
    {pk: 1, name: 'Масло Моторное машинное', fabricant: 1, description: 'Идеально для машин', in_stock: 15, category:1, price:"300.00", img:"https://rowe-russland.ru/images/cms/thumbs/3ef4676849371dcf2e5a6636440f8f726bf49c45/25114-0010-99_auto_395_png_5_100.png"}
]
console.log("");
 function CardsList() {
     const [models, setModels] = useState([]);
     const [categories, setCategories] = useState([]);

     useEffect(() => {
         fetch('http://127.0.0.1:8000/rowe/')
             .then(response => response.json())

             .then(data => {
                 setModels(data);

             })
     }, [])
     useEffect(() => {
         fetch('http://127.0.0.1:8000/categories/')
             .then(response => response.json())

             .then(data => {
                 setCategories(data);

             })
     }, [])

    return (
        <div className='centerAllign'>
            <div className="bar-div">
                <div className="bar-text-move">
                    <ListGroup>
                        {categories.map((category) =>
                            <ListGroup.Item key={category.pk}>
                                <span className="bar-text">{category.name}</span>
                            </ListGroup.Item>)}
                    </ListGroup>
                </div>
            </div>
            <div className="cards">
            <div className="cards-wrapper">
                {models.map((model) =>
                    <ProductCard key={model.pk} model={model}/>)}
            </div>
            </div>
        </div>
    );
 }
export default CardsList;
