import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import './Categoria.css';

function Medicamentos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    api.get('/productos') 
      .then(res => setProductos(res.data))
      .catch(err => console.error('Error al cargar medicamentos:', err));
  }, []);

  return (
    <div className="categoria-page">
      <h2>Medicamentos</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.urlfoto || 'https://via.placeholder.com/150'} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p className="precio">${Number(producto.precio).toFixed(2)}</p>
            <button className="btn-agregar">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicamentos;
