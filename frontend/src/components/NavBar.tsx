// src/components/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Asegúrate de que el archivo CSS esté importado

const NavBar: React.FC = () => {
  return (
    <nav>
      
      {/* Menú de navegación */}
      <ul>
        <li><Link to="/inicio">Inicio</Link></li>
        <li><Link to="/reservar-sala">Reservar sala</Link></li>
        <li><Link to="/mis-reservas">Mis reservas</Link></li>
        <li><Link to="/calendario">Calendario</Link></li>
        <li><Link to="/historial">Historial de reservas</Link></li>
        <li><Link to="/ayuda">Ayuda</Link></li>
        <li><Link to="/otra opcion">Otra opcion</Link></li>

      </ul>
    </nav>
  );
};

export default NavBar;
