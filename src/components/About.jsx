import React from "react";
import { Link } from "react-router-dom";
import { img } from "../assets/images.js";

export default function About() {
  return (
    <>
      <nav className="navbar navbar-expand-lg site-navbar"><div className="container"><Link className="navbar-brand" to="/"><span className="brand-mark">❧</span><span className="brand-name">Root & Harvest</span></Link><button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#aboutNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button><div className="collapse navbar-collapse" id="aboutNav"><ul className="navbar-nav ms-auto align-items-lg-center"><li><Link className="nav-link" to="/">Home</Link></li><li><Link className="nav-link" to="/shop">Shop</Link></li><li><Link className="nav-link" to="/farm-stories">Farm Stories</Link></li><li><Link className="nav-link" to="/seasonal-basket">Seasonal Basket</Link></li><li><Link className="nav-link" to="/organic-guide">Organic Guide</Link></li><li><Link className="nav-link active" to="/about">About</Link></li><li><Link className="nav-cart" to="/cart">Cart</Link></li></ul></div></div></nav>
      <main className="container page-main section-space">
        <header className="page-banner" data-aos="fade-up"><span className="eyebrow">Our roots</span><h1>Good food, grown with intention.</h1><p>Root & Harvest is a farm-inspired organic food store concept built around seasonal ingredients, useful information, and thoughtful everyday shopping.</p></header>
        <section className="story-grid"><img className="story-image" src={img("farm.jpg")} alt="Green farm landscape" /><div className="story-copy"><span className="eyebrow">Our philosophy</span><h2>Make everyday food feel meaningful.</h2><p>We believe food shopping should be clear, welcoming, and inspiring. Our concept brings fresh produce and pantry staples together with information about sourcing and seasonality.</p><p>Explore new ingredients, plan meals, and appreciate the people and places behind the harvest.</p><Link to="/farm-stories" className="btn-organic">Discover farm stories</Link></div></section>
        <section className="section-space"><div className="section-heading"><span className="eyebrow">What guides us</span><h2>Three values at our roots</h2></div><div className="feature-grid">
          <article className="feature-card" data-aos="fade-up"><div className="feature-icon"><i className="bi bi-leaf" /></div><h3>Nature first</h3><p>Celebrate seasonal ingredients and share information about how food is grown.</p></article>
          <article className="feature-card" data-aos="fade-up"><div className="feature-icon"><i className="bi bi-heart" /></div><h3>Everyday wellbeing</h3><p>Make room for varied foods and practical choices that suit different households.</p></article>
          <article className="feature-card" data-aos="fade-up"><div className="feature-icon"><i className="bi bi-recycle" /></div><h3>Less waste</h3><p>Encourage meal planning, careful storage, and using ingredients before they spoil.</p></article>
        </div></section>
        <section className="text-center section-space"><h2>Let's fill your table with good things.</h2><p>Explore the harvest and find ingredients for your next meal.</p><Link to="/shop" className="btn-organic">Shop the harvest</Link></section>
      </main>
      <footer className="site-footer"><div className="footer-brand">Root & Harvest</div><p>A farm-inspired store for thoughtful everyday shopping.</p><div className="footer-links"><Link to="/">Home</Link><Link to="/shop">Shop</Link><Link to="/farm-stories">Farm Stories</Link><Link to="/seasonal-basket">Seasonal Basket</Link><Link to="/organic-guide">Organic Guide</Link></div><div className="footer-socials"><a href="https://www.instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://www.facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div><div className="footer-bottom">© 2026 Root & Harvest. All rights reserved.</div></footer>
    </>
  );
}