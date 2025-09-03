import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">Websites that resonate</h1>
        <p className="hero-sub">
          Design-led, performance-focused sites crafted with care. I build for clarity,
          speed, and conversion—so your story lands and your business grows.
        </p>
        <div className="hero-cta">
          <Link to="/contact" className="btn btn-primary">start a project</Link>
          <a href="#featured" className="btn btn-ghost">see work</a>
        </div>
      </div>
    </section>
  );
}