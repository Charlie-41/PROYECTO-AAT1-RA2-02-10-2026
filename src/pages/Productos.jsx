import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TarjetaProducto from '../components/TarjetaProducto';
import { PRODUCTOS } from '../datos';

export default function Productos() {
  const [categoria, setCategoria] = useState('Todos');

  const filtrados = categoria === 'Todos' 
    ? PRODUCTOS 
    : PRODUCTOS.filter(p => p.categoria === categoria);

  return (
    <main className="landing-section">
      <Helmet>
        <title>Catálogo Completo de Café de Origen | Charlie Café</title>
        <meta name="description" content="Explora nuestra variedad de café en grano, molido y accesorios de preparación." />
        <link rel="canonical" href="https://charlie-cafe.netlify.app/productos" />
      </Helmet>

      <h1>Catálogo de Productos</h1>
      <div style={{ margin: '1.5rem 0', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {['Todos', 'Grano entero', 'Molido', 'Accesorios'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className="btn-cta"
            style={{
              backgroundColor: categoria === cat ? 'var(--color-primario)' : 'var(--color-gris-suave)',
              color: categoria === cat ? 'white' : 'black',
              padding: '0.4rem 1rem',
              fontSize: '0.9rem'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid-3">
        {filtrados.map((prod) => (
          <TarjetaProducto key={prod.id} producto={prod} />
        ))}
      </div>
    </main>
  );
}