import React, { useState } from 'react';
import './Paquetes.css'; // Estilos para la página de paquetes
import TarjetaPaquete from './TarjetaPaquetes/TarjetaPaquetes'; // Importa la tarjeta individual de paquete
import HeaderPaquetes from './HeaderPaquetes'; // Importa el nuevo header para paquetes
import paquete1 from '../../assets/europa.jpg'; // Ejemplo de imagen de paquete
import paquete2 from '../../assets/turquia.jpeg'; // Ejemplo de imagen de paquete
import paquete3 from '../../assets/tucuman.jpg'; // Ejemplo de imagen de paquete
import paquete4 from '../../assets/ruta40argentina.jpg'; // Ejemplo de imagen de paquete

const Paquetes = () => {
  const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem('favoritos')) || []);

  const handleAgregarFavorito = (nuevoFavorito) => {
    const nuevosFavoritos = [...favoritos, nuevoFavorito];
    setFavoritos(nuevosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  };

  return (
    <>
      <HeaderPaquetes /> {/* Incluye el nuevo header para paquetes */}
      <div className='tarjetas-paquetes'>
        <TarjetaPaquete
          id="1"
          imagen={paquete1}
          titulo="Paquete Europa "
          descripcion="Descubre lugares icónicos de Europa con nuestro paquete A. Incluye tours guiados por París, Roma y Londres, alojamiento en hoteles de lujo y transporte en tren de alta velocidad."
          onAgregarFavorito={handleAgregarFavorito}
        />
        <TarjetaPaquete
          id="2"
          imagen={paquete2}
          titulo="Paquete Aventura en Turquía"
          descripcion="Embárcate en una aventura única con nuestro paquete B en Turquía. Recorre paisajes espectaculares, desde Capadocia hasta la costa del Mediterráneo, con actividades como paseos en globo y alojamiento en cuevas tradicionales."
          onAgregarFavorito={handleAgregarFavorito}
        />
        <TarjetaPaquete
          id="3"
          imagen={paquete3}
          titulo="Paquete Tesoros de Tucumán"
          descripcion="Sumérgete en la historia y la naturaleza con nuestro paquete C en Tucumán. Visita sitios históricos como las Ruinas de Quilmes y disfruta de la hospitalidad local con alojamiento en estancias tradicionales y transporte en vehículos 4x4."
          onAgregarFavorito={handleAgregarFavorito}
        />
        <TarjetaPaquete
          id="4"
          imagen={paquete4}
          titulo="Paquete Ruta 40 Argentina"
          descripcion="Recorre la legendaria Ruta 40 con nuestro paquete D, explorando paisajes impresionantes desde la Patagonia hasta los Valles Calchaquíes. Disfruta de hospedajes boutique y transporte en vehículos privados para una experiencia inolvidable."
          onAgregarFavorito={handleAgregarFavorito}
        />
        
        {/* Agrega más TarjetaPaquete según necesites */}
      </div>

      {/* Sección de Favoritos */}
      <div className="favoritos-section">
        <h2>Mis Paquetes Favoritos</h2>
        {favoritos.length === 0 ? (
          <p>No tienes paquetes guardados como favoritos.</p>
        ) : (
          <ul className="favoritos-list">
            {favoritos.map((favorito, index) => (
              <li key={index} className="favoritos-item">
                <h3>{favorito.titulo}</h3>
                <p>{favorito.descripcion}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Paquetes;
