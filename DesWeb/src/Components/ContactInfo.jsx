import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'antd'; 
import "../Styles/ContactInfo.css";
import MapContent from "../Components/MapContent";

const ContactInfo = () => {
  const form = useRef();
  const [messageApi, contextHolder] = message.useMessage(); // Hook de Ant Design para mensajes

  const sendEmail = (event) => {
    event.preventDefault();


   ////////////VALIDAR CAMPOS VACÍOS CON EMAILJS/////////////////
   const username = form.current.Username.value.trim();
   const userEmail = form.current.UserEmail.value.trim();
   const phone = form.current.Phone.value.trim();
   const description = form.current.DescripcionProyecto.value.trim();
   
    if (!username || !userEmail || !description) {
      //Si hay campos vacíos, mostrar un mensaje de error
      messageApi.open({
        type: 'error',
        content: 'Debe completar todos los campos',
        className: 'MensajeAlerta',
        style: {
          marginTop: '10vh',
        },
      });
      return; // Termina la ejecución de la función si hay campos vacíos
    }

    const key = 'updatable';  // Clave para los mensajes actualizables

    // Muestra un mensaje de carga mientras se envía el correo
    messageApi.open({
      key,
      type: 'loading',
      content: 'Enviando cotización...',
      className: 'MensajeAlerta',
    });

    emailjs
      .sendForm('service_9of4zxx', 'template_iwcqswu', form.current, 'ymYtdvW4jhBm2ACDK')
      .then(
        () => {
          // Cambia el mensaje a éxito cuando el correo se envía
          messageApi.open({
            key,
            type: 'success',
            content: 'Cotización enviada con éxito',
            className: 'MensajeAlerta',
            duration: 2.5,  // Duración del mensaje
          });
          console.log('ENVIADO');

          //Limpia los inputs del formulario
          form.current.reset();
        }
      );
  };

  return (
  <div className='Cotizar'>
  {contextHolder} {/* Renderiza el contenedor para los mensajes */}
  <h1 className='Hablemos'>HABLEMOS DE SU PRÓXIMO PROYECTO<span className='punto'>.</span></h1><br /><br />
  <p className='EstoyAqui'>¡Estoy aquí para ayudarle a dar vida a sus ideas a través del diseño gráfico!</p>
  <p className='CompletaText'>Completa el formulario a continuación o utiliza los medios <br /> de contacto directo para que podamos empezar a trabajar.</p>
  <br /><br />

<div className='ContenidoContacto'>
  <div className='divForm'>
    <form className='FormCotizacion' ref={form} onSubmit={sendEmail}>
      {/* Nombre completo */}
      <div className="input-container">
        <input className="InputCotizacion" type="text" name="Username" placeholder="Nombre Completo" />
        <span className="AsteriscoContact">*</span>
      </div>
      
      {/* Correo electrónico */}
      <div className="input-container">
        <input className="InputCotizacion" type="email" name="UserEmail" placeholder="Correo electrónico"  />
        <span className="AsteriscoContact">*</span>
      </div>
      
      {/* Teléfono */}
      <input className="InputCotizacion" type="text" name="Phone" placeholder="Teléfono" /><br />
  
      {/* Descripción del proyecto */}
      <div className="input-container">
        <textarea className="TextAreaCotizacion" name="DescripcionProyecto" placeholder="Descripción del proyecto"></textarea>
        <span className="asteriscoDescripcion">*</span>
      </div>
  
      {/* Botón enviar */}
      <input className='BtnEnviar' type="submit" value="Enviar" />
    </form>
  </div>

  <div className='DivMapaContact'>
    <div className='DivContacto'>
      <h2 className='Contácteme'>¡Contácteme!</h2>
      <p className='DatosContact'>Teléfono:  <a href="https://wa.link/md72ld" target="_blank" rel="noopener noreferrer">
      (+506) 8393-1596</a></p>
      <p className='DatosContact'>Correo:  <a href="https://mail.google.com/mail/u/2/#inbox" 
      target="_blank" rel="noopener noreferrer">lopez.crear93@gmail.com</a></p>
      <p className='DatosContact'>Nosara, Nicoya, Guanacaste</p>
    </div>
    <div className='divMapa'>
      <MapContent />
    </div>
  </div>

  </div>
</div>




    
  );
};

export default ContactInfo;