// src/Components/Destino/HeaderDestinos.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderDestinoHome.css'; // Archivo de estilos para el header

const HeaderDestinoHome = () => {
  const navigate = useNavigate();

  return (
    <header className="header-destinos">
      <h1>Destinos</h1>
      <button onClick={() => navigate(-1)} className="volver-btn">
        Volver
      </button>
    </header>
  );
};

export default HeaderDestinoHome;
