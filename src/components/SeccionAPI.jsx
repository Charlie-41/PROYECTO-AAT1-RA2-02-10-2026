import { useApi } from "../useApi";
import EstadoPeticion from './EstadoPeticion';
import TarjetaDato from './TarjetaDato';

export default function SeccionAPI() {
  // Consumo de la API externa JSONPlaceholder (limitado a 3 items)
  const { datos, cargando, error, reintentar } = useApi('https://jsonplaceholder.typicode.com/posts?_limit=3');

  const esVacio = datos && datos.length === 0;

  return (
    <section className="landing-section" style={{ backgroundColor: '#efe7d5', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>📰 Noticias y Actualizaciones en Vivo del Gremio</h2>
      <p style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        Información consumida en tiempo real desde nuestra API externa.
      </p>

      <EstadoPeticion cargando={cargando} error={error} vacio={esVacio} alReintentar={reintentar} />

      {!cargando && !error && !esVacio && (
        <div className="grid-3">
          {datos.map((post) => (
            <TarjetaDato key={post.id} dato={post} />
          ))}
        </div>
      )}
    </section>
  );
}