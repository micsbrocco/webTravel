import React from 'react';
import './TarjetaDestinoHome.css'; // Archivo de estilos para las tarjetas de destino

const TarjetaDestino = ({ imagen, titulo, descripcion }) => {
  return (
    <div className="tarjeta-destino">
      <img src={imagen} alt={titulo} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <button>Agregar a favoritos</button>
      </div>
    </div>
  );
};

export default TarjetaDestino;
