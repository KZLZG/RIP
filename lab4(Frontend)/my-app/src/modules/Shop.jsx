import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import InputField from "./InputField";
import Bar from "./Bar";
import ProductCard from "./ProductCard";

const data = [
    {pk: 3, name: 'Антифриз', fabricant: 3, description: 'Лучший антифриз на рынке', in_stock: 20, category:2, price:"400.00", img:"https://rowe-russland.ru/images/cms/thumbs/3ef4676849371dcf2e5a6636440f8f726bf49c45/25067-0010-99_auto_395_png_5_100.png"},
    {pk: 2, name: 'Масло Лодочное', fabricant: 2, description: 'Идеально для лодок', in_stock: 4, category:1, price:"200.00", img:"https://rowe-russland.ru/images/cms/thumbs/3ef4676849371dcf2e5a6636440f8f726bf49c45/25114-0010-99_auto_395_png_5_100.png"},
    {pk: 1, name: 'Масло Моторное машинное', fabricant: 1, description: 'Идеально для машин', in_stock: 15, category:1, price:"300.00", img:"https://rowe-russland.ru/images/cms/thumbs/3ef4676849371dcf2e5a6636440f8f726bf49c45/25114-0010-99_auto_395_png_5_100.png"}
]

 function Shop() {
     const [models, setModels] = useState([]);

     useEffect(() => {
         fetch('http://127.0.0.1:8000/rowe/')
             .then(response => response.json())

             .then(data => {
                 setModels(data);

             })
     }, [])
    return (
        <Container>
            <Row className={"mt-2"}>
                <Col md={3}>
                    <Bar/>
                </Col>
                <Col md={9}>
                    <Row xs={4} md={4} className="g-4">
                        {models.map(model =>
                            <ProductCard key={model.pk} name={model.name} fabricant={model.fabricant}
                                         description={model.description} in_stock={model.in_stock}
                                         category={model.category} price={model.price} img={model.img}
                            />
                        )}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default Shop;

/*
function CardsPage() {
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])


    const handleSearch = async () =>{
        await setLoading(true);
        let s =1;
        const results = await getItemByName(s);
       // console.log(results)
        await setItems(results.filter((item) => item.name.toLowerCase().includes("масло")));
        await setLoading(false);

{!items.length ? <h1>К сожалению, пока ничего не найдено :(</h1>:
            {items.map((item, index)=>{
                console.log(item)
                return(
                    <Col key={index}>
                    </Col>
                )
            })}
                <Row/>

    }

    return (
        <div className={`container ${loading && 'containerLoading'}`}>
            {loading && <div className="loadingBg"><Spinner animation="border"/></div>}
            <InputField loading={loading} onSubmit={handleSearch} buttonTitle="Искать"/>
            {!items.length ? <h1>К сожалению, пока ничего не найдено :(</h1>:

                {items.map((item, index)=>{
                    //console.log(item)
                    return(
                        <Col key={index}>
                            <ProductCard {...item}/>
                        </Col>
                    )
                })}
            </Row>
        }
        </div>
    );
}
*/