// Destino.jsx

import React, { useState } from 'react';
import './Destino.css'; // Estilos para la página de destino
import TarjetaDestino from './TarjetaDestino/TarjetaDestino'; // Importa la tarjeta individual de destino
import HeaderDestinos from './HeaderDestino'; // Importa el nuevo header
import destino1 from '../../assets/destino1.jpg'; // Ejemplo de imagen de destino
import destino2 from '../../assets/destino2.jpeg'; // Ejemplo de imagen de destino
import destino3 from '../../assets/cordoba.jpg';
import destino4 from '../../assets/smt.jpg';
import destino8 from '../../assets/tierradelfuego.png';
import destino5 from '../../assets/eeuu.jpg';
import destino6 from '../../assets/españa.jpg';
import destino7 from '../../assets/mexico.jpg';


const Destino = () => {
  const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem('favoritos')) || []);

  const handleAgregarFavorito = (nuevoFavorito) => {
    const nuevosFavoritos = [...favoritos, nuevoFavorito];
    setFavoritos(nuevosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  };

  return (
    <>
      <HeaderDestinos /> {/* Incluye el nuevo header */}
      <div className='tarjetas-destinos'>
  <TarjetaDestino
    id="1"
    imagen={destino1}
    titulo="Rio de Janeiro"
    descripcion="Famosa por sus playas espectaculares, como Copacabana e Ipanema, y su icónico Cristo Redentor mirando desde lo alto del Corcovado."
    onAgregarFavorito={handleAgregarFavorito}
  />
  <TarjetaDestino
    id="2"
    imagen={destino2}
    titulo="Buenos Aires"
    descripcion="La ciudad del tango, con su vibrante vida cultural, arquitectura europea, y sabrosa gastronomía que invita a explorar cada rincón de sus barrios."
    onAgregarFavorito={handleAgregarFavorito}
  />
  <TarjetaDestino
    id="3"
    imagen={destino3}
    titulo="Córdoba"
    descripcion="Rodeada de sierras, es un oasis cultural y natural, con su arquitectura colonial, encantadores patios, y una rica historia que se mezcla con la modernidad."
    onAgregarFavorito={handleAgregarFavorito}
  />
  <TarjetaDestino
    id="5"
    imagen={destino4}
    titulo="San Miguel de Tucumán"
    descripcion="Conocida como la 'Ciudad Histórica' por ser cuna de la independencia argentina, ofrece historia, cultura y belleza natural en sus alrededores."
    onAgregarFavorito={handleAgregarFavorito}
  />
  <TarjetaDestino
    id="6"
    imagen={destino5}
    titulo="Estados Unidos"
    descripcion="Desde los rascacielos de Nueva York hasta las playas de California y los parques nacionales del oeste, Estados Unidos es diverso y lleno de oportunidades para explorar."
    onAgregarFavorito={handleAgregarFavorito}
  />
  <TarjetaDestino
    id="7"
    imagen={destino8}
    titulo="Tierra del Fuego"
    descripcion="En el fin del mundo, ofrece paisajes de ensueño con glaciares, montañas nevadas y una fauna única que se funde con la historia de los primeros habitantes de la región."
    onAgregarFavorito={handleAgregarFavorito}
  />
  <TarjetaDestino
    id="8"
    imagen={destino6}
    titulo="España"
    descripcion="Desde la Alhambra de Granada hasta la Sagrada Familia de Barcelona, España es un país lleno de historia, arte y una cultura vibrante que cautiva a los visitantes."
    onAgregarFavorito={handleAgregarFavorito}
  />
  <TarjetaDestino
    id="4"
    imagen={destino7}
    titulo="México"
    descripcion="Con sus ruinas antiguas, playas paradisíacas, gastronomía única y una rica cultura que fusiona lo prehispánico con lo colonial, México ofrece una experiencia inolvidable."
    onAgregarFavorito={handleAgregarFavorito}
  />
</div>


      {/* Sección de Favoritos */}
      <div className="favoritos-section">
        <h2>Mis Destinos Favoritos</h2>
        {favoritos.length === 0 ? (
          <p>No tienes destinos guardados como favoritos.</p>
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

export default Destino;

