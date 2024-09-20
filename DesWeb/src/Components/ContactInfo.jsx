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
<MapContent/>
      <form className='FormCotizacion' ref={form} onSubmit={sendEmail}>
      <label>Nombre completo:<span class="asterisco-obligatorio">*</span></label><br />
      <input class="InputCotizacion" type="text" name="Username" required />

      <label>Correo electrónico:<span class="asterisco-obligatorio">*</span></label><br />
      <input class="InputCotizacion" type="email" name="UserEmail" required />

      <label>Teléfono:</label><br />
      <input class="InputCotizacion" type="text" name="Phone"/>

      <label>Descripción del proyecto:<span class="asterisco-obligatorio">*</span></label><br />
      <textarea class="TextAreaCotizacion" name="DescripcionProyecto" placeholder="Detalles sobre lo que necesitas" required></textarea>

      <label>Presupuesto estimado:</label><br />
      <input class="InputCotizacion" type="text" name="PrecioEstimado" />

      <label>Fecha de entrega deseada:</label><br />
      <input class="InputCotizacion" type="date" name="FechaEntregaDeseada" />

      <label>Comentarios adicionales:</label><br />
      <textarea class="TextAreaCotizacion" name="ComentariosAdicionales"></textarea>

      <input className='BtnEnviar' type="submit" value="Enviar" />
      </form><br /><br />
    </div>
  );
};

export default ContactInfo;