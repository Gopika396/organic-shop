
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../App.jsx";

const img = (name) => `/src/assets/image/${name}`;

const products = [
  { id: 1, name: "Red Apples", price: 180, unit: "1 kg", image: "apples.jpg", desc: "Crisp and naturally sweet." },
  { id: 2, name: "Garden Greens", price: 90, unit: "bunch", image: "greens.jpg", desc: "Fresh leafy vegetables." },
  { id: 3, name: "Heirloom Tomatoes", price: 75, unit: "500 g", image: "tomatoes.jpg", desc: "Juicy kitchen favourites." },
  { id: 4, name: "Organic Carrots", price: 65, unit: "500 g", image: "carrots.jpg", desc: "Sweet roots for everyday meals." }
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg site-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/"><span className="brand-mark"><i className="bi bi-flower1" /></span><span className="brand-name">Root & Harvest</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#homeNav" aria-controls="homeNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="homeNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li><Link className="nav-link active" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/shop">Shop</Link></li>
            <li><Link className="nav-link" to="/farm-stories">Farm Stories</Link></li>
            <li><Link className="nav-link" to="/seasonal-basket">Seasonal Basket</Link></li>
            <li><Link className="nav-link" to="/organic-guide">Organic Guide</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li className="ms-lg-2"><Link className="nav-cart" to="/cart"><i className="bi bi-basket2" /> Cart</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">Root & Harvest</div>
      <p>Good food begins with good soil. Discover thoughtful ingredients for your everyday table.</p>
      <div className="footer-links">
        <Link to="/">Home</Link><Link to="/shop">Shop</Link><Link to="/farm-stories">Our Farms</Link><Link to="/seasonal-basket">Seasonal Basket</Link><Link to="/about">About</Link>
      </div>
      <div className="footer-socials">
        <a href="https://www.instagram.com/" aria-label="Instagram"><i className="bi bi-instagram" /></a>
        <a href="https://www.facebook.com/" aria-label="Facebook"><i className="bi bi-facebook" /></a>
        <a href="https://www.pinterest.com/" aria-label="Pinterest"><i className="bi bi-pinterest" /></a>
      </div>
      <div className="footer-bottom">© 2026 Root & Harvest. Naturally good, every day.</div>
    </footer>
  );
}

export default function Home() {
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />
      <main className="container page-main">
        <section className="hero-section">
          <div className="hero-panel" data-aos="fade-up">
            <div className="hero-copy">
              <span className="eyebrow">Fresh from the earth</span>
              <h1>Bring home a little more nature.</h1>
              <p>Discover seasonal produce, wholesome pantry staples, and farm-inspired favourites chosen with care.</p>
              <Link to="/shop" className="btn-organic">Shop the harvest <i className="bi bi-arrow-right" /></Link>
            </div>
            <img className="hero-image" src={img("hero.jpg")} alt="Fresh organic food and vegetables" />
          </div>
        </section>

        <section className="section-space">
          <div className="section-heading" data-aos="fade-up">
            <span className="eyebrow">Shop by nature</span>
            <h2>Goodness in every category</h2>
            <p>Everyday essentials for a naturally inspired kitchen.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card" data-aos="fade-up"><div className="feature-icon"><i className="bi bi-apple" /></div><h3>Fresh fruits</h3><p>Colourful fruit for breakfast, snacks, and desserts.</p><Link to="/shop" className="text-link">Explore fruits →</Link></article>
            <article className="feature-card" data-aos="fade-up"><div className="feature-icon"><i className="bi bi-flower2" /></div><h3>Garden vegetables</h3><p>Seasonal vegetables for salads and home cooking.</p><Link to="/shop" className="text-link">Explore vegetables →</Link></article>
            <article className="feature-card" data-aos="fade-up"><div className="feature-icon"><i className="bi bi-basket2" /></div><h3>Harvest baskets</h3><p>Curated combinations to inspire your weekly meals.</p><Link to="/seasonal-basket" className="text-link">Find a basket →</Link></article>
          </div>
        </section>

        <section className="section-space">
          <div className="section-heading">
            <span className="eyebrow">Picked for you</span>
            <h2>Today's fresh favourites</h2>
            <p>Simple ingredients for meals that feel good.</p>
          </div>
          <div className="product-grid">
            {products.map((p) => (
              <article className="product-card" key={p.id} data-aos="fade-up">
                <img src={img(p.image)} alt={p.name} loading="lazy" />
                <div className="product-info">
                  <h3>{p.name}</h3><p>{p.desc}</p>
                  <div className="product-bottom">
                    <strong className="product-price">₹{p.price} <small>/{p.unit}</small></strong>
                    <button className="add-btn" onClick={() => addToCart(p)} type="button">Add to cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-4"><Link to="/shop" className="btn-organic">Explore all products</Link></div>
        </section>

        <section className="section-space">
          <div className="story-grid">
            <img className="story-image" src={img("farm.jpg")} alt="Green farm fields" loading="lazy" />
            <div className="story-copy">
              <span className="eyebrow">From field to table</span>
              <h2>Know where your food begins.</h2>
              <p>Discover the growing values, seasonal rhythms, and people behind the harvest.</p>
              <Link to="/farm-stories" className="btn-organic">Meet the growers</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
