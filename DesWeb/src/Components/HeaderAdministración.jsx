//Cabecera para la mayoría de las páginas
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Img/Header_Logo.png'; // Ajusta la ruta según corresponda
import "../Styles/HeaderAdministración.css";

function HeaderAdministracion() { 
// Estado para manejar la visibilidad del menú en dispositivos móviles
const [menuAbierto, setMenuAbierto] = useState(false);
const navigate = useNavigate();
// Función para alternar la visibilidad del menú
const alternarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

const IrRegistro = () => {
  navigate('/Register');
}

function cerrarSesion() {
   localStorage.removeItem("Autenticado");
   navigate('/');
 };

    return (
      <header className='HeaderAdmi'>
        <img src={Logo} alt="Logo" className="logo" />
        <nav className={`NavbarAdmi ${menuAbierto ? "activo" : ""}`}>
        <div className='BotonesHeaderAdmi'>
        <button className="BtnCerrarSesionAdmi" onClick={cerrarSesion}>Cerrar Sesión</button><br /><br /><br /><br />
        <p className="NuevoAdministrador" onClick={IrRegistro}>
        → Crear administrador ←</p>
        </div>
        </nav>
        {/* Ícono de menú hamburguesa */}
      <div className="icono-hamburguesaAdmi " onClick={alternarMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </header>
    );
  }
  
  export default HeaderAdministracion;
  