import React from 'react';
import './Item.css'; 

const Item = ({ product }) => {
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
        <p className="item-description">{description.substring(0, 70)}...</p> 
        <div className="item-price-container">
          {oldPrice && <span className="item-old-price">${oldPrice.toFixed(2)}</span>}
          <span className="item-price">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;