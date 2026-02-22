"use client";
import { useState } from "react";

export default function CartCard({ item, onRemove, onQuantityChange }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [removing, setRemoving] = useState(false);

  const handleQuantityChange = (delta) => {
    const next = Math.max(1, quantity + delta);
    setQuantity(next);
    onQuantityChange(item.id, next);
  };

  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => onRemove(item.id), 350);
  };

  return (
    <div
      className={`cart-card ${removing ? "removing" : ""}`}
    >
      <div className="cart-card__image-wrap">
        <img src={item.image} alt={item.name} className="cart-card__image" />
        {item.badge && <span className="cart-card__badge">{item.badge}</span>}
      </div>

      <div className="cart-card__body">
        <div className="cart-card__top">
          <div>
            <p className="cart-card__category">{item.category}</p>
            <h3 className="cart-card__name">{item.name}</h3>
            <p className="cart-card__variant">{item.variant}</p>
          </div>
          <button className="cart-card__remove" onClick={handleRemove} aria-label="Remove item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="cart-card__bottom">
          <div className="cart-card__qty">
            <button className="qty-btn" onClick={() => handleQuantityChange(-1)}>−</button>
            <span className="qty-value">{quantity}</span>
            <button className="qty-btn" onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <p className="cart-card__price">${(item.price * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
