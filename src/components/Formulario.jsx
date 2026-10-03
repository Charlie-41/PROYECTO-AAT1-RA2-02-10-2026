import { useState } from 'react';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const err = {};
    if (!nombre.trim()) err.nombre = 'El nombre es obligatorio.';
    if (!correo.trim()) {
      err.correo = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      err.correo = 'Ingresa un correo electrónico válido.';
    }
    if (!mensaje.trim()) err.mensaje = 'Escribe tu consulta o cotización.';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacion = validar();
    setErrores(validacion);

    if (Object.keys(validacion).length === 0) {
      // Envío de evento clave a Google Analytics 4 (RF-09)
      if (window.gtag) {
        window.gtag('event', 'enviar_formulario_contacto', {
          metodo: 'formulario_web',
          cliente_nombre: nombre,
        });
      }

      setEnviado(true);
      setNombre('');
      setCorreo('');
      setMensaje('');
    }
  };

  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--sombra-tarjeta)' }}>
      {enviado && (
        <div className="mensaje-exito">
          ✅ ¡Gracias por comunicarte con Charlie Café! Hemos recibido tu solicitud y te responderemos en breve.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grupo">
          <label htmlFor="nombre">Nombre Completo *</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errores.nombre && <span className="error-texto">{errores.nombre}</span>}
        </div>

        <div className="form-grupo">
          <label htmlFor="correo">Correo Electrónico *</label>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          {errores.correo && <span className="error-texto">{errores.correo}</span>}
        </div>

        <div className="form-grupo">
          <label htmlFor="mensaje">Detalle de Cotización o Pedido *</label>
          <textarea
            id="mensaje"
            rows="4"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          {errores.mensaje && <span className="error-texto">{errores.mensaje}</span>}
        </div>

        <button type="submit" className="btn-cta" style={{ width: '100%' }}>
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
}