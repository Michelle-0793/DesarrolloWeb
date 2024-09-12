import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import ProtectedRoute from '../ProtectedRoute'; 

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<ProtectedRoute><Login /></ProtectedRoute>}/>
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </Router>
  );
};

export default Routing;