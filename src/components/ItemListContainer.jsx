import React from 'react';
import Item from './Item.jsx'; 
import './Item.css'; 


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