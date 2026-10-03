import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import PropuestaValor from '../components/PropuestaValor';
import TarjetaProducto from '../components/TarjetaProducto';
import SeccionAPI from '../components/SeccionAPI';
import Confianza from '../components/Confianza';
import CTAFinal from '../components/CTAFinal';
import { PRODUCTOS } from '../datos';

export default function Landing() {
  const destacados = PRODUCTOS.filter((p) => p.destacado);

  return (
    <>
      <Helmet>
        <title>Charlie Café de Origen | Cotiza Café de Especialidad en Guatemala</title>
        <meta name="description" content="Solicita cotización de café de especialidad de Huehuetenango, Antigua y Cobán. Tueste fresco directo a tu hogar o negocio." />
        <link rel="canonical" href="https://charlie-cafe.netlify.app/" />
      </Helmet>

      {/* 1. Hero */}
      <Hero />

      {/* 2. Propuesta de Valor */}
      <PropuestaValor />

      {/* 3. Muestra del Producto (Componente Reutilizable) */}
      <section className="landing-section">
        <h2 style={{ textAlign: 'center' }}>Nuestros Cafés Más Solicitados</h2>
        <div className="grid-3">
          {destacados.map((prod) => (
            <TarjetaProducto key={prod.id} producto={prod} />
          ))}
        </div>
      </section>

      {/* 4. Sección Dinámica con API externa */}
      <SeccionAPI />

      {/* 5. Confianza */}
      <Confianza />

      {/* 6. Llamada a la Acción Final */}
      <CTAFinal />
    </>
  );
}