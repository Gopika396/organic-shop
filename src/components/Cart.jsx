import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../App.jsx";
import { img } from "../assets/images.js";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [message, setMessage] = useState("");

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal === 0 || subtotal >= 499 ? 0 : 40;
  const total = subtotal + delivery;

  function placeOrder(event) {
    event.preventDefault();
    clearCart();
    setShowCheckout(false);
    setMessage("Demo order placed successfully! No payment was collected.");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg site-navbar"><div className="container"><Link className="navbar-brand" to="/"><span className="brand-mark">❧</span><span className="brand-name">Root & Harvest</span></Link><button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#cartNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button><div className="collapse navbar-collapse" id="cartNav"><ul className="navbar-nav ms-auto align-items-lg-center"><li><Link className="nav-link" to="/">Home</Link></li><li><Link className="nav-link" to="/shop">Shop</Link></li><li><Link className="nav-link" to="/farm-stories">Farm Stories</Link></li><li><Link className="nav-link" to="/seasonal-basket">Seasonal Basket</Link></li><li><Link className="nav-link" to="/organic-guide">Organic Guide</Link></li><li><Link className="nav-link" to="/about">About</Link></li><li><Link className="nav-cart" to="/cart">Cart ({items.reduce((sum, item) => sum + item.quantity, 0)})</Link></li></ul></div></div></nav>
      <main className="container page-main section-space">
        <header className="page-banner" data-aos="fade-up"><span className="eyebrow">Your harvest</span><h1>Your shopping basket.</h1><p>Review your selected produce and prepare for your next kitchen delivery.</p></header>
        {message && <div className="alert alert-success" role="status">{message}</div>}
        {items.length === 0 ? <div className="empty-state"><i className="bi bi-basket2" /><h2 className="mt-3">Your basket is waiting.</h2><p>Add some fresh favourites to get started.</p><Link to="/shop" className="btn-organic">Explore the shop</Link></div> :
          <div className="row g-4">
            <div className="col-lg-8">
              {items.map((item) => <article className="cart-item" key={item.id}>
                <img src={img(item.image)} alt={item.name} />
                <div><h3 className="h5 mb-1">{item.name}</h3><p className="mb-1">₹{item.price} / {item.unit || "item"}</p>
                  <div className="quantity-control">
                    <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label={`Decrease ${item.name}`}>−</button><span>{item.quantity}</span><button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label={`Increase ${item.name}`}>+</button>
                    <button type="button" className="btn btn-sm btn-outline-danger ms-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
                <strong className="cart-line-total">₹{item.price * item.quantity}</strong>
              </article>)}
            </div>
            <div className="col-lg-4"><aside className="cart-summary"><h2 className="h3">Order summary</h2><div className="d-flex justify-content-between mt-4"><span>Subtotal</span><strong>₹{subtotal}</strong></div><div className="d-flex justify-content-between mt-3"><span>Delivery</span><strong>{delivery === 0 ? "Free" : `₹${delivery}`}</strong></div><hr /><div className="d-flex justify-content-between mb-4"><strong>Total</strong><strong>₹{total}</strong></div><button className="btn-organic w-100" type="button" onClick={() => setShowCheckout(true)}>Continue to checkout</button><p className="small mt-3 mb-0">Demo only. No real payment is processed.</p></aside></div>
          </div>
        }

        {showCheckout && items.length > 0 && <section className="form-card mt-5"><h2 className="h3 mb-4">Delivery details</h2><form onSubmit={placeOrder}>
          <div className="mb-3"><label className="form-label" htmlFor="customerName">Full name</label><input className="form-control" id="customerName" required /></div>
          <div className="mb-3"><label className="form-label" htmlFor="customerEmail">Email address</label><input className="form-control" id="customerEmail" type="email" required /></div>
          <div className="mb-3"><label className="form-label" htmlFor="customerAddress">Delivery address</label><textarea className="form-control" id="customerAddress" rows="3" required /></div>
          <div className="d-flex flex-wrap gap-2"><button className="btn-organic" type="submit">Place demo order · ₹{total}</button><button className="btn-outline-organic" type="button" onClick={() => setShowCheckout(false)}>Cancel</button></div>
        </form></section>}
      </main>
      <footer className="site-footer"><div className="footer-brand">Root & Harvest</div><p>Fresh ideas for a thoughtful kitchen.</p><div className="footer-links"><Link to="/">Home</Link><Link to="/shop">Shop</Link><Link to="/farm-stories">Farm Stories</Link><Link to="/seasonal-basket">Seasonal Basket</Link><Link to="/about">About</Link></div><div className="footer-socials"><a href="https://www.instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://www.facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div><div className="footer-bottom">© 2026 Root & Harvest. All rights reserved.</div></footer>
    </>
  );
}