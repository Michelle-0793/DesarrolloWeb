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

    const key = 'updatable';  // Clave para los mensajes actualizables

    // Muestra un mensaje de carga mientras se envía el correo
    messageApi.open({
      key,
      type: 'loading',
      content: 'Enviando cotización...',
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
            duration: 2,  // Duración del mensaje
          });
          console.log('ENVIADO');
        }
      );
  };

  return (
    <div className='ContenidoContacto'>
      {contextHolder} {/* Renderiza el contenedor para los mensajes */}
      <h1 className='Hablemos'>HABLEMOS DE SU PRÓXIMO PROYECTO<span className='punto'>.</span> </h1><br /><br />
      <p className='EstoyAqui'>¡Estoy aquí para ayudarle a dar vida 
        a sus ideas a través del diseño gráfico!</p>
      <p className='CompletaText'>Completa el formulario a continuación o utiliza los medios de <br /> 
        contacto directo para que podamos empezar a trabajar juntos.</p>
<br />

  <div className='divForm'>
  <form className='FormCotizacion' ref={form} onSubmit={sendEmail}>
  
  {/* Nombre completo */}
  <div className="input-container">
    <input className="InputCotizacion" type="text" name="Username" placeholder="Nombre Completo" required />
    <span className="asterisco-obligatorio">*</span>
  </div>
  
  {/* Correo electrónico */}
  <div className="input-container">
    <input className="InputCotizacion" type="email" name="UserEmail" placeholder="Correo electrónico" required />
    <span className="asterisco-obligatorio">*</span>
  </div>
  
  {/* Teléfono */}
  <input className="InputCotizacion" type="text" name="Phone" placeholder="Teléfono" />

  {/* Descripción del proyecto */}
  <div className="input-container">
    <textarea className="TextAreaCotizacion" name="DescripcionProyecto" placeholder="Descripción del proyecto" required></textarea>
    <span className="asteriscoDescripcion">*</span>
  </div>

  {/* Presupuesto estimado */}
  <input className="InputCotizacion" type="text" name="PrecioEstimado" placeholder="Presupuesto estimado" />

  {/* Fecha de entrega deseada */}
  <input className="InputCotizacion" type="date" name="FechaEntregaDeseada" />

  {/* Comentarios adicionales */}
  <textarea className="TextAreaCotizacion" name="ComentariosAdicionales" placeholder="Comentarios adicionales"></textarea>

  {/* Botón enviar */}
  <input className='BtnEnviar' type="submit" value="Enviar" />
</form><br /><br />

</div>
<div className='divMapa'>
      <MapContent/>
      </div>
</div>


    
  );
};

export default ContactInfo;