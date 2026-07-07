export interface Profesional {
  id: string;
  nombre: string;
  especialidad: string;
  ciudad: string;
  modalidad: 'Presencial' | 'Virtual' | 'Presencial y virtual';
  edadAtendida: string;
  contacto: string;
  descripcion: string;
}

/**
 * Datos de ejemplo. Pendiente de reemplazar por el directorio real de
 * profesionales/centros aliados que APADA vaya confirmando.
 */
export const PROFESIONALES: Profesional[] = [
  {
    id: 'p1',
    nombre: 'Centro Terapéutico Crecer',
    especialidad: 'Terapia de lenguaje',
    ciudad: 'Quito',
    modalidad: 'Presencial y virtual',
    edadAtendida: 'Niños y adolescentes',
    contacto: 'https://wa.me/593990000001',
    descripcion: 'Terapia de lenguaje y comunicación aumentativa para niños y adolescentes con TEA.',
  },
  {
    id: 'p2',
    nombre: 'Lic. María José Andrade',
    especialidad: 'Terapia ocupacional',
    ciudad: 'Quito',
    modalidad: 'Presencial',
    edadAtendida: 'Niños',
    contacto: 'https://wa.me/593990000002',
    descripcion: 'Integración sensorial y desarrollo de habilidades motoras finas y gruesas.',
  },
  {
    id: 'p3',
    nombre: 'Psic. Daniel Vega',
    especialidad: 'Psicología',
    ciudad: 'Guayaquil',
    modalidad: 'Presencial y virtual',
    edadAtendida: 'Adolescentes y adultos',
    contacto: 'https://wa.me/593990000003',
    descripcion: 'Acompañamiento psicológico individual y a familias de personas autistas.',
  },
  {
    id: 'p4',
    nombre: 'Centro Vínculo TEA',
    especialidad: 'Apoyo conductual',
    ciudad: 'Guayaquil',
    modalidad: 'Presencial',
    edadAtendida: 'Todas las edades',
    contacto: 'https://wa.me/593990000004',
    descripcion: 'Análisis conductual aplicado (ABA) y desarrollo de autonomía funcional.',
  },
  {
    id: 'p5',
    nombre: 'Dra. Paulina Rosales',
    especialidad: 'Neurología pediátrica',
    ciudad: 'Cuenca',
    modalidad: 'Presencial',
    edadAtendida: 'Niños',
    contacto: 'https://wa.me/593990000005',
    descripcion: 'Evaluación neurológica y seguimiento del proceso diagnóstico.',
  },
  {
    id: 'p6',
    nombre: 'Fundación Aprender Distinto',
    especialidad: 'Educación especial',
    ciudad: 'Cuenca',
    modalidad: 'Presencial y virtual',
    edadAtendida: 'Niños y adolescentes',
    contacto: 'https://wa.me/593990000006',
    descripcion: 'Capacitación docente y acompañamiento pedagógico para inclusión escolar.',
  },
  {
    id: 'p7',
    nombre: 'Lic. Andrea Suárez',
    especialidad: 'Terapia de lenguaje',
    ciudad: 'Quito',
    modalidad: 'Virtual',
    edadAtendida: 'Adultos',
    contacto: 'https://wa.me/593990000007',
    descripcion: 'Comunicación funcional y habilidades sociales para adultos autistas.',
  },
  {
    id: 'p8',
    nombre: 'Abg. Carlos Iza',
    especialidad: 'Asesoría legal',
    ciudad: 'Quito',
    modalidad: 'Presencial y virtual',
    edadAtendida: 'Todas las edades',
    contacto: 'https://wa.me/593990000008',
    descripcion: 'Asesoría en calificación de discapacidad y derechos laborales y educativos.',
  },
];

export const CIUDADES = Array.from(new Set(PROFESIONALES.map((p) => p.ciudad))).sort();
export const ESPECIALIDADES = Array.from(new Set(PROFESIONALES.map((p) => p.especialidad))).sort();
export const MODALIDADES: Profesional['modalidad'][] = ['Presencial', 'Virtual', 'Presencial y virtual'];
