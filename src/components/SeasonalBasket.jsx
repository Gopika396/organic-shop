import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../App.jsx";
import { img } from "../assets/images.js";

const baskets = [
  { id: 101, name: "Little Harvest Basket", price: 299, unit: "basket", image: "basket.jpg", desc: "A small mix of seasonal fruits and vegetables." },
  { id: 102, name: "Garden Table Basket", price: 499, unit: "basket", image: "vegetables.jpg", desc: "A colourful selection for everyday cooking." },
  { id: 103, name: "Fruitful Week Basket", price: 449, unit: "basket", image: "apples.jpg", desc: "Fruit favourites for breakfasts and snacks." }
];

export default function SeasonalBasket() {
  const { addToCart } = useCart();
  const [notice, setNotice] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg site-navbar"><div className="container">
        <Link className="navbar-brand" to="/"><span className="brand-mark">❧</span><span className="brand-name">Root & Harvest</span></Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#basketNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="basketNav"><ul className="navbar-nav ms-auto align-items-lg-center"><li><Link className="nav-link" to="/">Home</Link></li><li><Link className="nav-link" to="/shop">Shop</Link></li><li><Link className="nav-link" to="/farm-stories">Farm Stories</Link></li><li><Link className="nav-link active" to="/seasonal-basket">Seasonal Basket</Link></li><li><Link className="nav-link" to="/organic-guide">Organic Guide</Link></li><li><Link className="nav-link" to="/about">About</Link></li><li><Link className="nav-cart" to="/cart">Cart</Link></li></ul></div>
      </div></nav>
      <main className="container page-main section-space">
        <header className="page-banner" data-aos="fade-up"><span className="eyebrow">A little seasonal inspiration</span><h1>Let nature fill your basket.</h1><p>Curated produce combinations to inspire your next home-cooked meal.</p></header>
        {notice && <div className="alert alert-success" role="status">{notice} <Link to="/cart" className="alert-link">View cart</Link></div>}
        <div className="row g-4">
          {baskets.map((b) => <div className="col-md-6 col-lg-4" key={b.id}><article className="basket-card" data-aos="fade-up"><img src={img(b.image)} alt={b.name} /><div className="basket-card-body"><span className="eyebrow">Curated produce</span><h3>{b.name}</h3><p>{b.desc}</p><div className="product-bottom"><strong className="product-price">₹{b.price}</strong><button className="btn-organic" type="button" onClick={() => { addToCart({ ...b, category: "Bundles" }); setNotice(`${b.name} added to your cart.`); }}>Add basket</button></div></div></article></div>)}
        </div>
        <section className="story-grid section-space"><img className="story-image" src={img("pantry.jpg")} alt="Natural pantry ingredients" /><div className="story-copy"><span className="eyebrow">Make it your own</span><h2>Build a basket for your kitchen.</h2><p>Want to choose every item yourself? Explore the full shop and find ingredients that fit your meals.</p><Link to="/shop" className="btn-organic">Choose your produce</Link></div></section>
      </main>
      <footer className="site-footer"><div className="footer-brand">Root & Harvest</div><p>A seasonal approach to filling your kitchen with good things.</p><div className="footer-links"><Link to="/">Home</Link><Link to="/shop">Shop</Link><Link to="/farm-stories">Farm Stories</Link><Link to="/about">About</Link></div><div className="footer-socials"><a href="https://www.instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://www.facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div><div className="footer-bottom">© 2026 Root & Harvest. All rights reserved.</div></footer>
    </>
  );
}