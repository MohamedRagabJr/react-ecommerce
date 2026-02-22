"use client";
import { useState } from "react";

export default function OrderSummary({ items }) {
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);

  const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const shipping = subtotal > 150 ? 0 : 12.99;
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;

  const handlePromo = () => {
    if (promo.toUpperCase() === "SAVE10") {
      setPromoApplied(true);
      setPromoError(false);
    } else {
      setPromoError(true);
      setPromoApplied(false);
    }
  };

  return (
    <aside className="order-summary">
      <h2 className="summary__title">Order Summary</h2>

      <div className="summary__items-preview">
        {items.map((item) => (
          <div key={item.id} className="summary__item-row">
            <div className="summary__item-img-wrap">
              <img src={item.image} alt={item.name} />
              <span className="summary__item-qty">{item.quantity}</span>
            </div>
            <div className="summary__item-info">
              <p className="summary__item-name">{item.name}</p>
              <p className="summary__item-variant">{item.variant}</p>
            </div>
            <p className="summary__item-price">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="summary__divider" />

      <div className="summary__promo">
        <input
          type="text"
          className={`promo-input ${promoError ? "error" : ""} ${promoApplied ? "success" : ""}`}
          placeholder="Promo code"
          value={promo}
          onChange={(e) => { setPromo(e.target.value); setPromoError(false); }}
          disabled={promoApplied}
        />
        <button className="promo-btn" onClick={handlePromo} disabled={promoApplied}>
          {promoApplied ? "✓" : "Apply"}
        </button>
      </div>
      {promoError && <p className="promo-msg error">Invalid promo code.</p>}
      {promoApplied && <p className="promo-msg success">10% discount applied!</p>}

      <div className="summary__divider" />

      <div className="summary__lines">
        <div className="summary__line">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {promoApplied && (
          <div className="summary__line discount">
            <span>Discount (10%)</span>
            <span>−${discount.toFixed(2)}</span>
          </div>
        )}
        <div className="summary__line">
          <span>Shipping</span>
          <span>{shipping === 0 ? <span className="free">Free</span> : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="summary__line">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>

      {shipping > 0 && (
        <div className="summary__free-shipping">
          <div className="free-ship-bar">
            <div className="free-ship-fill" style={{ width: `${Math.min((subtotal / 150) * 100, 100)}%` }} />
          </div>
          <p className="free-ship-text">
            Add <strong>${(150 - subtotal).toFixed(2)}</strong> more for free shipping
          </p>
        </div>
      )}

      <div className="summary__divider" />

      <div className="summary__total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button className="checkout-btn">
        Proceed to Checkout
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="summary__trust">
        <span>🔒 Secure checkout</span>
        <span>·</span>
        <span>Free returns</span>
        <span>·</span>
        <span>SSL encrypted</span>
      </div>
    </aside>
  );
}
