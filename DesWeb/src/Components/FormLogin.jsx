import React from "react";
import { useEffect, useState } from 'react';
import GetUsers from "../services/GetUsers";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/FormLogin.css";



function FormLogin() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Users, setUsers] = useState([]);


  function  cargaUsuario(event) {
    setUsername(event.target.value);
  };

  const cargaContra = (event) => {
    setPassword(event.target.value);
  };

  // Función para manejar el inicio de sesión
  const IniciarSesion = (event) => {
    event.preventDefault();

 // Verificar si el usuario y contraseña coinciden usuario del db.json
 const usuarioValido = Users.find((user) => user.username === username && user.password === password);

if (usuarioValido) {
  localStorage.setItem("Autenticado", "true");
  // Redirigir a la página de administración
  navigate("/Administration");

} else {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Acceso denegado"
  });
}
};

//USE EFFECT
useEffect(() => {
  const fetchUsers = async () => {
    const data = await GetUsers();    
    setUsers(data);
  };
  fetchUsers();
}, []);


  return (
<div className="wrapper">
        <form className="form">

        <div className="datosForm">
        <input className="inputDatos" type="text" id="username"  name="username" placeholder="Usuario"
        value={username}
        onChange={cargaUsuario}
        required
        />
        <i className="fa-solid fa-user"></i>
        </div>

        <br /><br />

        <div className="datosForm">
          <input className="inputDatos" type="password" id="contraseña" name="contraseña" placeholder="Contraseña"
          value={password}
          onChange={cargaContra}
          required
        />
        <i className="fa-solid fa-user"></i>
        </div>
        <br /><br />

        <button type="submit" className="btnIniciarSesion" onClick={(IniciarSesion)}>Iniciar Sesión</button>
      </form>

</div>
  );
}

export default FormLogin;