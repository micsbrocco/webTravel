// controllers/favoritoscontroller.js

import Favorito from '../models/Favorito.js';

// Controlador para agregar un favorito
export const agregarFavorito = async (req, res) => {
  const { userId, titulo, descripcion, imagen } = req.body;

  try {
    const nuevoFavorito = new Favorito({
      userId,
      titulo,
      descripcion,
      imagen,
    });

    await nuevoFavorito.save();

    res.status(201).json({ message: 'Favorito agregado correctamente', favorito: nuevoFavorito });
  } catch (error) {
    console.error('Error al agregar favorito:', error);
    res.status(500).json({ error: 'Error al agregar favorito' });
  }
};
