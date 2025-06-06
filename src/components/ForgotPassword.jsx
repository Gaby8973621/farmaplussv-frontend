import React, { useState } from 'react';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Aquí deberías hacer la petición a tu backend
      // Por ejemplo: await api.post('/forgot-password', { email });

      setMensaje('Se han enviado las instrucciones a tu correo.');
      setError('');
    } catch (err) {
      setMensaje('');
      setError('Ocurrió un error al enviar el correo. Intenta nuevamente.');
    }
  };

  return (
    <div className="forgot-background">
      <div className="forgot-card">
        <h1 className="brand">FarmaPlus<span>+</span></h1>
        <h2>¿Olvidaste tu contraseña?</h2>
        <p>Ingresa tu correo electrónico y te enviaremos las instrucciones.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Enviar instrucciones</button>
        </form>

        {mensaje && <p className="success">{mensaje}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
