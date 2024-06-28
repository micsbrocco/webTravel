// routes/favoritos.js

import express from 'express';
import { agregarFavorito } from '../controllers/favoritoscontrollers.js';

const router = express.Router();

// Ruta para agregar un favorito
router.post('/favoritos', agregarFavorito);

export default router;
