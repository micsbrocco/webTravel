import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import DestinoHome from './Components/DestinoHome/DestinoHome';
import Paquetes from './Components/Paquetes/Paquetes';
import NavbarHome from './Components/Navbar/NavbarHome';
import HeroHome from './Components/Hero/HeroHome';

const HomeContent = () => (
    <>
    <HeroHome />
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
);

const App = () => (
  <>
    <NavbarHome />
    <div>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hoteles" element={<Hoteles />} />
        {<Route path="/home/destino" element={<DestinoHome />} />}
        <Route path="/paquetes" element={<Paquetes />} />
      </Routes>
    </div>
  </>
);

export default App;
