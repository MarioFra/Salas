const Sala = require('../models/sala');

// Crear sala
const crearSala = async (req, res) => {
  try {
    const { nombre } = req.body;
    const salaExistente = await Sala.findOne({ nombre });
    if (salaExistente) {
      return res.status(400).json({ mensaje: 'Ya existe una sala con ese nombre' });
    }

    const sala = new Sala(req.body);
    await sala.save();
    res.status(201).json(sala);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear sala', error });
  }
};

// Obtener todas las salas
const obtenerSalas = async (req, res) => {
  try {
    const salas = await Sala.find();
    res.json(salas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener salas', error });
  }
};

// Obtener sala por ID
const obtenerSalaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const sala = await Sala.findById(id);
    if (!sala) {
      return res.status(404).json({ mensaje: 'Sala no encontrada' });
    }
    res.json(sala);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener sala', error });
  }
};

// Actualizar sala
const actualizarSala = async (req, res) => {
  const { id } = req.params;
  const { capacidad, ...datos } = req.body;
  if (capacidad && capacidad < 0) {
    return res.status(400).json({ mensaje: 'La capacidad no puede ser negativa' });
  }

  try {
    const sala = await Sala.findByIdAndUpdate(id, datos, { new: true });
    if (!sala) {
      return res.status(404).json({ mensaje: 'Sala no encontrada' });
    }
    res.json(sala);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar sala', error });
  }
};

// Eliminar sala
const eliminarSala = async (req, res) => {
  const { id } = req.params;
  try {
    const sala = await Sala.findById(id);
    if (!sala) {
      return res.status(404).json({ mensaje: 'Sala no encontrada' });
    }

    // Comprobar si hay reservas en la sala
    const reservas = await Reserva.find({ salaId: id, estado: { $ne: 'cancelada' } });
    if (reservas.length > 0) {
      return res.status(400).json({ mensaje: 'No se puede eliminar la sala porque tiene reservas activas' });
    }

    await Sala.findByIdAndDelete(id);
    res.json({ mensaje: 'Sala eliminada' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar sala', error });
  }
};

module.exports = {
  crearSala,
  obtenerSalas,
  obtenerSalaPorId,
  actualizarSala,
  eliminarSala,
};
