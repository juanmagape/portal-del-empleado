import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './components/pages/Home'
import Perfil from './components/pages/profile'
import Ausencias from './components/pages/absences'
import Documentos from './components/pages/documents'
import Proyectos from './components/pages/projects'
import Encuestas from './components/pages/surveys'
import Analiticas from './components/pages/analytics'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/ausencias" element={<Ausencias />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/encuestas" element={<Encuestas />} />
        <Route path="/analiticas" element={<Analiticas />} />
      </Routes>
  );
};

export default App
