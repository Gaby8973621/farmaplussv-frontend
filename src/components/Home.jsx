import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Home.css';

function Home({ searchTerm }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    api.get('/productos')
      .then(res => setProductos(res.data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre?.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  const agregarAlCarrito = (producto) => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoExistente = carritoActual.find(item => item.id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      carritoActual.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carritoActual));
    alert(`${producto.nombre} fue agregado al carrito.`);
  };

  return (
    <div className="home-page">
      <div className="sub-navbar">
        <Link to="/medicamentos">Medicamentos</Link>
        <Link to="/dermocosmetica">Dermocosmética</Link>
        <Link to="/ofertas">Ofertas</Link>
        <Link to="/farmacia">Tu farmacia</Link>
      </div>

      <header className="hero-banner">
        <div className="hero-text">
          <h1>30% Dto. con tarjeta VISA</h1>
          <p>Jueves de Junio - En toda tu farmacia</p>
          <Link to="/ofertas" className="cta-button">Comprar aquí</Link>
        </div>
        <div className="hero-image">
          <img src="https://img.freepik.com/foto-gratis/doctor-sonriente-tableta-blanca_1098-2176.jpg" alt="Farmacéutico" />
        </div>
      </header>

      <section className="ofertas-section">
        <h2>Ofertas del mes</h2>
        <div className="productos-grid">
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img src={producto.urlfoto || 'https://via.placeholder.com/150'} alt={producto.nombre} />
              <div className="producto-info">
                <h3>{producto.nombre}</h3>
                <p className="descripcion">{producto.descripcion}</p>
                <p className="precio">${Number(producto.precio).toFixed(2)}</p>
                <button className="btn-agregar" onClick={() => agregarAlCarrito(producto)}>
                  <FaShoppingCart /> Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
