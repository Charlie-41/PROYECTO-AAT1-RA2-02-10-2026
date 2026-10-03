import { Helmet } from 'react-helmet-async';
import Formulario from '../components/Formulario';

export default function Contacto() {
  return (
    <main className="landing-section" style={{ maxWidth: '600px' }}>
      <Helmet>
        <title>Contacto y Cotizaciones | Charlie Café</title>
        <meta name="description" content="Ponte en contacto con nosotros para pedidos especiales, cotizaciones o consultas generales." />
      </Helmet>

      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Cotizaciones y Envíos</h1>
      <Formulario />
    </main>
  );
}