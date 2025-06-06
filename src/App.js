import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Categoria from './components/Categoria';
import Medicamentos from './components/Medicamentos';
import Dermocosmetica from './components/Dermocosmetica';
import Ofertas from './components/Ofertas';
import Farmacia from './components/Farmacia';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/categoria/:nombre" element={<Categoria />} />
        <Route path="/medicamentos" element={<Medicamentos />} />
        <Route path="/dermocosmetica" element={<Dermocosmetica />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/farmacia" element={<Farmacia />} />
      </Routes>
    </Router>
  );
}

export default App;