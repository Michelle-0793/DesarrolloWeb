import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'antd'; 

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
    <div>
      {contextHolder} {/* Renderiza el contenedor para los mensajes */}
      <h1>¡Hablemos sobre su próximo proyecto!</h1>
      <p>
        Estoy aquí para ayudarle a dar vida a sus ideas a través del diseño gráfico. <br />
        Completa el formulario a continuación o utiliza los medios de contacto directo para que podamos empezar a trabajar juntos.
      </p><br />

      <form ref={form} onSubmit={sendEmail}>
        <label>Nombre completo (obligatorio):</label><br />
        <input type="text" name="Username" required /><br /><br />

        <label>Correo electrónico (obligatorio):</label><br />
        <input type="email" name="UserEmail" required /><br /><br />

        <label>Teléfono (opcional):</label><br />
        <input type='text' name="Phone" placeholder="Teléfono" required /><br /><br />

        <label>Descripción del proyecto:</label><br />
        <textarea name="DescripcionProyecto" placeholder="Detalles sobre lo que necesitas" required /><br /><br />

        <label>Presupuesto estimado (opcional):</label><br />
        <input type="text" name="PrecioEstimado" /><br /><br />

        <label>Fecha de entrega deseada (opcional):</label><br />
        <input type="date" name="FechaEntregaDeseada" /><br /><br />

        <label>Comentarios adicionales:</label><br />
        <textarea name="ComentariosAdicionales" /><br /><br />

        <input type="submit" value="Enviar" />
      </form><br /><br />
    </div>
  );
};

export default ContactInfo;