
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../App.jsx";

const img = (name) => `/src/assets/image/${name}`;

const products = [
  { id: 1, name: "Red Apples", price: 180, unit: "1 kg", image: "apples.jpg", category: "Fruits", desc: "Crisp, naturally sweet apples." },
  { id: 2, name: "Garden Greens", price: 90, unit: "bunch", image: "greens.jpg", category: "Vegetables", desc: "Fresh leafy greens." },
  { id: 3, name: "Heirloom Tomatoes", price: 75, unit: "500 g", image: "tomatoes.jpg", category: "Vegetables", desc: "Juicy and full of flavour." },
  { id: 4, name: "Organic Carrots", price: 65, unit: "500 g", image: "carrots.jpg", category: "Vegetables", desc: "Naturally sweet root vegetables." },
  { id: 5, name: "Seasonal Berries", price: 220, unit: "250 g", image: "berries.jpg", category: "Fruits", desc: "Bright berries for breakfast." },
  { id: 6, name: "Wholegrain Mix", price: 160, unit: "1 kg", image: "grains.jpg", category: "Pantry", desc: "A wholesome pantry staple." },
  { id: 7, name: "Farm Basket", price: 399, unit: "basket", image: "basket.jpg", category: "Bundles", desc: "A mix of seasonal produce." },
  { id: 8, name: "Fresh Vegetables", price: 140, unit: "1 kg", image: "vegetables.jpg", category: "Vegetables", desc: "A colourful kitchen selection." },
  { id: 9, name: "Pantry Nuts", price: 250, unit: "250 g", image: "pantry.jpg", category: "Pantry", desc: "A crunchy everyday snack." },
  { id: 10, name: "Farm Produce Pack", price: 190, unit: "pack", image: "farm.jpg", category: "Bundles", desc: "A rotating selection of produce." },
  { id: 11, name: "Leafy Greens Pack", price: 110, unit: "pack", image: "greens.jpg", category: "Vegetables", desc: "Greens for salads and cooking." },
  { id: 12, name: "Apple Snack Pack", price: 120, unit: "500 g", image: "apples.jpg", category: "Fruits", desc: "Fruit ready for snack time." }
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg site-navbar"><div className="container">
      <Link className="navbar-brand" to="/"><span className="brand-mark"><i className="bi bi-flower1" /></span><span className="brand-name">Root & Harvest</span></Link>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#shopNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="shopNav"><ul className="navbar-nav ms-auto align-items-lg-center">
        <li><Link className="nav-link" to="/">Home</Link></li><li><Link className="nav-link active" to="/shop">Shop</Link></li><li><Link className="nav-link" to="/farm-stories">Farm Stories</Link></li><li><Link className="nav-link" to="/seasonal-basket">Seasonal Basket</Link></li><li><Link className="nav-link" to="/organic-guide">Organic Guide</Link></li><li><Link className="nav-link" to="/about">About</Link></li><li className="ms-lg-2"><Link className="nav-cart" to="/cart"> <i className="bi bi-basket2" /> Cart</Link></li>
      </ul></div>
    </div></nav>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="footer-brand">Root & Harvest</div><p>Thoughtful seasonal produce for your everyday table.</p><div className="footer-links"><Link to="/">Home</Link><Link to="/shop">Shop</Link><Link to="/farm-stories">Farm Stories</Link><Link to="/organic-guide">Organic Guide</Link><Link to="/about">About</Link></div><div className="footer-socials"><a href="https://www.instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://www.facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div><div className="footer-bottom">© 2026 Root & Harvest. All rights reserved.</div></footer>;
}

export default function Shop() {
  const { addToCart } = useCart();
  const [category, setCategory] = useState("All");
  const [notice, setNotice] = useState("");

  const categories = ["All", "Fruits", "Vegetables", "Pantry", "Bundles"];
  const filtered = category === "All" ? products : products.filter((p) => p.category === category);

  return (
    <>
      <Navbar />
      <main className="container page-main section-space">
        <header className="page-banner" data-aos="fade-up"><span className="eyebrow">The harvest shop</span><h1>Fresh picks for your kitchen.</h1><p>Explore fruit, vegetables, pantry staples, and seasonal favourites.</p></header>
        {notice && <div className="alert alert-success" role="status">{notice}</div>}
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
          {categories.map((c) => <button type="button" key={c} onClick={() => setCategory(c)} className={category === c ? "btn-organic" : "btn-outline-organic"}>{c}</button>)}
        </div>
        <div className="product-grid">
          {filtered.map((p) => <article className="product-card" key={p.id} data-aos="fade-up">
            <img src={img(p.image)} alt={p.name} loading="lazy" />
            <div className="product-info"><span className="eyebrow">{p.category}</span><h3>{p.name}</h3><p>{p.desc}</p><div className="product-bottom"><strong className="product-price">₹{p.price} <small>/{p.unit}</small></strong><button type="button" className="add-btn" onClick={() => { addToCart(p); setNotice(`${p.name} added to cart.`); }}> <i className="bi bi-plus-lg" /> Add</button></div></div>
          </article>)}
        </div>
      </main>
      <Footer />
    </>
  );
}
