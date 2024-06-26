import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../../assets/icono.png';

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="Logo" className='logo' />
      <ul>
        <li>
          <ScrollLink to='hero' smooth={true} offset={0} duration={500}>
            Inicio
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='empeza' smooth={true} offset={-100} duration={500}>
            Empezá tu Aventura
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='quienes' smooth={true} offset={-150} duration={500}>
            Quiénes somos
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='aprende' smooth={true} offset={-100} duration={500}>
            Aprende con Infinity
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='infinity' smooth={true} offset={-100} duration={500}>
            Infinity IA
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='contacto' smooth={true} offset={-260} duration={500}>
            <button className='btn'>Contacto</button>
          </ScrollLink>
        </li>
        <li>
          <RouterLink to='/login'>
            <button className='btn'>Iniciar Sesión</button>
          </RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
