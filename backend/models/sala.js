const mongoose = require('mongoose');

const salaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ubicacion: { type: String, required: true },
  capacidad: { type: Number, required: true },
  equipamiento: { type: [String], default: [] },  // Equipamiento como un array de cadenas
  disponibilidad: { type: Boolean, default: true }  // Indica si la sala está disponible
});

const Sala = mongoose.model('Sala', salaSchema);

module.exports = Sala;
