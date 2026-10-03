export default function TarjetaDato({ dato }) {
  return (
    <div className="card" style={{ borderLeft: '4px solid var(--color-secundario)' }}>
      <span className="badge">Novedad #{dato.id}</span>
      <h4 style={{ textTransform: 'capitalize', margin: '0.4rem 0' }}>{dato.title}</h4>
      <p style={{ fontSize: '0.88rem', color: '#555' }}>{dato.body}</p>
    </div>
  );
}