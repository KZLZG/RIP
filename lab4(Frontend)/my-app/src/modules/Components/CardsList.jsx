import React, {useEffect, useState} from 'react';
import ProductCard from "./ProductCard";
import CategBar from "./CategBar";
import InputField from "./InputField";

 function CardsList() {
     const [models, setModels] = useState([]);
     const [searchValue, setSearchValue] = useState('');
     const [found, setMusic] = useState([])

     const handleSearch = async () => {
         await setMusic(models.filter(item => item.name === ""));
     }

     useEffect(() => {
         fetch('http://127.0.0.1:8000/rowe/')
             .then(response => response.json())

             .then(data => {
                 setModels(data);

             })
     }, [])

    return (
        <div className='centerAllign'>
            <div className="bar-div">
                <CategBar/>
            </div>
            <div className="cards">
                <div className="cards-wrapper">
                    {models.map((found) =>
                        <ProductCard key={found.pk} model={found}/>)}
                </div>
            </div>
        </div>
    );
 }
export default CardsList;
