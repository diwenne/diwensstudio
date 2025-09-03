import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" aria-label="diwen's studio">
          diwen’s studio<span className="dot">.</span>
        </Link>
        <nav className="nav" aria-label="Main">
          <NavLink to="/" end>home</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </nav>
      </div>
    </header>
  );
}