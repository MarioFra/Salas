// controllers/reservasController.js
const Reserva = require('../models/reserva');

// Crear reserva
exports.crearReserva = async (req, res) => {
  try {
    const nuevaReserva = new Reserva(req.body);  // Crear un nuevo objeto con los datos enviados desde el frontend
    await nuevaReserva.save();  // Guardar la reserva en MongoDB
    res.status(201).json(nuevaReserva);  // Responder con la nueva reserva creada
  } catch (error) {
    res.status(500).json({ message: "Error al crear la reserva", error });
  }
};

// Obtener todas las reservas
exports.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();  // Obtener todas las reservas de la base de datos
    res.status(200).json(reservas);  // Responder con la lista de reservas
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las reservas", error });
  }
};

// Obtener una reserva por ID
exports.obtenerReservaPorId = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);  // Buscar la reserva por ID
    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    res.status(200).json(reserva);  // Responder con la reserva encontrada
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la reserva", error });
  }
};

// Actualizar una reserva por ID
exports.actualizarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });  // Actualizar la reserva
    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    res.status(200).json(reserva);  // Responder con la reserva actualizada
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la reserva", error });
  }
};

// Eliminar una reserva por ID
exports.eliminarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndDelete(req.params.id);  // Eliminar la reserva por ID
    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    res.status(200).json({ message: "Reserva eliminada correctamente" });  // Confirmar que se eliminó
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la reserva", error });
  }
};
