import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiereAccesoRegistro }) => {
    const estaAutenticado = localStorage.getItem("Autenticado") === "true"; 
    const puedeAccederARegistro = localStorage.getItem("puedeAccederARegistro") === "true"; 

    // Si el usuario no está autenticado, redirige a la página de inicio
    if (!estaAutenticado) {
        return <Navigate to="/" />;
    }

    // Si la ruta requiere acceso de registro y el usuario no tiene acceso, redirige
    if (requiereAccesoRegistro && !puedeAccederARegistro) {
        return <Navigate to="/" />;
    }

    return children; // Si está autenticado y cumple con las condiciones, renderiza los hijos
};

export default ProtectedRoute;
