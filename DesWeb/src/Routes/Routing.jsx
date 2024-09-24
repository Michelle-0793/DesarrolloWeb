import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ServiciosProductos from '../Pages/ServiciosProductos';
import Administration from "../Pages/Administration";
import ProtectedRoute from '../ProtectedRoute'; 

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ServiciosProductos" element={<ServiciosProductos />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />

        {/* Proteger la ruta de Administración */}
        <Route path="/Administration" element={
          <ProtectedRoute>
            <Administration />
          </ProtectedRoute>
        } />

        {/* Proteger la ruta de Registro, solo accesible si ha accedido a administración */}
        <Route path="/Register" element={
          <ProtectedRoute requiereAccesoRegistro={true}>
            <Register />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
};

export default Routing;
