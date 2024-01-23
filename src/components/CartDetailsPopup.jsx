import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartDetailsPopup = ({ cartDetails, onClose, onViewCart, onCheckout }) => {
  return (
    <>
      <div className="cart-details-popup">
        <div className="popup-header">
          <h3>Shopping Cart</h3>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        {cartDetails.length === 0 ? (
          <p>No products in cart</p>
        ) : (
          <div>
            {cartDetails.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <div className="product-icon">🛍️</div>
                  <div className="product-details">
                    <p>{item.name}</p>
                    <p>Qty: {item.qty}</p>
                    <p>Price: ${item.price}</p>
                    <p>Subtotal: ${item.qty * item.price}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="popup-actions">
              <button onClick={onViewCart}>View Cart</button>
              <button onClick={onCheckout}>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDetailsPopup;
