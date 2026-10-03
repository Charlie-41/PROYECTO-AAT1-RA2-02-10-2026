import { Link } from 'react-router-dom';

export default function CTAFinal() {
  return (
    <section className="landing-section" style={{ textAlign: 'center', backgroundColor: 'var(--color-primario)', color: 'white', borderRadius: '8px' }}>
      <h2>¿Listo para Disfrutar del Mejor Café de Guatemala?</h2>
      <p style={{ margin: '1rem 0 1.5rem 0' }}>Haz tu pedido o cotización hoy y recibe tueste fresco directo a tu puerta.</p>
      <Link to="/contacto" className="btn-cta">Solicitar Cotización Ahora</Link>
    </section>
  );
}