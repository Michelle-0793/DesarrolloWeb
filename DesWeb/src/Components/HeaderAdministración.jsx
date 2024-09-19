//Cabecera para la mayoría de las páginas
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Img/Header_Logo.png'; // Ajusta la ruta según corresponda
import "../Styles/Header.css";

function HeaderAdministracion() { 
// Estado para manejar la visibilidad del menú en dispositivos móviles
const [menuAbierto, setMenuAbierto] = useState(false);
const navigate = useNavigate();
// Función para alternar la visibilidad del menú
const alternarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

function cerrarSesion() {
   localStorage.removeItem("Autenticado");
   navigate('/');
 };

const IniciarSesión = () => {
  navigate('/Login'); // Redirige a la página de login
};

    return (
      <header>
        <img src={Logo} alt="Logo" className="logo" />
        <nav className={`navbar ${menuAbierto ? "activo" : ""}`}>
        <button className="BtnCerrarSesion" onClick={cerrarSesion}>Cerrar Sesión</button><br /><br /><br /><br />
        </nav>
        {/* Ícono de menú hamburguesa */}
      <div className="icono-hamburguesa" onClick={alternarMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </header>
    );
  }
  
  export default HeaderAdministracion;
  