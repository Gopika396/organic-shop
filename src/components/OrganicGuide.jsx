import React from "react";
import { Link } from "react-router-dom";
import { img } from "../assets/images.js";

const tips = [
  ["01", "Read labels thoughtfully", "Look for clear ingredient lists and credible organic certification where applicable."],
  ["02", "Wash produce safely", "Rinse fruits and vegetables under clean running water. Do not use soap or household detergents on food."],
  ["03", "Store food correctly", "Keep leafy greens cool and dry, store potatoes in a dark ventilated place, and follow package instructions."],
  ["04", "Explore seasonal foods", "Try unfamiliar fruits and vegetables to bring variety to everyday meals."],
  ["05", "Reduce food waste", "Plan meals, use delicate produce first, and freeze suitable ingredients before they spoil."]
];

export default function OrganicGuide() {
  return (
    <>
      <nav className="navbar navbar-expand-lg site-navbar"><div className="container"><Link className="navbar-brand" to="/"><span className="brand-mark">❧</span><span className="brand-name">Root & Harvest</span></Link><button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#guideNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button><div className="collapse navbar-collapse" id="guideNav"><ul className="navbar-nav ms-auto align-items-lg-center"><li><Link className="nav-link" to="/">Home</Link></li><li><Link className="nav-link" to="/shop">Shop</Link></li><li><Link className="nav-link" to="/farm-stories">Farm Stories</Link></li><li><Link className="nav-link" to="/seasonal-basket">Seasonal Basket</Link></li><li><Link className="nav-link active" to="/organic-guide">Organic Guide</Link></li><li><Link className="nav-link" to="/about">About</Link></li><li><Link className="nav-cart" to="/cart">Cart</Link></li></ul></div></div></nav>
      <main className="container page-main section-space">
        <header className="page-banner" data-aos="fade-up"><span className="eyebrow">The thoughtful food guide</span><h1>Small habits. Better food choices.</h1><p>Practical ideas for shopping, storing, and preparing fresh ingredients with care.</p></header>
        <section className="story-grid mb-5"><img className="story-image" src={img("vegetables.jpg")} alt="Fresh vegetables ready to prepare" /><div className="story-copy"><span className="eyebrow">Start with the basics</span><h2>Fresh food deserves thoughtful care.</h2><p>Organic describes a set of production and certification standards. It does not guarantee food is pesticide-free or automatically more nutritious.</p><p>Read labels, handle produce safely, and choose foods that suit your meals and budget.</p><Link to="/shop" className="btn-organic">Explore fresh produce</Link></div></section>
        <section className="section-space"><div className="section-heading"><span className="eyebrow">Everyday know-how</span><h2>Your simple organic food guide</h2></div>{tips.map(([n, title, text]) => <article className="guide-row" key={n} data-aos="fade-up"><div className="guide-number">{n}</div><div><h3>{title}</h3><p className="mb-0">{text}</p></div></article>)}</section>
        <section className="text-center section-space"><h2>Ready to fill your basket?</h2><p>Explore ingredients for your next home-cooked meal.</p><Link to="/shop" className="btn-organic">Browse the shop</Link></section>
      </main>
      <footer className="site-footer"><div className="footer-brand">Root & Harvest</div><p>Learn about ingredients and thoughtful food choices.</p><div className="footer-links"><Link to="/">Home</Link><Link to="/shop">Shop</Link><Link to="/farm-stories">Farm Stories</Link><Link to="/seasonal-basket">Seasonal Basket</Link><Link to="/about">About</Link></div><div className="footer-socials"><a href="https://www.instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://www.facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div><div className="footer-bottom">© 2026 Root & Harvest. All rights reserved.</div></footer>
    </>
  );
}