// routes/reservasRoutes.js
const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

// Rutas para las reservas
router.post('/', reservasController.crearReserva);  // Crear reserva
router.get('/', reservasController.obtenerReservas);  // Obtener todas las reservas
router.get('/:id', reservasController.obtenerReservaPorId);  // Obtener una reserva por ID
router.put('/:id', reservasController.actualizarReserva);  // Actualizar reserva
router.delete('/:id', reservasController.eliminarReserva);  // Eliminar reserva

module.exports = router;
