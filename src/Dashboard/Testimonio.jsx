// Testimonio.jsx

import React, { useState } from 'react';
import './Testimonio.css'; // Importa tu archivo de estilos CSS

const Testimonio = () => {
  const [testimonios, setTestimonios] = useState([
    { id: 1, autor: 'Juan Pérez', texto: '¡Increíble experiencia de viaje con Infinity Tours!' },
    { id: 2, autor: 'María Rodríguez', texto: 'Recomendaría esta empresa a cualquiera que quiera aventuras únicas.' },
    { id: 3, autor: 'Jose Rodríguez', texto: 'Muy buen trato con la gente' },
    { id: 4, autor: 'Lula Lima', texto: 'Organizan todo a la perfeccion.' },
  ]);

  const [nuevoTestimonio, setNuevoTestimonio] = useState('');
  const [nuevoAutor, setNuevoAutor] = useState('');

  const manejarAgregarTestimonio = () => {
    if (nuevoTestimonio && nuevoAutor) {
      const nuevoTestimonioObj = {
        id: testimonios.length + 1,
        autor: nuevoAutor,
        texto: nuevoTestimonio,
      };
      setTestimonios([...testimonios, nuevoTestimonioObj]);
      setNuevoTestimonio('');
      setNuevoAutor('');
    } else {
      alert('Por favor ingrese su nombre y testimonio antes de enviar.');
    }
  };

  return (
    <div className="testimonio-container">
      <h2>Testimonios de Clientes</h2>
      <div className="testimonios-lista">
        {testimonios.map(testimonio => (
          <div key={testimonio.id} className="testimonio-card">
            <p>{testimonio.texto}</p>
            <small>{testimonio.autor}</small>
          </div>
        ))}
      </div>
      <div className="formulario-container">
        <h3>Deja tu Testimonio</h3>
        <form>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              value={nuevoAutor}
              onChange={(e) => setNuevoAutor(e.target.value)}
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="form-group">
            <label>Testimonio:</label>
            <textarea
              className="testimonio-textarea"
              value={nuevoTestimonio}
              onChange={(e) => setNuevoTestimonio(e.target.value)}
              placeholder="Escribe tu testimonio aquí"
              required
            />
          </div>
          <button type="button" onClick={manejarAgregarTestimonio}>Enviar Testimonio</button>
        </form>
      </div>
    </div>
  );
};

export default Testimonio;
