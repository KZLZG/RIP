import React, {useState} from 'react';
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import InputField from "./InputField";
import Bar from "./Bar";
import getProds from "./Requests";




function Shop(){

    const handleSearch = async () =>{
        const response = await getProds();
        console.log(response);
        return response;
    }
    const prods = handleSearch();
    return(
        <Container>
            <Row>
                <Col md={3}>
                    <Bar/>
                </Col>
                <Col md={9}>
                    <Row>
                        {prods.map(prod)}
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
            <Row xs={4} md={4} className="g-4">
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