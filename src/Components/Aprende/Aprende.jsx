import React, { useRef } from 'react';
import './Aprende.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import destino_icon from '../../assets/location-icon.png';
import gastronomia_icon from '../../assets/gastronomia-icon.png';
import modoviaje_icon from '../../assets/modoviaje-icon.png';
import calendar_icon from '../../assets/calendar-icon.png';
import ia_icon from '../../assets/ia-icon.png';

const Aprende = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -=15;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }

    const slideBackward = () => {
        if(tx < 0){
            tx +=15;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    
    return (
    <div className='Aprende'>
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="titulo-info">
                <div className="image-container">
                  <img src={destino_icon} alt="Destino" />
                </div>
                <div>
                  <h3>Definí tu Destino</h3>
                </div>
              </div>
              <p>Elige un destino que se adapte a tus intereses y presupuesto. Investiga sobre la temporada ideal para visitarlo y considera aspectos como el clima, la seguridad y las atracciones disponibles.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="titulo-info">
                <div className="image-container">
                  <img src={gastronomia_icon} alt="Gastronomía" />
                </div>
                <div>
                  <h3>Sabor y Tradición: Investiga la Gastronomía Local</h3>
                </div>
              </div>
              <p>Explora la gastronomía local para descubrir sabores auténticos y platos tradicionales. Investiga sobre los restaurantes recomendados y los alimentos típicos de la región que no debes dejar de probar.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="titulo-info">
                <div className="image-container">
                  <img src={modoviaje_icon} alt="Modo de Viaje" />
                </div>
                <div>
                  <h3>Muévete con Facilidad: Transporte en tu Destino</h3>
                </div>
              </div>
              <p>Planifica tu transporte en destino considerando opciones como el transporte público, alquiler de vehículos o servicios de transporte privado. Asegúrate de conocer los horarios y tarifas relevantes para tu viaje.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="titulo-info">
                <div className="image-container">
                  <img src={calendar_icon} alt="Itinerario" />
                </div>
                <div>
                  <h3>Tu Itinerario Soñado: Planifica tus Actividades</h3>
                </div>
              </div>
              <p>Crea un itinerario detallado que incluya actividades y atracciones que deseas visitar. Considera tiempos de desplazamiento, horarios de apertura y posibles reservas necesarias para evitar contratiempos durante tu viaje.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="titulo-info">
                <div className="image-container">
                  <img src={ia_icon} alt="IA" />
                </div>
                <div>
                  <h3>Nuestra IA te Lleva de la Idea al Itinerario en un Clic</h3>
                </div>
              </div>
              <p>Utiliza Infinity IA para optimizar tu experiencia de planificación. Desde recomendaciones personalizadas hasta asistencia en tiempo real, aprovecha Infinity para hacer de tu viaje una experiencia única y sin complicaciones.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aprende;

