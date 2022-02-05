import React from 'react';
import './App.scss';
import MainLayout from "./components/MainLayout";
import LoginPage from './pages/LoginPage'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <MainLayout>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Routes>
                </BrowserRouter>
            </MainLayout>
        </div>
    );
}

export default App;
