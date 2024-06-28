import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderPaquetes.css'; // Archivo de estilos para el header

const HeaderPaquetes = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('favoritos');
    navigate('/');
  };

  return (
    <header className="header-paquetes">
      <h1>Paquetes</h1>
      {userId ? (
        <button onClick={handleLogout} className="volver-btn">
          Cerrar Sesión
        </button>
      ) : (
        <button onClick={() => navigate('/login')} className="volver-btn">
          Iniciar Sesión
        </button>
      )}
      <button onClick={() => navigate(-1)} className="volver-btn">
        Volver
      </button>
    </header>
  );
};

export default HeaderPaquetes;
