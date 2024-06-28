import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TarjetaPaquetes.css';

const TarjetaPaquetes = ({ id, imagen, titulo, descripcion, onAgregarFavorito }) => {
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const handleAgregarFavoritoClick = () => {
    if (!userId) {
      const confirmMessage = 'Debes iniciar sesión para agregar a favoritos. ¿Quieres ir al inicio de sesión?';
      const userConfirmed = window.confirm(confirmMessage);

      if (userConfirmed) {
        navigate('/login');
      }
      return;
    }

    const nuevoFavorito = {
      id,
      titulo,
      descripcion,
    };

    onAgregarFavorito(nuevoFavorito);
    alert('Paquete agregado a favoritos correctamente.');
  };

  return (
    <div className="tarjeta-paquetes">
      <img src={imagen} alt={titulo} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <button onClick={handleAgregarFavoritoClick}>Agregar a favoritos</button>
      </div>
    </div>
  );
};

export default TarjetaPaquetes;