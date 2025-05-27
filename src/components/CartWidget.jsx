import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      🛒
      { <span className="cart-count">4</span> }
    </div>
  );
};

export default CartWidget;