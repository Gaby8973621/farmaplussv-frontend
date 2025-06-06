import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Categoria.css';

function Categoria() {
  const { nombre } = useParams();
  const [mensajeAgregado, setMensajeAgregado] = useState(false);
  const [carrito, setCarrito] = useState([]);

  const productosPorCategoria = {
    dolor: [
      {
        id: 1,
        titulo: "Ibuprofeno 400mg",
        img: "https://farmaciassimilaresmx.vtexassets.com/arquivos/ids/162109/1853.png?v=638663449345370000",
        precio: 2.50,
      },
      {
        id: 2,
        titulo: "Paracetamol MK",
        img: "https://www.plmconnection.com/plmservices/PharmaSearchEngine/Mexico/DEF/SIDEF/400x400/sanfer_algitrin_tabs_caja12.png",
        precio: 3.00,
      },
      {
        id: 3,
        titulo: "Naproxeno Sódico",
        img: "https://farmapalacio.com/wp-content/uploads/2024/08/NAPROXENO-275-MG-10-TABLETAS-MK.jpg",
        precio: 3.50,
      },
      {
        id: 4,
        titulo: "Pastillas Efervescentes",
        img: "https://www.alkaseltzer.com/sites/g/files/vrxlpx51966/files/2019-12/product-original-fs-md.jpg",
        precio: 6.25,
      }
    ],
    belleza: [
      {
        id: 5,
        titulo: "Crema Antiarrugas",
        img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/01/26/16747166012375.jpg",
        precio: 7.50,
      },
      {
        id: 6,
        titulo: "Protector Solar FPS50",
        img: "https://img.huffingtonpost.es/files/image_1200_720/uploads/2024/04/08/una-mujer-aplicandose-protector-solar-facial.jpeg",
        precio: 6.00,
      },
      {
        id: 7,
        titulo: "Gel limpiador facial",
        img: "https://walmartsv.vtexassets.com/arquivos/ids/591817/43264_02.jpg?v=638665089524000000",
        precio: 5.75,
      },
      {
        id: 8,
        titulo: "Sérum de Vitamina C",
        img: "https://chicastiendasv.com/wp-content/uploads/2021/11/la-roche-posay-pure-vitamin-c-serum-3337875660570-11.jpg",
        precio: 8.20,
      }
    ],
    infantil: [
      {
        id: 9,
        titulo: "Jarabe Infantil",
        img: "https://www.drogueriasanjorge.com/images/productos/large/7703234101059.jpg",
        precio: 4.25,
      },
      {
        id: 10,
        titulo: "Vitaminas Gummy Kids",
        img: "https://cdn.shopify.com/s/files/1/0057/8933/4356/products/KidsMultiGummy.jpg?v=1626271164",
        precio: 5.30,
      },
      {
        id: 11,
        titulo: "Pomada para rozaduras",
        img: "https://m.media-amazon.com/images/I/61EVa0h8KTL._AC_SY879_.jpg",
        precio: 3.90,
      },
      {
        id: 12,
        titulo: "Toallitas húmedas hipoalergénicas",
        img: "https://m.media-amazon.com/images/I/81MffB8KJkL._AC_UF1000,1000_QL80_.jpg",
        precio: 4.10,
      }
    ],
    vitaminas: [
      {
        id: 13,
        titulo: "Vitamina C 1000mg",
        img: "https://cdn.farmacenter.com.py/448/675567.jpg",
        precio: 3.20,
      },
      {
        id: 14,
        titulo: "Multivitamínico Adultos",
        img: "https://m.media-amazon.com/images/I/71631iu1YUL.jpg",
        precio: 6.40,
      },
      {
        id: 15,
        titulo: "Complejo B12",
        img: "https://cdn.farmaciasguadalajara.com/wcsstore/FarmaciasGuadalajaraCatalogAssetStore/images/catalog/full/7501078210007.jpg",
        precio: 4.85,
      },
      {
        id: 16,
        titulo: "Omega 3-6-9",
        img: "https://m.media-amazon.com/images/I/91Qn0h15QoL.jpg",
        precio: 9.99,
      }
    ]
  };

  const productos = productosPorCategoria[nombre.toLowerCase()] || [];

  const handleAgregar = (producto) => {
    setCarrito((prev) => [...prev, producto]);
    setMensajeAgregado(true);
    setTimeout(() => setMensajeAgregado(false), 2000);
  };

  const handleEliminar = (index) => {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  const descuento = total > 10 ? total * 0.2 : 0;
  const totalConDescuento = total - descuento;

  return (
    <div className="categoria-page">
      {mensajeAgregado && (
        <div className="mensaje-popup mensaje-lateral gold-text">
          ¡Producto agregado a tu carrito!
        </div>
      )}

      <div className="pill pill1"></div>
      <div className="pill pill2"></div>
      <div className="pill pill3"></div>

      <div className="banner-categoria">
        <div className="banner-texto">
          <h3>El alivio para <strong>bajar la fiebre</strong> y verlos BIEN</h3>
          <button className="btn-banner">AQUÍ</button>
        </div>
        <img
          className="banner-img"
          src="https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Unipatch producto"
        />
      </div>

      <div className="volver-container">
        <Link to="/" className="btn-volver">← Volver al inicio</Link>
      </div>

      <h2 className="titulo-categoria">Resultado por categoría <span>{nombre.replace("-", " ")}</span></h2>

      <div className="filtros-categoria">
        <button className="btn-filtro">Filtros (0)</button>
        <select className="select-orden">
          <option>Orden: A-Z</option>
          <option>Precio: menor a mayor</option>
        </select>
      </div>

      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.img} alt={producto.titulo} />
            <h4>{producto.titulo}</h4>
            <p>${producto.precio.toFixed(2)}</p>
            <p>Ideal para aliviar síntomas de dolor o fiebre.</p>
            <button onClick={() => handleAgregar(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      {carrito.length > 0 && (
        <div className="cart-card-lateral">
          <h4>🛒 Carrito</h4>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                {item.titulo} - ${item.precio.toFixed(2)}
                <button onClick={() => handleEliminar(index)} style={{ marginLeft: '10px', color: 'red', cursor: 'pointer', background: 'transparent', border: 'none' }}>✖</button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: <strong>${total.toFixed(2)}</strong></p>
          {descuento > 0 && (
            <p className="gold-text">🎉 ¡Tienes un 20% de descuento! Total con descuento: <strong>${totalConDescuento.toFixed(2)}</strong></p>
          )}

          <a href="https://bancoagricola.com" target="_blank" rel="noopener noreferrer">
            <button className="btn-pagar">Pagar con Banco Agrícola</button>
          </a>

          <a href="https://www.paypal.com/paypalme/elliemorales" target="_blank" rel="noopener noreferrer">
            <button className="btn-pagar">Pagar con PayPal</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Categoria;
