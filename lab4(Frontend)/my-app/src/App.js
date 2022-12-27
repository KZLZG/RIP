import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from './modules/StartPage';

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<StartPage/>} />
                </Routes>
        </Router>
    );
}

export default App;
