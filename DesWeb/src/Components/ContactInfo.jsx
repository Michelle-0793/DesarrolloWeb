import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const ContactInfo = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm('service_9of4zxx', 'template_iwcqswu', form.current, 'ymYtdvW4jhBm2ACDK')
      .then(
        () => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Cotización enviada con éxito",
            confirmButtonText: 'OK',
        });
          console.log('ENVIADO');
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