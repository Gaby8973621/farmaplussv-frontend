import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <div className="register-background">
      <div className="pill pill1"></div>
      <div className="pill pill2"></div>
      <div className="pill pill3"></div>

      <div className="register-card">
        <h1 className="brand">FarmaPlussv<span>+</span></h1>
        <h2>Crea tu cuenta</h2>
        <form>
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <input type="password" placeholder="Confirmar contraseña" required />
          <button type="submit">Registrarse</button>
        </form>

        <div className="extras">
          <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;

