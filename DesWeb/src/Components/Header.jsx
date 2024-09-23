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
      <header className='HeaderPrincipal '>
        <img src={Logo} alt="Logo" className="logo" />
        <nav className={`NavbarPrincipal ${menuAbierto ? "activo" : ""}`}>
          <Link to="/" className="nav-linkPrincipal">INICIO</Link>
          <Link to="/About" className="nav-linkPrincipal">SOBRE MÍ</Link>
          <Link to="/ServiciosProductos" className="nav-linkPrincipal">SERVICIOS</Link>
          <Link to="/Contact" className="nav-linkPrincipal">CONTÁCTAME</Link>
          <button onClick={IniciarSesión} className="BtnIniciarSesion">Iniciar sesión</button>
        </nav>
        {/* Ícono de menú hamburguesa */}
      <div className="icono-hamburguesaPrincipal" onClick={alternarMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </header>
    );
  }
  
  export default Header;
  
