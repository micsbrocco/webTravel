import React from 'react';
import './Contacto.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import telefono_icon from '../../assets/phone-icon.png';
import locationblue_icon from '../../assets/locationblue-icon.png';

const Contacto = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando...");
    const formData = new FormData(event.target);

    formData.append("access_key", "10fbcfeb-48d8-40bd-ac26-33f66dd2f5dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("¡Enviado con Éxito!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contacto'>
      <div className="contacto-col">
        <h3>Mandanos un Mensaje <img src={msg_icon} alt=''></img></h3>
        <p>¿Querés hacernos una consulta o estas deseando empezar a planificar tu experiencia viajera? Llená el formulario con tu consulta y nos contactaremos contigo a la brevedad.
          Ademas podés encontrarnos en distintos medios:
        </p>
        <ul>
          <li><img src={mail_icon} alt="" />infinitytravel@email.com</li>
          <li><img src={telefono_icon} alt="" />+54 381 334 4353</li>
          <li><img src={locationblue_icon} alt="" />Avenida Disney 1550</li>
        </ul>
      </div>
      <div className="contacto-col">
        <form onSubmit={onSubmit}>
          <label>Nombre: </label>
          <input type="text" name="nombre" placeholder='Ingresa tu Nombre' required></input>

          <label>Telefono: </label>
          <input type="tel" name="telefono" placeholder='Ingresa tu Telefono Celular' required></input>

          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" name="email" placeholder="Ingresa tu correo electrónico" autoComplete="email" />

          <label>Escribinos tu Mensaje aquí: </label>
          <textarea name="mensaje" rows="6" placeholder='Contanos sobre tu consulta:' required></textarea>
          <button type="submit" className='btn-enviar'>Enviar</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contacto;
