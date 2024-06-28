// models/User.js

import mongoose from 'mongoose';

// Define el esquema para los favoritos
const favoritoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagen: { type: String, required: true }
});

// Define el esquema para el usuario
const usuarioSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  favoritos: [favoritoSchema] // Usa el esquema de favoritos en un array
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
