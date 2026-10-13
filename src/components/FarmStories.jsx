import React from "react";
import { Link } from "react-router-dom";
import { img } from "../assets/images.js";

export default function FarmStories() {
  return (
    <>
      <nav className="navbar navbar-expand-lg site-navbar"><div className="container">
        <Link className="navbar-brand" to="/"><span className="brand-mark">❧</span><span className="brand-name">Root & Harvest</span></Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#farmNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="farmNav"><ul className="navbar-nav ms-auto align-items-lg-center">
          <li><Link className="nav-link" to="/">Home</Link></li><li><Link className="nav-link" to="/shop">Shop</Link></li><li><Link className="nav-link active" to="/farm-stories">Farm Stories</Link></li><li><Link className="nav-link" to="/seasonal-basket">Seasonal Basket</Link></li><li><Link className="nav-link" to="/organic-guide">Organic Guide</Link></li><li><Link className="nav-link" to="/about">About</Link></li><li><Link className="nav-cart" to="/cart">Cart</Link></li>
        </ul></div>
      </div></nav>
      <main className="container page-main section-space">
        <header className="page-banner" data-aos="fade-up"><span className="eyebrow">People and place</span><h1>Every harvest has a story.</h1><p>Explore the seasonal rhythms, growing traditions, and careful work behind the food on your table.</p></header>
        <section className="story-grid">
          <img className="story-image" src={img("farm.jpg")} alt="Green farm fields" />
          <div className="story-copy"><span className="eyebrow">01 / The land</span><h2>Healthy soil is where flavour begins.</h2><p>Thoughtful growing starts with patience, observation, and respect for the land. We celebrate farming approaches that pay attention to soil, water, and seasonal conditions.</p><p>Our farm stories help shoppers learn more about where ingredients come from.</p><Link to="/organic-guide" className="btn-organic">Read our organic guide</Link></div>
        </section>
        <section className="section-space"><div className="section-heading"><span className="eyebrow">Our growing values</span><h2>Small choices, meaningful connections</h2></div>
          <div className="feature-grid">
            <article className="feature-card" data-aos="fade-up"><div className="feature-icon"><i className="bi bi-sun" /></div><h3>Seasonal thinking</h3><p>Explore produce that fits the growing season and try ingredients you have not cooked with before.</p></article>
            <article className="feature-card" data-aos="fade-up"><div className="feature-icon"><i className="bi bi-droplet" /></div><h3>Care for resources</h3><p>Soil, water, biodiversity, and long-term land health matter in thoughtful farming.</p></article>
            <article className="feature-card" data-aos="fade-up"><div className="feature-icon"><i className="bi bi-people" /></div><h3>People matter</h3><p>Every harvest represents knowledge and effort from the people who grow our food.</p></article>
          </div>
        </section>
        <section className="story-grid"><div className="story-copy"><span className="eyebrow">02 / The harvest</span><h2>Let the season guide your basket.</h2><p>Discover new ingredients and build a varied basket for your weekly meals.</p><Link to="/seasonal-basket" className="btn-organic">Explore seasonal baskets</Link></div><img className="story-image" src={img("vegetables.jpg")} alt="Freshly harvested vegetables" loading="lazy" /></section>
      </main>
      <footer className="site-footer"><div className="footer-brand">Root & Harvest</div><p>Celebrating the land and the people behind our food.</p><div className="footer-links"><Link to="/">Home</Link><Link to="/shop">Shop</Link><Link to="/seasonal-basket">Seasonal Basket</Link><Link to="/about">About</Link></div><div className="footer-socials"><a href="https://www.instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://www.facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a></div><div className="footer-bottom">© 2026 Root & Harvest. All rights reserved.</div></footer>
    </>
  );
}