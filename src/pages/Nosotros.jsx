import { Helmet } from 'react-helmet-async';

export default function Nosotros() {
  return (
    <main className="landing-section">
      <Helmet>
        <title>Nuestra Historia | Charlie Café de Origen</title>
        <meta name="description" content="Conoce la historia detrás de Charlie Café de Origen y nuestro compromiso con los productores locales." />
      </Helmet>

      <h1>Sobre Charlie Café de Origen</h1>
      <p style={{ margin: '1rem 0' }}>
        Nacimos en Guatemala con la convicción de que el mejor café del mundo debe disfrutarse fresco en su lugar de origen. Trabajamos mano a mano con pequeños productores locales garantizando un comercio justo.
      </p>
    </main>
  );
}