import React, { useState, useEffect } from 'react';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import './Cart.css';

function Cart() {
  // Supongamos que el carrito está en localStorage (puedes adaptarlo si usas context o redux)
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(carritoGuardado);
  }, []);

  const eliminarProducto = (id) => {
    const actualizado = carrito.filter(p => p.id !== id);
    setCarrito(actualizado);
    localStorage.setItem('carrito', JSON.stringify(actualizado));
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, item) => acc + item.precio * (item.cantidad || 1), 0).toFixed(2);
  };

  const pagarConPayPal = () => {
    const total = calcularTotal();
    window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=TU_CORREO_PAYPAL&item_name=Compra+Farmaplus&amount=${total}&currency_code=USD`;
  };

  return (
    <div className="cart-container">
      <h2><FaShoppingCart /> Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {carrito.map((producto) => (
            <div key={producto.id} className="cart-item">
              <img src={producto.urlfoto || 'https://via.placeholder.com/80'} alt={producto.nombre} />
              <div className="item-details">
                <h4>{producto.nombre}</h4>
                <p>${Number(producto.precio).toFixed(2)}</p>
                <p>Cantidad: {producto.cantidad || 1}</p>
              </div>
              <button onClick={() => eliminarProducto(producto.id)} className="btn-eliminar">
                <FaTrash /> Eliminar
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${calcularTotal()}</h3>
            <button className="btn-pagar" onClick={pagarConPayPal}>
              Pagar con PayPal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
