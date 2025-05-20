import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/Register';
import Login from './pages/login';
import Contact from './pages/Contact';
import Catalogue from "./pages/Catalogue";

import Cart from './pages/cart';
import './App.css';

const App = () => (
  <Router>
    <div className="container">
      <h1>Welcome to Our Site</h1>
      <nav>
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/register" className="nav-btn">Register</Link>
        <Link to="/login" className="nav-btn">Login</Link>
        <Link to="/contact" className="nav-btn">Contact</Link>
        <Link to="/catalogue" className="nav-btn">catalogue</Link>
        <Link to="/cart" className="nav-btn">cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  </Router>
);

export default App;