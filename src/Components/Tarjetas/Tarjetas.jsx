import React from 'react';
import { Link } from 'react-router-dom';
import './Tarjetas.css';
import destino from '../../assets/destinos.jpg';
import destinosIcon from '../../assets/destinos-icon.png';
import paquete from '../../assets/paquete.png';
import paquetesIcon from '../../assets/paquete-icon.png';
import hotel from '../../assets/hoteles.jpg';
import hotelesIcon from '../../assets/hotel-icon.png';

const Tarjetas = ({ isLoggedIn }) => {
  // Define las rutas según el estado de sesión (isLoggedIn o localStorage)
  const destinoPath = isLoggedIn ? "/home/destino" : "/destino";
  const paquetesPath = isLoggedIn ? "/home/paquetes" : "/paquetes";
  const hotelesPath = isLoggedIn ? "/home/hoteles" : "/hoteles";

  return (
    <div className='tarjetas'>
      <div className="tarjeta">
        <Link to={destinoPath}>
          <img src={destino} alt="Destinos" />
          <div className="descripcion">
            <img src={destinosIcon} alt="Icono de destinos" />
            <p>Destinos</p>
          </div>
        </Link>
      </div>
      <div className="tarjeta">
        <Link to={hotelesPath}>
          <img src={hotel} alt="Hoteles" />
          <div className="descripcion">
            <img src={hotelesIcon} alt="Icono de hoteles" />
            <p>Hoteles</p>
          </div>
        </Link>
      </div>
      <div className="tarjeta">
        <Link to={paquetesPath}>
          <img src={paquete} alt="Paquetes" />
          <div className="descripcion">
            <img src={paquetesIcon} alt="Icono de paquetes" />
            <p>Paquetes</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tarjetas;
