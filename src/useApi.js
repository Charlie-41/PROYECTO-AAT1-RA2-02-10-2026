import { useState, useEffect, useCallback } from 'react';

export function useApi(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const ejecutarPeticion = useCallback(async () => {
    setCargando(true);
    setError(null);

    try {
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}: ${respuesta.statusText || 'Error en la petición'}`);
      }

      const resultado = await respuesta.json();
      setDatos(resultado);
    } catch (err) {
      setError(err.message || 'No se pudo conectar con el servidor.');
    } finally {
      setCargando(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) {
      ejecutarPeticion();
    }
  }, [url, ejecutarPeticion]);

  return {
    datos,
    cargando,
    error,
    recargar: ejecutarPeticion
  };
}