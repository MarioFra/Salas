const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usuariosRoutes = require('./routes/usuarios');
const salasRoutes = require('./routes/salas');
const reservasRoutes = require('./routes/reservas');

const app = express();

// Conexión a MongoDB



  mongoose.connect('mongodb://localhost:27017/reservas_salas')
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((error) => {
    console.error('Error de conexión a MongoDB:', error);
  });

// Middlewares
app.use(bodyParser.json());  // Para parsear el cuerpo de las solicitudes a JSON

// Rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/salas', salasRoutes);
app.use('/api/reservas', reservasRoutes);

// Puerto de la aplicación
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
