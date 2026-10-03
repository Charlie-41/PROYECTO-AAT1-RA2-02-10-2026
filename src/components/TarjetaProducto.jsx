import { Link } from 'react-router-dom';

export default function TarjetaProducto({ producto }) {
  return (
    <div className="card">
      <div>
        <div className="card-emoji">{producto.emoji}</div>
        <span className="badge">{producto.categoria}</span>
        <h3>{producto.nombre}</h3>
        <p style={{ fontSize: '0.9rem', margin: '0.5rem 0' }}>{producto.resumen}</p>
      </div>
      <div>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--color-secundario)' }}>
          Q{producto.precio}.00 GTQ
        </p>
        <Link to={`/productos/${producto.id}`} className="btn-cta" style={{ display: 'block', textAlign: 'center', marginTop: '0.8rem', padding: '0.5rem' }}>
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}