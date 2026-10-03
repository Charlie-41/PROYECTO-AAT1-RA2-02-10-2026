import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <h1>Café de Especialidad Tostado Semanalmente en Guatemala</h1>
      <p>Sabor único, tueste fresco y origen 100% trazable directamente de pequeños caficultores a tu taza.</p>
      <Link to="/contacto" className="btn-cta">Solicitar Cotización / Pedido</Link>
    </section>
  );
}