//Cabecera para la mayoría de las páginas
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Img/Header_Logo.png'; // Ajusta la ruta según corresponda
import "../Styles/Header.css";

function Header() { 
// Estado para manejar la visibilidad del menú en dispositivos móviles
const [menuAbierto, setMenuAbierto] = useState(false);
const navigate = useNavigate();

// Función para alternar la visibilidad del menú
const alternarMenu = () => {
  setMenuAbierto(!menuAbierto);
};

const IniciarSesión = () => {
  navigate('/Login'); // Redirige a la página de login
};

    return (
      <header>
        <img src={Logo} alt="Logo" className="logo" />
        <nav className={`navbar ${menuAbierto ? "activo" : ""}`}>
          <Link to="/" className="nav-link">INICIO</Link>
          <Link to="/About" className="nav-link">SOBRE MÍ</Link>
          
          <div className="dropdown">
            <Link to="/ServiciosProductos" className="nav-link">SERVICIOS</Link>
            <ul className="dropdown-menu">
              <li><Link to="/ServiciosProductos" className="dropdown-item">Servicio 1</Link></li>
              <li><Link to="/ServiciosProductos" className="dropdown-item">Servicio 2</Link></li>
            </ul>
          </div>
          
          <Link to="/Contact" className="nav-link">CONTÁCTAME</Link>
          <Link to="/Location" className="nav-link">UBICACIÓN</Link>
          <button onClick={IniciarSesión} className="BtnLogin">Iniciar sesión</button>
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
  
  export default Header;
  
