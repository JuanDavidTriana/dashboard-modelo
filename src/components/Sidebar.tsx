import React from 'react';
import './Sidebar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faUser,
  faList,
  faFont,
  faAtom,
  faMapMarkerAlt,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
// Si usas React Router DOM para la navegación
import { Link } from 'react-router-dom';

interface SidebarProps {
  // Puedes pasar props si necesitas controlar el estado del sidebar (abierto/cerrado)
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-brand">DevSenior Dashboard</span>
      </div>
      <ul className="sidebar-nav">
        {/* Utiliza <Link> si estás usando React Router para la navegación */}
        <li className="sidebar-nav-item active">
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faChartPie} className="nav-icon" />
            DASHBOARD
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/user-profile">
            <FontAwesomeIcon icon={faUser} className="nav-icon" />
            USER PROFILE
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/table-list">
            <FontAwesomeIcon icon={faList} className="nav-icon" />
            TABLE LIST
          </Link>
        </li>
        

        <li className="sidebar-nav-item">
          <Link to="/notifications">
            <FontAwesomeIcon icon={faBell} className="nav-icon" />
            SETINGS
          </Link>
        </li>
      </ul>
      {/* Puedes agregar un fondo dinámico aquí si lo deseas */}
      <div className="sidebar-background">
        {/*  */}
      </div>
    </div>
  );
};

export default Sidebar;