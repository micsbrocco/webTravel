// Register.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Enviando solicitud de registro con:', username, password, email);

      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error durante el registro:', errorData);
        throw new Error(errorData.message || 'Error during registration');
      }

      const data = await response.json();
      console.log('Usuario registrado exitosamente:', data);
      alert('Registro exitoso');
      navigate('/login'); // Redirige al login después del registro exitoso
    } catch (error) {
      console.error('Error durante el registro:', error.message || error);
      alert(error.message || 'Error during registration'); // Muestra un mensaje de error al usuario si es necesario
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Volver atrás en la historia de navegación (equivalente a "back" del navegador)
  };

  return (
    <div className="register-wrapper">
      <h1 className="register-title">Infinity Travel🌠</h1>
      <div className="register-container">
        <h2>Registro</h2>
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
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
        <button className="go-back-btn" onClick={handleGoBack}>Volver Atrás</button>
      </div>
    </div>
  );
};

export default Register;
