//Componente para el formulario de registrarse
import React from "react";
import { useEffect, useState } from 'react';
import GetUsers from "../Services/GetUsers";
import PostUsers from "../Services/PostUsers";
import { useNavigate } from "react-router-dom";
import "../Styles/FormRegister.css"

//HOOK
function FormRegister() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  function  cargaUsuario(event) {

    setUsername(event.target.value);
  }
  const cargaEmail = (event) => {
    setEmail(event.target.value);
  };

  const cargaContra = (event) => {
    setPassword(event.target.value);
  };


  //ESTA FUNCION PUEDE CARGAR, HACER POST O BIEN REALIZAR VALIDACIONES
  const cargar = (event) => {
    event.preventDefault(); //Prevenir el comportamiento por defecto del formulario
    // Validar que todos los campos estén llenos
    if (!username || !email || !password) {
      return;
    }
    //setSaludo("Debes llenar todos los campos")-para que imprima el texto en el DOM

  //VALIDACIONES
  //Verificar si el usuario ya está registrado
  const UsuarioExistente = users.find(user => user.email === email);
  if (UsuarioExistente) {

  } else {
    PostUsers(username, email, password).then(() => { //el then se usa para manejar el resultado exitoso de una promesa.

        navigate("/");  //Redirigir al login tras el cierre de la alerta

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


    return(
      <div className="divForm">
        <form className="FormRegister">
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
          <input className="inputDatos" type="text" id="email" name="email" placeholder="Ingrese su email"
          value={email}
          onChange={cargaEmail}
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

        <button type="submit" className="btnRegistrarse" onClick={(cargar)}>Registrarse</button>

      </form>
      </div>
    )
}

export default FormRegister;