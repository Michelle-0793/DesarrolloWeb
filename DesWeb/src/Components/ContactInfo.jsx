import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm('service_9of4zxx', 'template_iwcqswu', form.current, 'ymYtdvW4jhBm2ACDK')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <h1>¡Hablemos sobre su próximo proyecto!</h1>
      <p>
        Estoy aquí para ayudarle a dar vida a sus ideas a través del diseño gráfico. <br />
        Completa el formulario a continuación o utiliza los medios de contacto directo para que podamos empezar a trabajar juntos.
      </p><br />

      <form ref={form} onSubmit={sendEmail}>
        <label>Nombre completo (obligatorio):</label><br />
        <input type="text" name="user_name" required /><br /><br />

        <label>Correo electrónico (obligatorio):</label><br />
        <input type="email" name="user_email" required /><br /><br />

        <label>Teléfono (opcional):</label><br />
        <textarea name="phone" placeholder="Detalles sobre lo que necesitas" required /><br /><br />

        <label>Tipo de proyecto:</label><br />
        <input type="text" name="project_type" placeholder="Ej: branding, diseño web, etc." /><br /><br />

        <label>Descripción del proyecto:</label><br />

        <textarea name="message" placeholder="Detalles sobre lo que necesitas" required /><br /><br />

        <label>Presupuesto estimado (opcional):</label><br />
        <input type="text" name="estimated_budget" /><br /><br />

        <label>Fecha de entrega deseada (opcional):</label><br />
        <input type="date" name="delivery_date" /><br /><br />

        <label>Comentarios adicionales:</label><br />
        <textarea name="additional_comments" /><br /><br />

        <input type="submit" value="Send" />
      </form><br /><br />
    </div>
  );
};

export default ContactUs;