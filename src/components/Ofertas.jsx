import React, { useEffect, useState } from 'react';
import api from '../api/axios';

function Ofertas() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    api.get('/public/ofertas')
      .then(res => setProductos(res.data))
      .catch(err => console.error('Error al cargar ofertas:', err));
  }, []);

  return (
    <div className="page-section">
      <h1>Ofertas del mes</h1>
      <div className="productos-grid">
        {productos.map(producto => (
          <div key={producto.id} className="producto-card">
            <img src={producto.urlfoto || 'https://via.placeholder.com/150'} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <strong>${parseFloat(producto.precio).toFixed(2)}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ofertas;