import React from "react";
import { useEffect, useState } from 'react';
import GetUsers from "../services/GetUsers";
import { useNavigate } from "react-router-dom";
import { message } from 'antd'; 
import "../styles/FormLogin.css";



function FormLogin() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Users, setUsers] = useState([]);

  // Hook de mensajes de Ant Design
  const [messageApi, contextHolder] = message.useMessage(); 


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
  // Mostrar el mensaje de éxito de Ant Design
  messageApi.open({
    type: 'success',
    content: '¡Inicio de sesión exitoso!',
    className: 'custom-class',
    style: {
      marginTop: '5vh',
    },
  });

  // Guardar la autenticación en el localStorage
  localStorage.setItem("Autenticado", "true");

  // Redirigir a la página de administración después de un pequeño retraso
  setTimeout(() => {
    navigate("/Administration");
  }, 1500);
} else {
  messageApi.open({
    type: 'error',
    content: 'Acceso denegado',
    className: 'custom-class',
    style: {
      marginTop: '5vh',
    },
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
<div className="divLogin">
{contextHolder}
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