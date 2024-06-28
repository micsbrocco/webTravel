import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import './HeroHome.css'
import dark_arrow from '../../assets/dark-arrow.png'

const HeroHome = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Arma el viaje de tus sueños</h1>
        <p>En Infinity Travel, te ayudamos a convertir tus sueños de viaje en realidad, cuidando cada detalle para que disfrutes de una experiencia sin igual. 
          Con nosotros, podés planificar tu aventura de inicio a fin, asegurándote de que todo esté cubierto, desde el momento en que decidís viajar hasta tu regreso a casa. 
          <br/>¿Ya probaste nuestra asistencia con IA? ¡Chatea con Infinity IA!</p>
          <ScrollLink to='infinity' smooth={true} offset={-100} duration={500}>
          <button className='btn'>Infinity IA <img src={dark_arrow}></img></button>
          </ScrollLink>
          
      </div>
    </div>
  )
}

export default HeroHome
