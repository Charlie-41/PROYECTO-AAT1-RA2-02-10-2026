import { PREGUNTAS_FRECUENTES } from '../datos';

export default function Confianza() {
  return (
    <section className="landing-section">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Garantía de Calidad y Confianza</h2>
      
      <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3>Nuestra Promesa</h3>
        <p>Si tu café no llega con una fecha de tueste menor a 8 días o sufres algún inconveniente con la molienda, te reemplazamos el producto de forma inmediata sin costo adicional.</p>
      </div>

      <h3>Preguntas Frecuentes</h3>
      <div style={{ marginTop: '1rem' }}>
        {PREGUNTAS_FRECUENTES.map((faq) => (
          <div key={faq.id} style={{ marginBottom: '1rem' }}>
            <strong>{faq.q}</strong>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}