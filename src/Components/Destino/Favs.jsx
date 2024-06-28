// Favoritos.jsx

import React from 'react';

const Favoritos = () => {
  // Obtenemos los favoritos del localStorage
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  return (
    <div className="contenedor-favoritos">
      <h2>Mis Destinos Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>No tienes destinos guardados como favoritos.</p>
      ) : (
        <ul className="lista-favoritos">
          {favoritos.map((favorito, index) => (
            <li key={index}>
              <h3>{favorito.titulo}</h3>
              <p>{favorito.descripcion}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favoritos;
