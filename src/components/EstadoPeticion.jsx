export default function EstadoPeticion({ cargando, error, vacio, alReintentar }) {
  if (cargando) {
    return (
      <div className="estado-contenedor">
        <div className="spinner"></div>
        <p>Cargando información en vivo desde el servidor...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="estado-contenedor" style={{ borderColor: 'var(--color-error)' }}>
        <p style={{ color: 'var(--color-error)', fontWeight: 'bold' }}>❌ Hubo un problema al cargar los datos.</p>
        <p style={{ fontSize: '0.9rem', margin: '0.5rem 0' }}>{error}</p>
        <button onClick={alReintentar} className="btn-cta" style={{ marginTop: '0.5rem' }}>
          🔄 Reintentar Conexión
        </button>
      </div>
    );
  }

  if (vacio) {
    return (
      <div className="estado-contenedor">
        <p>📭 No hay publicaciones o novedades disponibles en este momento.</p>
      </div>
    );
  }

  return null;
}