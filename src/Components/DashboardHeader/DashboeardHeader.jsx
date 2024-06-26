// DashboardHeader.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardHeader.css'

const DashboardHeader = ({ title, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="dashboard-header">
      <div className="header-content">
        <h2>{title}</h2>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </header>
  );
};

export default DashboardHeader;
