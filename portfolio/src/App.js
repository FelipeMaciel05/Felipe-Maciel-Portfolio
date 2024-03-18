import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componentes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> {/* Cambiado de "/Home" a "/" */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
