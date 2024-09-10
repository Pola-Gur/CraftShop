import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; // Создай компонент About
import Contacts from './components/Contacts'; // Создай компонент Contacts
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Убедись, что путь к CSS-файлу правильный

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </Router>
    );
};

export default App;
