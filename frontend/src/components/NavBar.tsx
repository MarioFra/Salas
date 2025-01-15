import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  // Definimos las rutas en un arreglo para facilitar su mantenimiento
  const navItems = [
    { path: '/inicio', label: 'Inicio' },
    { path: '/reservar-sala', label: 'Reservar sala' },
    { path: '/mis-reservas', label: 'Mis reservas' },
    { path: '/calendario', label: 'Calendario' },
    { path: '/historial', label: 'Historial de reservas' },
    { path: '/ayuda', label: 'Ayuda' },
    { path: '/otra-opcion', label: 'Otra opción' },
  ];

  return (
    <nav aria-label="Menú principal">
      {/* Menú de navegación */}
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link to={item.path} className="nav-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
