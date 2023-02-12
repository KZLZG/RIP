import React, {useEffect} from 'react';
import ProductCard from "./ProductCard";
import CategBar from "../frame/CategBar";
import {useDispatch, useSelector} from "react-redux";
import {setallProducts} from "../../../redux/allproducts/reducer";
import {Container} from "react-bootstrap";

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
     return (
         <div className='centerAllign'>
             <div className="bar-div">
                 <CategBar/>
             </div>
             <Container fluid={true} className="cards-container">
                 <div className="cards-wrapper">
                     {models.map(found =>
                         <ProductCard key={found.pk} model={found}/>)}
                 </div>
             </Container>
         </div>
    );
 }
export default CardsList;
