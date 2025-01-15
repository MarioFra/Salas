// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './pages/Inicio';
import ReservarSala from './pages/ReservarSala';
import MisReservas from './pages/MisReservas';
import Calendario from './pages/Calendario'
import HistorialReservas from './pages/HistorialReservas';
import Ayuda from './pages/Ayuda';

import './App.css'; // Importa el CSS principal
const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar /> {/* Barra de navegación fija */}
        <div className="app"> {/* Contenedor principal con fondo */}
          <Routes>
       
            <Route path="/" element={<Inicio />} />
            <Route path="/reservar" element={<ReservarSala />} />
            <Route path="/mis-reservas" element={<MisReservas />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/historial" element={<HistorialReservas />} />
            <Route path="/ayuda" element={<Ayuda />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
