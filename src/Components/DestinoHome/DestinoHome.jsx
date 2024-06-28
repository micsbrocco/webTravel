import React from 'react';
import './DestinoHome.css'; // Estilos para la página de destino
import TarjetaDestino from './TarjetaDestino/TarjetaDestinoHome'; // Importa la tarjeta individual de destino
import HeaderDestinos from './HeaderDestinoHome'; // Importa el nuevo header
import destino1 from '../../assets/destino1.jpg'; // Ejemplo de imagen de destino
import destino2 from '../../assets/destino2.jpeg'; // Ejemplo de imagen de destino

const Destino = () => {
  return (
    <>
      <HeaderDestinos /> {/* Incluye el nuevo header */}
      <div className='tarjetas-destinos'>
        <TarjetaDestino
          imagen={destino1}
          titulo="Nombre del Destino 1"
          descripcion="Descripción corta del destino 1."
        />
        <TarjetaDestino
          imagen={destino2}
          titulo="Nombre del Destino 2"
          descripcion="Descripción corta del destino 2."
        />
        <TarjetaDestino
          imagen={destino2}
          titulo="Nombre del Destino 2"
          descripcion="Descripción corta del destino 2."
        />
        <TarjetaDestino
          imagen={destino2}
          titulo="Nombre del Destino 2"
          descripcion="Descripción corta del destino 2."
        />
        <TarjetaDestino
          imagen={destino2}
          titulo="Nombre del Destino 2"
          descripcion="Descripción corta del destino 2."
        />
        <TarjetaDestino
          imagen={destino2}
          titulo="Nombre del Destino 2"
          descripcion="Descripción corta del destino 2."
        />
        <TarjetaDestino
          imagen={destino2}
          titulo="Nombre del Destino 2"
          descripcion="Descripción corta del destino 2."
        />
        <TarjetaDestino
          imagen={destino2}
          titulo="Nombre del Destino 2"
          descripcion="Descripción corta del destino 2."
        />
        {/* Agrega más TarjetaDestino según necesites */}
      </div>
    </>
  );
};

export default Destino;
