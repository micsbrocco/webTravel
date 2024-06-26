// routes/auth.js

import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const newUser = new User({ username, password, email });
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  console.log('Solicitud de login recibida con:', username, password);

  try {
    const user = await User.findOne({ username });

    if (!user) {
      console.log('Usuario no encontrado');
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    if (user.password !== password) {
      console.log('Contraseña incorrecta');
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    console.log('Login exitoso');
    return res.status(200).json({ message: 'Login exitoso', user: { username: user.username, email: user.email } });
  } catch (error) {
    console.error('Error en el servidor al iniciar sesión:', error);
    return res.status(500).json({ message: 'Error en el servidor al iniciar sesión' });
  }
});

export default router;
