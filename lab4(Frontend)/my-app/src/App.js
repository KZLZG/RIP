import React, {useCallback, useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {authRoutes, publicRoutes} from "./Routes";
import {Routes} from "react-router";
import Shop from "./modules/Pages/Shop";
import {useDispatch} from "react-redux";
import {setallProducts} from "./redux/allproducts/reducer";
import {setAllCategories, setCurrentCategories} from "./redux/categories/reducer";

//Компонент маршрутизации приложения

function App() {
    const dispatch = useDispatch();
    const isAuth = true;
    /*
        const GetProds = useCallback(() => {
            fetch('http://127.0.0.1:8000/rowe/')
                .then(response => response.json())
                .then(data => {
                    //console.log(data);
                    dispatch(setallProducts(data));
            })
        }, [dispatch])
        const GetCategs = useCallback(() => {
            fetch('http://127.0.0.1:8000/categories/')
                .then(response => response.json())
                .then(data => {
                    //console.log(data);
                    dispatch(setAllCategories(data));
                    dispatch(setCurrentCategories(data));
                })
        }, [dispatch]);

        useEffect(() => {
            GetProds();
            GetCategs();
        }, []);*/
    return (
            <Router>
                <Routes>
                        <Route index element={<Shop />}/>
                        {isAuth && authRoutes.map(({path, Element})=>
                            <Route key={path} path={path} element={Element} exact/>
                        )}
                        {publicRoutes.map(({path, Element})=>
                            <Route key={path} path={path} element={Element} exact/>
                        )}
                </Routes>
            </Router>
    );
};

export default App;
