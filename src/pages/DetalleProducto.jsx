import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PRODUCTOS } from '../datos';

export default function DetalleProducto() {
  const { id } = useParams();
  const producto = PRODUCTOS.find((p) => p.id === Number(id));

  if (!producto) {
    return (
      <main className="landing-section">
        <h2>Producto no encontrado</h2>
        <Link to="/productos" className="btn-cta">Volver al catálogo</Link>
      </main>
    );
  }

  // Schema.org para Datos Estructurados (SEO)
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": producto.nombre,
    "description": producto.descripcion,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GTQ",
      "price": producto.precio,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main className="landing-section">
      <Helmet>
        <title>{`${producto.nombre} | Charlie Café`}</title>
        <meta name="description" content={producto.descripcion} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="card-emoji" style={{ fontSize: '4rem', textAlign: 'center' }}>{producto.emoji}</div>
        <span className="badge">{producto.categoria}</span>
        <h1>{producto.nombre}</h1>
        <p style={{ margin: '1rem 0' }}>{producto.descripcion}</p>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--color-secundario)' }}>Q{producto.precio}.00 GTQ</p>
        
        <div style={{ margin: '1rem 0' }}>
          <strong>Notas de cata:</strong>
          <ul>
            {producto.notas.map((n, i) => <li key={i}>{n}</li>)}
          </ul>
        </div>

        <Link to="/contacto" className="btn-cta" style={{ textAlign: 'center' }}>Solicitar este Café</Link>
      </div>
    </main>
  );
}