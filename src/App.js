import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastrar } from './pages/Cadastrar';
import { Visualizar } from './pages/Visualizar';
import { Editar } from './pages/Editar';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/visualizar/:id" element={<Visualizar />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

