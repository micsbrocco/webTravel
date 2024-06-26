// Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Enviando solicitud de login con:', username, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error.message || error);
      alert(error.message || 'Error durante el inicio de sesión');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Redirige al usuario a la página de registro
  };

  const handleGoBack = () => {
    navigate(-1); // Vuelve atrás en la historia de navegación
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='iniciar-btn'>Iniciar Sesión</button>
      </form>
      <button className="btn" onClick={handleRegister}>Registrarse</button>
      <button className="register-btn" onClick={handleGoBack}>Volver hacia atrás</button>
    </div>
  );
};

export default Login;
