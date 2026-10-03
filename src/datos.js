export const PRODUCTOS = [
  {
    id: 1,
    nombre: 'Huehuetenango Especial 340 g',
    categoria: 'Grano entero',
    precio: 85,
    emoji: '☕',
    resumen: 'Altura de 1,900 msnm. Notas cítricas y panela.',
    descripcion: 'Cultivado en las altas montañas de Huehuetenango. Tueste medio artesanal que resalta una acidez brillante y notas dulces a cacao y fruta.',
    notas: ['Naranja', 'Panela', 'Cacao'],
    destacado: true,
  },
  {
    id: 2,
    nombre: 'Antigua Clásico Molido 340 g',
    categoria: 'Molido',
    precio: 78,
    emoji: '🫘',
    resumen: 'Molienda media, perfecto para cafetera tradicional.',
    descripcion: 'Nuestro café insigne del Valle de Panchoy. Cuerpo completo con matices profundos a chocolate oscuro y almendras tostadas.',
    notas: ['Chocolate oscuro', 'Almendra', 'Caramelo'],
    destacado: true,
  },
  {
    id: 3,
    nombre: 'Cobán Orgánico Descafeinado 250 g',
    categoria: 'Grano entero',
    precio: 92,
    emoji: '🌿',
    resumen: 'Proceso de descafeinado al agua, 100% natural.',
    descripcion: 'Procesado mediante agua de montaña para conservar el perfil aromático completo sin residuos químicos. Taza suave y aromática.',
    notas: ['Nuez', 'Miel', 'Vainilla'],
    destacado: false,
  },
  {
    id: 4,
    nombre: 'Prensa Francesa de Cristal 600 ml',
    categoria: 'Accesorios',
    precio: 180,
    emoji: '🫖',
    resumen: 'Vidrio templado y émbolo de acero inoxidable.',
    descripcion: 'Diseño elegante y resistente para extraer el cuerpo y los aceites naturales del café en cada extracción.',
    notas: ['Resistente', 'Vidrio templado'],
    destacado: false,
  }
];

export const BENEFICIOS = [
  { id: 1, icono: '🌱', titulo: 'Origen Trazable', texto: 'Compramos directamente a familias caficultoras de Guatemala.' },
  { id: 2, icono: '🔥', titulo: 'Tueste Fresco', texto: 'Tostamos en lotes pequeños cada semana para garantizar máxima frescura.' },
  { id: 3, icono: '🤝', titulo: 'Comercio Justo', texto: 'Pagamos precios dignos por encima del valor promedio de mercado.' },
];

export const PREGUNTAS_FRECUENTES = [
  { id: 1, q: '¿Hacen envíos a todo el país?', a: 'Sí, entregamos en toda Guatemala en un lapso de 24 a 48 horas.' },
  { id: 2, q: '¿Tienen opciones de molido personalizado?', a: 'Sí, puedes elegir entre molienda para Prensa Francesa, Espresso o Cafetera de Gota.' }
];