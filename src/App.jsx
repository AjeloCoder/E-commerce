import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import { productsData } from './data/productsData.js'; 
import './App.css';

function App() {
  const welcomeMessage = "¡Bienvenido a nuestra tienda online!";

  return (
    <div className="App">
      <NavBar />
      <main className="main-content">
        <ItemListContainer
          greeting={welcomeMessage}
          products={productsData}
        />
      </main>
    </div>
  );
}

export default App;

