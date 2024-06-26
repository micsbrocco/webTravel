import React from 'react'
import './Sobre.css'
import logoinfinity from '../../assets/logo-infinity.png'

const Sobre = () => {
  return (
    <div className='sobre'>
      <div className="sobre-izq">
        <img src={logoinfinity}/>
      </div>
      <div className="sobre-der">
        <h1>Sobre Nosotros</h1>
        <h3>Planificamos Sueños, Creamos Recuerdos</h3>
        <p>En Infinity Travel, nos dedicamos a transformar tus sueños de viaje en experiencias memorables y significativas. 
            Con años de experiencia en la industria del turismo, nos enorgullece ofrecer un servicio personalizado y atención al 
            detalle que garantiza cada detalle de tu viaje, desde la planificación hasta la ejecución.
        </p>
        <p>
        Nuestro compromiso va más allá de simplemente organizar viajes; nos esforzamos por conectar a nuestros viajeros con destinos únicos y culturas auténticas.
        Creemos en explorar el mundo de manera responsable, promoviendo prácticas sostenibles y respeto por el medio ambiente y las comunidades locales que visitamos.
        </p>
        <p>En cada paso del camino, nuestro equipo apasionado de expertos en viajes está aquí para guiar y asistir, asegurando que cada experiencia con Infinity Travel 
            sea memorable y enriquecedora. Ya sea que estés buscando unas vacaciones relajantes en la playa, una aventura emocionante en la naturaleza, 
            o una inmersión cultural profunda, estamos aquí para hacer realidad tus sueños de viaje.
        </p>
      </div>

    </div>
  )
}

export default Sobre
