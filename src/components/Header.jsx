import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import DropdownCuenta from './DropdownCuenta'; 
import './Header.css';

function Header({ onSearch }) {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleInputChange = (e) => {
    if (typeof onSearch === 'function') {
      onSearch(e.target.value);
    }
  };

  const handlePay = () => {
    window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=TU_CORREO_PAYPAL&item_name=Compra+Farmaplus&amount=10.00&currency_code=USD';
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="main-header">
      <div className="logo">FarmaPlussv</div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Busca un producto"
          onChange={handleInputChange}
        />
      </div>

      <div className="nav-icons">
        <DropdownCuenta />

        <button
          className="icon-link"
          style={{ background: 'none', border: 'none', cursor: 'default' }}
        >
          <FaShoppingCart /> Carrito
        </button>

        <button
          onClick={handlePay}
          style={{
            backgroundColor: '#ffc439',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: '#111',
            fontSize: '14px',
            marginLeft: '10px'
          }}
        >
          Pagar con PayPal
        </button>

        {isAuthenticated && (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#d32f2f',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '14px',
              marginLeft: '10px'
            }}
          >
            Cerrar sesión
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
