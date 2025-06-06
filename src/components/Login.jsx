import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/auth/login', {
        email,
        password
      });

      // Guardar el token en localStorage
      localStorage.setItem('token', res.data.token);

      // Redirigir al home o dashboard
      navigate('/');

    } catch (error) {
      console.error('Error al iniciar sesión:', error.response?.data?.message || error.message);
      alert('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="login-background">
      <div className="pill pill1"></div>
      <div className="pill pill2"></div>
      <div className="pill pill3"></div>

      <div className="login-card">
        <h1 className="brand">FarmaPlussv<span>+</span></h1>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>

        <div className="extras">
          <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          <p>¿No tienes cuenta? <Link to="/registro">Regístrate</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
