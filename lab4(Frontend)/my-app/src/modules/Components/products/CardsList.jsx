import React, {useEffect} from 'react';
import ProductCard from "./ProductCard";
import CategBar from "../frame/CategBar";
import {useDispatch, useSelector} from "react-redux";
import {setallProducts} from "../../../redux/allproducts/reducer";

 function CardsList() {
     const dispatch = useDispatch();
     useEffect(() => {
         fetch('http://127.0.0.1:8000/rowe/')
             .then(response => response.json())

             .then(data => {
                 dispatch(setallProducts(data));
             })
     }, [])

     const models = useSelector(state => state.allProducts.allProducts);
     const currentCategories = useSelector(state => state.categories.currentCategories);
     //const currentModels = models.filter(model => model.category.);
     //console.log(currentCategories.values(), "aboba", currentModels);
     return (
        <div className='centerAllign'>
            <div className="bar-div">
                <CategBar/>
            </div>
            <div className="cards">
                <div className="cards-wrapper">
                    {models.map(found =>
                        <ProductCard key={found.pk} model={found}/>)}
                </div>
            </div>
        </div>
    );
 }
export default CardsList;
