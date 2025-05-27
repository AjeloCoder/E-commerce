import React from 'react';
import './Item.css'; // Crearemos este archivo para los estilos del item

const Item = ({ product }) => {
  // Si no hay producto, no renderizamos nada (o un mensaje)
  if (!product) {
    return <p>Producto no disponible.</p>;
  }

  const { name, image, price, category, description, oldPrice } = product;

  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-image" />
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <p className="item-category">Categoría: {category}</p>
        <p className="item-description">{description.substring(0, 70)}...</p> {/* Acortamos descripción */}
        <div className="item-price-container">
          {oldPrice && <span className="item-old-price">${oldPrice.toFixed(2)}</span>}
          <span className="item-price">${price.toFixed(2)}</span>
        </div>
        {/* Más adelante podríamos añadir un botón "Añadir al carrito" */}
        {/* <button className="item-add-to-cart">Añadir al carrito</button> */}
      </div>
    </div>
  );
};

export default Item;