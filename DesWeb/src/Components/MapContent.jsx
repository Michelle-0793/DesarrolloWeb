import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <div style={{ width: '500px', height: '296px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.4794480751552!2d-85.6419609259931!3d9.977196273428783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTgnMzcuOSJOIDg1wrAzOCcyMS44Ilc!5e0!3m2!1ses-419!2scr!4v1726256934479!5m2!1ses-419!2scr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
