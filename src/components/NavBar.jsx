import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        ☕ Charlie Café
      </Link>
      <nav>
        <ul className="navbar-links">
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/productos">Productos</NavLink></li>
          <li><NavLink to="/nosotros">Nosotros</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}