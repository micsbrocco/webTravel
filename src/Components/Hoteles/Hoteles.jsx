import React, { useState } from 'react';
import './Hoteles.css'; // Estilos para la página de destino
import TarjetaDestino from './TarjetaHoteles/TarjetaHoteles'; // Importa la tarjeta individual de destino
import HeaderHoteles from './HeaderHoteles'; // Importa el nuevo header para hoteles
import hotel1 from '../../assets/hotelportvista.jpeg'; // Ejemplo de imagen de hotel
import hotel2 from '../../assets/hotelsheraton.jpg'; // Ejemplo de imagen de hotel
import hotel3 from '../../assets/hotel-francia.jpg'; // Ejemplo de imagen de hotel
import hotel4 from '../../assets/hoteladhara.jpg'; // Ejemplo de imagen de hotel
import hotel5 from '../../assets/hotelcatalinas.jpg'; // Ejemplo de imagen de hotel
import hotel6 from '../../assets/hotelgardenpark.jpg'; // Ejemplo de imagen de hotel
import hotel7 from '../../assets/hotelgardenplaza.jpg'; // Ejemplo de imagen de hotel
import hotel8 from '../../assets/hotelpina.jpeg'; // Ejemplo de imagen de hotel

const Hoteles = () => {
  const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem('favoritos')) || []);

  const handleAgregarFavorito = (nuevoFavorito) => {
    const nuevosFavoritos = [...favoritos, nuevoFavorito];
    setFavoritos(nuevosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  };

  return (
    <>
      <HeaderHoteles /> {/* Incluye el nuevo header para hoteles */}
      <div className='tarjetas-destinos'>
        <TarjetaDestino
          id="1"
          imagen={hotel1}
          titulo="Hotel Port Vista"
          descripcion="Disfruta de una vista espectacular al mar desde tu habitación en el corazón de la ciudad."
          onAgregarFavorito={handleAgregarFavorito}
        />
        <TarjetaDestino
          id="2"
          imagen={hotel2}
          titulo="Sheraton Buenos Aires Hotel"
          descripcion="Lujo y comodidad en el corazón de Buenos Aires, ideal para turistas y viajeros de negocios."
          onAgregarFavorito={handleAgregarFavorito}
        />
        <TarjetaDestino
          id="3"
          imagen={hotel3}
          titulo="Hotel Francia"
          descripcion="Encanto histórico en el centro de la ciudad, rodeado de arte y cultura en cada esquina."
          onAgregarFavorito={handleAgregarFavorito}
        />
        <TarjetaDestino
          id="4"
          imagen={hotel4}
          titulo="Hotel Adhara"
          descripcion="Elegancia y confort en una ubicación privilegiada, perfecto para explorar la ciudad y relajarse."
          onAgregarFavorito={handleAgregarFavorito}
        />
        <TarjetaDestino
          id="5"
          imagen={hotel5}
          titulo="Catalinas Park Hotel"
          descripcion="Tranquilidad y servicios de primera en un entorno natural único, ideal para escapadas en familia."
          onAgregarFavorito={handleAgregarFavorito}
        />
        <TarjetaDestino
          id="6"
          imagen={hotel6}
          titulo="Garden Park Hotel"
          descripcion="Un oasis de verdor y tranquilidad en el corazón de la ciudad, perfecto para quienes buscan descanso y naturaleza."
          onAgregarFavorito={handleAgregarFavorito}
        />
        <TarjetaDestino
          id="7"
          imagen={hotel7}
          titulo="Garden Plaza Hotel"
          descripcion="Moderno y sofisticado, con vistas panorámicas y servicios exclusivos para una estadía inolvidable."
          onAgregarFavorito={handleAgregarFavorito}
        />
        <TarjetaDestino
          id="8"
          imagen={hotel8}
          titulo="Hotel Pina"
          descripcion="Hospitalidad y confort a pasos del mar, ideal para disfrutar del sol y las actividades acuáticas."
          onAgregarFavorito={handleAgregarFavorito}
        />
      </div>

      {/* Sección de Favoritos */}
      <div className="favoritos-section">
        <h2>Mis Hoteles Favoritos</h2>
        {favoritos.length === 0 ? (
          <p>No tienes hoteles guardados como favoritos.</p>
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

export default Hoteles;
