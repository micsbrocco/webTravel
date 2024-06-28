// models/Favorito.js

import mongoose from 'mongoose';

const favoritoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Referencia al modelo User si es necesario
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
});

const Favorito = mongoose.model('Favorito', favoritoSchema);

export default Favorito;
