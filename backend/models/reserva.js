// models/reserva.js
const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  salaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala', required: true },
  fecha: { type: Date, required: true },
  horaInicio: { type: String, required: true },
  horaFin: { type: String, required: true },
  estado: { type: String, enum: ['pendiente', 'confirmada', 'cancelada'], default: 'pendiente' },
  contraseña: { type: String, required: true }
});

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;
