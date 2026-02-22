"use client";
import { useState } from "react";
import CartCard from "../../app/_components/CartCard";
import OrderSummary from "../../app/_components/OrderSummary";
import "./cart.css";
import Breadcrumb from "../_components/Breadcrumb";
const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "cart" }];
const INITIAL_ITEMS = [
  {
    id: 1,
    name: "Lumina Ceramic Vase",
    category: "Home Décor",
    variant: "Matte White / Large",
    price: 89.0,
    quantity: 1,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1612196808214-b7e239e5f2c1?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Woven Linen Throw",
    category: "Textiles",
    variant: "Natural / 130×170cm",
    price: 64.5,
    quantity: 2,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Noir Desk Lamp",
    category: "Lighting",
    variant: "Matte Black",
    price: 112.0,
    quantity: 1,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&h=200&fit=crop",
  },
];

export default function CartPage() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleQuantityChange = (id, qty) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i)),
    );
  };

  return (
    <div className="cart-page">
      <main className="cart-main">
        <Breadcrumb items={breadcrumbItems} />
        <div className="cart-layout">
          {/* Left: cart items */}
          <section className="cart-items-section">
            <div className="cart-section-header">
              <h1 className="cart-title">Your Cart</h1>
              <span className="cart-count-label">{items.length} items</span>
            </div>

            {items.length === 0 ? (
              <div className="cart-empty">
                <div className="empty-icon">🛒</div>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything yet.</p>
                <a href="#" className="empty-cta">
                  Continue Shopping
                </a>
              </div>
            ) : (
              <div className="cart-cards">
                {items.map((item) => (
                  <CartCard
                    key={item.id}
                    item={item}
                    onRemove={handleRemove}
                    onQuantityChange={handleQuantityChange}
                  />
                ))}
              </div>
            )}

            <div className="cart-actions">
              <a href="#" className="continue-shopping">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M12 8H4M4 8L8 4M4 8L8 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Continue Shopping
              </a>
            </div>
          </section>

          {/* Right: order summary */}
          {items.length > 0 && <OrderSummary items={items} />}
        </div>
      </main>
    </div>
  );
}
