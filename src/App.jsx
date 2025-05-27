import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import { productsData } from './data/productsData.js'; // <--- 1. IMPORTAMOS LOS DATOS
import './App.css';

function App() {
  const welcomeMessage = "¡Bienvenido a nuestra tienda online!";

  return (
    <div className="App">
      <NavBar />
      <main className="main-content">
        {/* 2. PASAMOS LOS DATOS DE PRODUCTOS AL ITEMLISTCONTAINER */}
        <ItemListContainer
          greeting={welcomeMessage}
          products={productsData}
        />
      </main>
      {/* Podrías añadir un Footer aquí más adelante */}
    </div>
  );
}

export default App;

