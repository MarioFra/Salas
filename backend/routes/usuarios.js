const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Rutas para los usuarios
router.post('/', usuariosController.crearUsuario);  // Crear usuario
router.get('/', usuariosController.obtenerUsuarios);  // Obtener todos los usuarios
router.get('/:id', usuariosController.obtenerUsuarioPorId);  // Obtener un usuario por ID
router.put('/:id', usuariosController.actualizarUsuario);  // Actualizar usuario
router.delete('/:id', usuariosController.eliminarUsuario);  // Eliminar usuario

module.exports = router;
