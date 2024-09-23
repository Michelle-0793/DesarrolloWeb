//Componente para el formulario de registrarse
import React from "react";
import { useEffect, useState } from 'react';
import GetUsers from "../Services/GetUsers";
import PostUsers from "../Services/PostUsers";
import { useNavigate } from "react-router-dom";
import { message } from 'antd'; 
import "../Styles/FormRegister.css"

////////////////////////   HOOKS  //////////////////////////////////////////
function FormRegister() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  //Hook de mensajes de Ant Design
  const [messageApi, contextHolder] = message.useMessage(); 

  function  cargaUsuario(event) {

    setUsername(event.target.value);
  }
  const cargaEmail = (event) => {
    setEmail(event.target.value);
  };

  const cargaContra = (event) => {
    setPassword(event.target.value);
  };


 
  const cargar = (event) => {
    event.preventDefault(); //Prevenir el comportamiento por defecto del formulario

////////////////////////////// VALIDACIONES /////////////////////////////////////////
// 1.Validar que todos los campos estén llenos
  if (!username || !email || !password) {
    messageApi.open({
      type: 'error',
      content: 'Debe completar todos los campos',
      className: 'MensajeAlerta',
      style: {
        marginTop: '10vh',
      },
    });
    return; //Termina la ejecución de la función si hay campos vacíos
  }

  //2. Verificar si el usuario ya está registrado
  const UsuarioExistente = users.find(user => user.email === email || user.username === username);
  if (UsuarioExistente) {
    messageApi.open({
      type: 'error',
      content: 'El usuario ya está registrado',
      className: 'MensajeAlerta',
      style: {
        marginTop: '10vh',
      },
    });
  } else {
    PostUsers(username, email, password).then(() => {
      // Mostrar el mensaje de éxito de Ant Design
      messageApi.open({
        type: 'success',
        content: '¡Usuario registrado con éxito!',
        className: 'MensajeAlerta',
        style: {
          marginTop: '10vh',
        },
      });

      //Esperar un breve intervalo antes de redirigir
      setTimeout(() => {
        navigate("/Login");  //Redirigir al login tras el cierre del mensaje
      }, 2000);
    });
  }
};

///////////////////// USE EFFECT //////////////////////////////////////////
useEffect(() => {
    const fetchUsers = async () => {
      const data = await GetUsers();    
      setUsers(data);
    };
    fetchUsers();
  }, []);


    return(

      <div className="divRegister"> 
      
      {contextHolder} {/*Mostrar mensaje*/}

        <form className="FormRegister">
        <div className="DatosRegister">
        <input className="InputRegister" type="text" id="username"  name="username" placeholder="Usuario"
          value={username}
          onChange={cargaUsuario}
          required
        />
        <i className="fa-solid fa-user"></i>
        </div>

        <br /><br />
        <div className="DatosRegister">
          <input className="InputRegister"  type="text" id="email" name="email" placeholder="Ingrese su email"
          value={email}
          onChange={cargaEmail}
          required
        />
        <i className="fa-solid fa-user"></i>
        </div>
        <br /><br />

        <div className="DatosRegister">
          <input className="InputRegister"  type="password" id="contraseña" name="contraseña" placeholder="Contraseña"
          value={password}
          onChange={cargaContra}
          required
        />
        <i className="fa-solid fa-user"></i>
        </div>
        <br /><br />

        <button type="submit" className="btnRegistrarse" onClick={(cargar)}>Registrarse</button>

      </form>
      </div>
    )
}

export default FormRegister;