import { BENEFICIOS } from '../datos';

export default function PropuestaValor() {
  return (
    <section className="landing-section">
      <h2 style={{ textAlign: 'center' }}>¿Por qué elegir Charlie Café?</h2>
      <div className="grid-3">
        {BENEFICIOS.map((b) => (
          <div key={b.id} className="card" style={{ textAlign: 'center' }}>
            <div className="card-emoji">{b.icono}</div>
            <h3>{b.titulo}</h3>
            <p>{b.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}