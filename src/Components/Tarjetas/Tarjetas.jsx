import React from 'react'
import './Tarjetas.css'
import destino from '../../assets/destinos.jpg'
import paquete from '../../assets/paquete.png'
import hotel from '../../assets/hoteles.jpg'
import destinos from '../../assets/destinos-icon.png'
import paquetes from '../../assets/paquete-icon.png'
import hoteles from '../../assets/hotel-icon.png'

const Tarjetas = () => {
  return (
    <div className='tarjetas'>
      <div className="tarjeta">
        <img src={destino} alt=""></img>
        <div className="descripcion">
          <img src={destinos} alt="" />
          <p>Destinos</p>
        </div>
      </div>
      <div className="tarjeta">
        <img src={paquete} alt=""></img>
        <div className="descripcion">
          <img src={paquetes} alt="" />
          <p>Paquetes</p>
        </div>
      </div>
      <div className="tarjeta">
        <img src={hotel} alt=""></img>
        <div className="descripcion">
          <img src={hoteles} alt="" />
          <p>Hoteles</p>
        </div>
      </div>
    </div>
  )
}

export default Tarjetas
