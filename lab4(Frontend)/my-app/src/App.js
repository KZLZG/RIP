import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {authRoutes, publicRoutes} from "./Routes";
import {Routes} from "react-router";
import Shop from "./modules/Pages/Shop";
import NextBreadCrumbs from "./modules/Components/NextBreadCrumbs"

//Компонент маршрутизации приложения

function App() {
    const isAuth = false;
    return (
        <>
            <Router>
                    <NextBreadCrumbs />
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
        </>
    );
};

export default App;
