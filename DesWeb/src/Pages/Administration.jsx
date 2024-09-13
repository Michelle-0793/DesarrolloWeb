import React from 'react';
import { useNavigate } from 'react-router-dom';

function Administration() {
  const navigate = useNavigate();

    function cerrarSesion() {
       localStorage.removeItem("Autenticado");
       navigate('/');
     };

  return (
    <div>Administration

       <button className="BtnCerrarSesion" onClick={cerrarSesion}>Cerrar Sesión</button>


    </div>
  )
}

export default Administration