import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      if (response.status === 200) {
        console.log('Login Response:', response.data);
        localStorage.setItem('userId', response.data.user._id);
        navigate('/home');
      }
    } catch (error) {
      if (error.response) {
        console.error('Error durante el inicio de sesión:', error.response.data.message || error.response.data);
        alert(error.response.data.message || 'Error durante el inicio de sesión');
      } else {
        console.error('Error durante el inicio de sesión:', error.message);
        alert(error.message || 'Error durante el inicio de sesión');
      }
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="login-wrapper">
      <h1 className="login-title">Infinity Travel🌠</h1>
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
        <button className="go-back-btn" onClick={handleRegister}>Registrarse</button>
        <button className="register-btn" onClick={handleGoBack}>Volver hacia atrás</button>
      </div>
    </div>
  );
};

export default Login;
