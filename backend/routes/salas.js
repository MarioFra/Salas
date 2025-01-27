const express = require('express');
const router = express.Router();
const salasController = require('../controllers/salasController');

// Rutas para las salas
router.post('/', salasController.crearSala);  // Crear sala
router.get('/', salasController.obtenerSalas);  // Obtener todas las salas
router.get('/:id', salasController.obtenerSalaPorId);  // Obtener una sala por ID
router.put('/:id', salasController.actualizarSala);  // Actualizar sala
router.delete('/:id', salasController.eliminarSala);  // Eliminar sala

module.exports = router;
