// Dashboard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonio from './Testimonio';
import DashboardHeader from '../Components/DashboardHeader/DashboeardHeader';

const Dashboard = () => {
  const navigate = useNavigate();

  // Función para manejar el cierre de sesión
  
  
  const handleLogout = () => {
   
    navigate('/');
  };

  return (
    <div>
    <div className="dashboard-container">
      <DashboardHeader title="Dashboard" onLogout={handleLogout} />
    </div>
      <Testimonio/>
    </div>
  );
};

export default Dashboard;
