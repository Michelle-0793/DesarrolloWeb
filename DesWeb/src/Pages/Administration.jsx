import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../Components/Header";
import AdministrationContent from '../Components/AdministrationContent';


function Administration() {
  const navigate = useNavigate();

    function cerrarSesion() {
       localStorage.removeItem("Autenticado");
       navigate('/');
     };

  return (
    <div>
      <Header />
      <AdministrationContent />
       <button className="BtnCerrarSesion" onClick={cerrarSesion}>Cerrar Sesión</button>


    </div>
  )
}

export default Administration