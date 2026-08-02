export interface FaqCategory {
  id: string;
  label: string;
}

export interface FaqItem {
  id: string;
  category: string;
  /** 1 = la pregunta más repetida dentro de su categoría */
  popularity: number;
  question: string;
  answer: string;
  /** Selección corta para el bloque de Home */
  featured?: boolean;
}

// Categorías ordenadas por qué tan seguido aparece el tema en la comunidad
// (a partir del análisis temático de preguntas reales de familias de APADA).
export const FAQ_CATEGORIES: FaqCategory[] = [
  { id: 'servicios', label: 'Dónde encontrar servicios' },
  { id: 'terapias', label: 'Terapias y tratamientos' },
  { id: 'derechos', label: 'Carnet y derechos' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'educacion', label: 'Educación e inclusión' },
  { id: 'vida-diaria', label: 'Rutinas y vida diaria' },
  { id: 'apoyo-emocional', label: 'Apoyo emocional' },
];

export const FAQ_ITEMS: FaqItem[] = [
  // Dónde encontrar servicios
  {
    id: 'servicios-1',
    category: 'servicios',
    popularity: 1,
    featured: true,
    question: '¿Cómo encuentro terapeutas o centros especializados cerca de mí?',
    answer:
      'Es la pregunta que más se repite en la comunidad. En APADA reunimos esa información en nuestra Red de Apoyo, un directorio filtrable por ciudad y especialidad, para que no tengas que empezar de cero preguntando en redes sociales cada vez.',
  },
  {
    id: 'servicios-2',
    category: 'servicios',
    popularity: 2,
    question: '¿Hay servicios fuera de Quito y Guayaquil?',
    answer:
      'Sí, aunque la oferta suele ser más limitada en ciudades pequeñas. Usa el filtro de ciudad en la Red de Apoyo y, si no encuentras nada en tu zona, escríbenos por WhatsApp: te ayudamos a buscar alternativas, incluida la atención en línea.',
  },
  {
    id: 'servicios-3',
    category: 'servicios',
    popularity: 3,
    question: '¿Cómo sé si un centro o profesional es confiable?',
    answer:
      'Verifica que la persona esté colegiada o registrada, pide referencias de otras familias y prioriza a quienes trabajan con un plan individualizado basado en una evaluación previa, no un programa genérico. APADA no certifica proveedores externos, pero podemos ayudarte a preparar las preguntas clave para tu primera cita.',
  },

  // Terapias y tratamientos
  {
    id: 'terapias-1',
    category: 'terapias',
    popularity: 1,
    featured: true,
    question: '¿Qué tipos de terapia existen para el autismo?',
    answer:
      'Las que más se mencionan son terapia de lenguaje, ocupacional y enfoques conductuales como ABA o Denver. No existe una única terapia "correcta" para todos los casos: lo ideal es partir de una evaluación que identifique las necesidades específicas de cada persona.',
  },
  {
    id: 'terapias-2',
    category: 'terapias',
    popularity: 2,
    question: '¿Cómo elijo entre ABA, Denver u otro enfoque?',
    answer:
      'Cada enfoque tiene una filosofía distinta —más estructurado frente a más basado en el juego— y muchas familias terminan combinando más de uno según la etapa. Conversa con el equipo que hizo el diagnóstico y, si puedes, observa una sesión antes de decidir.',
  },
  {
    id: 'terapias-3',
    category: 'terapias',
    popularity: 3,
    question: '¿Suplementos como melatonina o DHA ayudan?',
    answer:
      'Es uno de los temas que más dudas genera, sobre todo por el sueño. Ningún suplemento debería iniciarse sin la indicación de un médico: lo que funciona para un niño o niña no es automáticamente seguro o útil para otro.',
  },
  {
    id: 'terapias-4',
    category: 'terapias',
    popularity: 4,
    question: '¿Las terapias las cubre el seguro?',
    answer:
      'Depende de la aseguradora y del tipo de terapia; algunas pólizas privadas cubren una parte. Te recomendamos confirmar por escrito con tu seguro antes de iniciar, y revisar también qué cobertura aplica por el IESS si tienes afiliación.',
  },

  // Carnet de discapacidad y derechos
  {
    id: 'derechos-1',
    category: 'derechos',
    popularity: 1,
    featured: true,
    question: '¿Cómo se obtiene el carnet de discapacidad (CONADIS)?',
    answer:
      'Se tramita en un establecimiento de salud público (MSP o IESS) mediante una evaluación de calificación de discapacidad. El diagnóstico de un profesional es el primer paso; con ese informe, el sistema de salud agenda la valoración que determina el porcentaje y emite el carnet.',
  },
  {
    id: 'derechos-2',
    category: 'derechos',
    popularity: 2,
    question: '¿Qué beneficios tiene el carnet de discapacidad?',
    answer:
      'Entre los más mencionados por las familias están las rebajas tributarias, la prioridad en atención, y para quien trabaja y cuida a la persona con discapacidad, dos horas de permiso laboral remunerado. Los beneficios exactos dependen del porcentaje de discapacidad asignado.',
  },
  {
    id: 'derechos-3',
    category: 'derechos',
    popularity: 3,
    question: '¿El carnet se renueva o el porcentaje puede cambiar?',
    answer:
      'El carnet no tiene una fecha de caducidad fija en la mayoría de los casos, pero el porcentaje puede reevaluarse con el tiempo. Si el carnet se daña o se pierde, se solicita un duplicado en las mismas oficinas donde se emitió.',
  },
  {
    id: 'derechos-4',
    category: 'derechos',
    popularity: 4,
    question: '¿Un diagnóstico privado sirve para tramitar el carnet público?',
    answer:
      'Sí, un diagnóstico hecho por un profesional privado es un respaldo válido, pero de todas formas se debe pasar por el proceso de calificación del sistema de salud público para obtener el carnet oficial.',
  },

  // Diagnóstico
  {
    id: 'diagnostico-1',
    category: 'diagnostico',
    popularity: 1,
    featured: true,
    question: '¿A qué edad se puede diagnosticar el autismo?',
    answer:
      'Se pueden observar señales desde el primer año de vida, y muchos diagnósticos formales se confirman entre los 2 y 3 años, aunque también hay diagnósticos en la adolescencia o en la adultez. A edades muy tempranas, algunos profesionales prefieren hablar de "señales de alerta" antes que de un diagnóstico cerrado.',
  },
  {
    id: 'diagnostico-2',
    category: 'diagnostico',
    popularity: 2,
    question: '¿Qué evaluaciones se usan para diagnosticar?',
    answer:
      'Las que más se mencionan son ADOS-2 y ADI-R, aplicadas por profesionales entrenados, junto con evaluaciones del desarrollo cognitivo y del lenguaje. Un diagnóstico completo suele combinar varias herramientas, no una sola prueba.',
  },
  {
    id: 'diagnostico-3',
    category: 'diagnostico',
    popularity: 3,
    question: 'Un profesional no acepta el informe de otro, ¿es normal?',
    answer:
      'Es una situación que varias familias han vivido, sobre todo al cambiar de institución. Cada profesional puede pedir su propia valoración, aunque un informe previo completo debería agilizar el proceso. Si te ocurre, pide que te expliquen por escrito qué información falta en el informe anterior.',
  },

  // Educación e inclusión
  {
    id: 'educacion-1',
    category: 'educacion',
    popularity: 1,
    featured: true,
    question: '¿Cómo elijo un colegio inclusivo?',
    answer:
      'Busca instituciones con experiencia real en adaptaciones curriculares —no solo la palabra "inclusivo" en su publicidad—, pregunta cómo trabajan con el Departamento de Consejería Estudiantil (DECE) y si aceptan un plan de apoyo individual.',
  },
  {
    id: 'educacion-2',
    category: 'educacion',
    popularity: 2,
    question: '¿Es mejor un colegio público o privado?',
    answer:
      'No hay una respuesta única: depende del acompañamiento real que ofrezca cada institución, no del tipo de financiamiento. Visita el colegio, pregunta por experiencias previas con estudiantes con TEA y presta atención a la actitud del equipo docente.',
  },
  {
    id: 'educacion-3',
    category: 'educacion',
    popularity: 3,
    question: '¿Qué hago si mi hijo o hija no quiere entrar a clases?',
    answer:
      'Es una de las preocupaciones más compartidas por las familias. Antes de forzar la rutina, vale la pena identificar si hay un desencadenante sensorial o de ansiedad puntual, y trabajarlo junto con el colegio y el equipo terapéutico.',
  },

  // Rutinas y vida diaria
  {
    id: 'vida-diaria-1',
    category: 'vida-diaria',
    popularity: 1,
    question: '¿Cómo puedo ayudar con las rutinas de sueño?',
    answer:
      'Establecer horarios fijos y una rutina visual antes de dormir es lo que más recomienda la comunidad. Si las dificultades persisten, es válido consultar con un profesional de salud antes de recurrir a cualquier suplemento.',
  },
  {
    id: 'vida-diaria-2',
    category: 'vida-diaria',
    popularity: 2,
    featured: true,
    question: '¿Cómo manejo un berrinche o una crisis en público?',
    answer:
      'Es una pregunta constante entre las familias. Mantener la calma, reducir estímulos (ruido, luz, gente) y tener a mano alguna herramienta sensorial —audífonos, un objeto conocido— ayuda en la mayoría de los casos. No hay una fórmula única: conocer las señales previas de tu hijo o hija es la mejor prevención.',
  },
  {
    id: 'vida-diaria-3',
    category: 'vida-diaria',
    popularity: 3,
    question: 'Mi hijo es muy selectivo con la comida, ¿qué puedo hacer?',
    answer:
      'La selectividad alimentaria es muy común y suele estar ligada a sensibilidad sensorial (texturas, colores, olores). Introducir alimentos nuevos de a poco y sin presión, y consultar con un especialista en alimentación si te preocupa la nutrición, son los caminos que más comparten otras familias.',
  },

  // Apoyo emocional
  {
    id: 'apoyo-emocional-1',
    category: 'apoyo-emocional',
    popularity: 1,
    question: 'Me siento sola o solo en este proceso, ¿qué puedo hacer?',
    answer:
      'Es uno de los sentimientos más compartidos en la comunidad, sobre todo al principio. Conectar con otras familias que viven lo mismo —en nuestra Red de Apoyo o en nuestros encuentros presenciales— ayuda a sentir que no caminas sola.',
  },
  {
    id: 'apoyo-emocional-2',
    category: 'apoyo-emocional',
    popularity: 2,
    question: '¿Cómo hablo del autismo con el resto de la familia?',
    answer:
      'Compartir información clara e invitar a que participen del día a día suele funcionar mejor que "explicar" en abstracto. Nuestro blog y nuestros recursos también están pensados para compartirlos con familiares que quieren entender mejor.',
  },
];

export function getFeaturedFaq(limit = 6): FaqItem[] {
  return FAQ_ITEMS.filter((item) => item.featured).slice(0, limit);
}
