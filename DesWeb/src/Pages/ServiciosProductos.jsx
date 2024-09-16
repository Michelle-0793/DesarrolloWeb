import React from 'react';
import Header from "../Components/Header";
import ServiciosProductosContent from '../Components/ServiciosProductosContent'; // Importa el componente que muestra los productos a los clientes

function ServiciosProductos() {
  return (
    <div>
      <Header />
      <ServiciosProductosContent /> 
    </div>
  );
}

export default ServiciosProductos;
