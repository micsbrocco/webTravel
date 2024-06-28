import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Tarjetas from './Components/Tarjetas/Tarjetas';
import Titulo from './Components/Titulo/Titulo';
import Sobre from './Components/Sobre/Sobre';
import Aprende from './Components/Aprende/Aprende';
import Contacto from './Components/Contacto/Contacto';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ChatComponent from './Components/InfinityIA/ChatComponent';
import Dashboard from './Dashboard/Dashboard';
import Hoteles from './Components/Hoteles/Hoteles';
import Destino from './Components/Destino/Destino';
import Paquetes from './Components/Paquetes/Paquetes';
import HomeContent from './HomeContent';

const Layout = ({ children }) => {
  const location = useLocation();
  const mainNavbarPaths = ['/', ];

  // Determina si debe mostrar el navbar principal o alternativo
  const showMainNavbar = mainNavbarPaths.includes(location.pathname) && !location.pathname.startsWith('/home');

  return (
    <>
      {showMainNavbar && <Navbar />}
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de sesión

  useEffect(() => {
    // Verificar el estado de sesión almacenado en localStorage
    const userLoggedIn = localStorage.getItem('user') === 'true';
    setIsLoggedIn(userLoggedIn);
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Rutas que no deben mostrar el Navbar */}
          <Route path="/home/*" element={<HomeContent />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hoteles" element={<><Hoteles /><Contacto /></>} />
          <Route path="/destino" element={<><Destino /><Contacto /></> }/> 
          <Route path="/paquetes" element={<><Paquetes /><Contacto /></>} />

          {/* Rutas que deben mostrar el Navbar */}
          <Route
            path="/"
            element={
              <>
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
                  <Titulo subtitulo='¡Planifica tu viaje con ayuda de InfinityIA!' titulo='Infinity IA🌠' />
                  <ChatComponent />
                  <Titulo subtitulo='Contactatanos' titulo='¡Comunicate con nosotros y empezá a planificar!' />
                  <Contacto />
                </div>
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
