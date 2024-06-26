import React from 'react'
import './Titulo.css'

const Titulo = ({subtitulo,titulo}) => {
  return (
    <div className='titulo'>
      <p>{subtitulo}</p>
      <h2>{titulo}</h2>
    </div>
  )
}

export default Titulo
