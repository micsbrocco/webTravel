// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Tarjetas from './Components/Tarjetas/Tarjetas';
import Titulo from './Components/Titulo/Titulo';
import Sobre from './Components/Sobre/Sobre';
import Aprende from './Components/Aprende/Aprende';
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ChatComponent from './Components/InfinityIA/ChatComponent';
import Dashboard from './Dashboard/Dashboard';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register', '/dashboard']; // Añade rutas adicionales aquí si es necesario

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      {children}
      {!hideNavbarPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <div className="container">
              <div className='empeza'></div><br></br>
              <Titulo subtitulo='Nuestras Selecciones' titulo='Empezá tu aventura' />
              <Tarjetas />
              <div className='quienes'></div><br></br>
              <Sobre />
              <div className='aprende'></div><br></br>
              <Titulo subtitulo='Aprendé con Infinity' titulo='¿Como armar tu viaje perfecto?' />
              <Aprende />
              <div className='infinity'></div>
              <Titulo subtitulo='¡Planifica tu viaje con ayuda de InfinityIA!' titulo='Infinity   IA🌠' />
              <ChatComponent/>
              <Titulo subtitulo='Contactatanos' titulo='¡Comunicate con nosotros y empezá a planificar!' />
              <Contacto />
            </div>
          </>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
