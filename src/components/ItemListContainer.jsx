import React from 'react';
import Item from './Item.jsx'; // Importamos el nuevo componente Item
import './Item.css'; // Crearemos este archivo para los estilos del contenedor

// Recibimos la prop "greeting" y ahora también "products"
const ItemListContainer = ({ greeting, products }) => {
  return (
    <div className="item-list-container-main">
      <h2>{greeting}</h2>
      {products && products.length > 0 ? (
        <div className="items-grid">
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>Cargando productos o no hay productos disponibles...</p>
      )}
    </div>
  );
};

export default ItemListContainer;