
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import './DropdownCuenta.css';

function DropdownCuenta() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cierra el dropdown si se hace clic afuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="cuenta-dropdown" ref={dropdownRef}>
      <button className="cuenta-btn" onClick={() => setOpen(!open)}>
        <FaUser className="icon" /> Mi cuenta ▾
      </button>
      {open && (
        <div className="cuenta-menu">
          <Link to="/login" className="cuenta-item">
            <FaLock className="icon" /> Iniciar Sesión
          </Link>
          <hr />
          <Link to="/registro" className="cuenta-item">
            <FaUser className="icon" /> Registrarme
          </Link>
        </div>
      )}
    </div>
  );
}

export default DropdownCuenta;
