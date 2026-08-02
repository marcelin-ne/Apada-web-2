export interface Organizacion {
  id: string;
  nombre: string;
  ciudad: string;
  direccion: string;
  telefono: string;
  telHref: string;
  correo: string;
  descripcion: string;
}

/**
 * Red de fundaciones y organizaciones de apoyo al autismo en Ecuador.
 * Fuente: catálogo público "Red de Fundaciones en torno al Autismo".
 */
export const ORGANIZACIONES: Organizacion[] = [
  {
    id: 'adacapia',
    nombre: 'ADACAPIA',
    ciudad: 'Cuenca',
    direccion: 'Manuel Quiroga #24 y José Vinueza / Cuenca - Ecuador',
    telefono: '0987553641',
    telHref: '0987553641',
    correo: 'adacapiaautismo@gmail.com',
    descripcion: 'La Asociación ADACAPIA AUTISMO es una organización conformada por familias y profesionales comprometidos con el bienestar y el desarrollo integral de las personas autistas.…',
  },
  {
    id: 'fundacion-sendero-azul',
    nombre: 'FUNDACIÓN SENDERO AZUL',
    ciudad: 'Guayaquil',
    direccion: 'Guayaquil',
    telefono: '098 397 8052',
    telHref: '0983978052',
    correo: 'info@fundacionsenderoazul.org',
    descripcion: 'La Fundación Sendero Azul, ubicada en Guayaquil, Ecuador, es una organización sin fines de lucro que apoya a personas con Trastorno del Espectro Autista (TEA) y sus familias. Se…',
  },
  {
    id: 'fundacion-corazones-unidos-por-el-autismo',
    nombre: 'Fundación Corazones Unidos por el Autismo',
    ciudad: 'Azogues',
    direccion: 'Calle Bolivar 5-12, y Solano segundo piso , en la ciudad de Azogues',
    telefono: '098763744 / 0984498269',
    telHref: '098763744',
    correo: 'corazonesunidosporelautismo@gmail.com',
    descripcion: 'Lo que hacemos La Fundación Corazones Unidos por el Autismo es una organización social comprometida con la promoción de los derechos, la inclusión y el desarrollo integral de…',
  },
  {
    id: 'fundacion-el-futuro',
    nombre: 'Fundacion El Futuro',
    ciudad: 'Limon - Morona Santiago',
    direccion: 'Calle Oriente entre Quito y 6 de diciembre (junto a la Notaria de Limon Indanza).',
    telefono: '',
    telHref: '',
    correo: 'fundacionelfuturo@outlook.es',
    descripcion: 'Fundación “El Futuro” es una organización de carácter social y sin fines de lucro dedicada a la atención terapéutica y acompañamiento de niñas, niños, jóvenes, adultos y adultos…',
  },
  {
    id: 'fundacion-manabi-inclusivo',
    nombre: 'Fundación Manabí Inclusivo',
    ciudad: 'Manta',
    direccion: 'Manta',
    telefono: '',
    telHref: '',
    correo: 'doris.jaramillo.zavala@gmail.com',
    descripcion: 'La Fundación Manabí Inclusivo tiene como misión contribuir al mejoramiento de la calidad de vida de niños, adolescentes y adultos con Trastorno del Espectro Autista, así como de…',
  },
  {
    id: 'fundacion-aleluya',
    nombre: 'FUNDACION ALELUYA',
    ciudad: 'Quito',
    direccion: 'Avda. 12 de octubre y Lincoln, Edificio Mirage, 2do piso. Ciudad de Quito',
    telefono: '099 5008109',
    telHref: '0995008109',
    correo: 'inclusioneducativaecuador@gmail.com',
    descripcion: 'La Fundación tiene como ámbito de acción, entre otros: la protección, promoción y defensa de los derechos de los NNA con NEE, asesoramos de forma legal a las familias de niños y…',
  },
  {
    id: 'fundacion-caminos-de-luz-tea',
    nombre: 'Fundación Caminos de Luz Tea',
    ciudad: 'Loja',
    direccion: 'Peñón del Oeste Calle Cofanes y Paraguay - Loja, Ecuador',
    telefono: '0981101533/0989081696',
    telHref: '0981101533',
    correo: 'caminosdeluztea@gmail.com',
    descripcion: 'La Fundación Caminos de Luz TEA Loja nace de la necesidad de brindar apoyo en la ciudad de Loja, Ecuador, a niños, niñas y adolescentes con Trastorno del Espectro Autista (TEA) y…',
  },
  {
    id: 'fundacion-asofatea',
    nombre: 'FUNDACION ASOFATEA',
    ciudad: 'Napo',
    direccion: 'Napo',
    telefono: '+593 99 617 4843',
    telHref: '593996174843',
    correo: 'asofateanapo@gmail.com',
    descripcion: '¿QUIÉNES SOMOS? Fundada oficialmente el 23 de junio de 2023. Compuesta por 30 socios, que buscan visibilizar los derechos de nuestras personas TEA. ACTIVIDADES REALIZADAS:…',
  },
  {
    id: 'appal-loja',
    nombre: 'APPAL-LOJA',
    ciudad: 'Loja',
    direccion: 'LOJA',
    telefono: '0999180813; 0994134585; 0979300787',
    telHref: '0999180813',
    correo: 'sknarcu@yahoo.es',
    descripcion: 'La Asociación de Padres de personas con Autismo-Loja, desde el 5/10/2015 es la 1ra. organización en el sur del país en trabajar por la defensa de los derechos de las personas con…',
  },
  {
    id: 'afan-cotopaxi',
    nombre: 'ASOCIACIÓN FAMILIAS AZULES NEURODIVERGENTE',
    ciudad: 'Latacunga',
    direccion: 'Parroquia Belisario Quevedo, Barrio Guanailin Batallas,',
    telefono: '0987911348 / 0983451915',
    telHref: '0987911348',
    correo: 'familiasazulescotopaxi@hotmail.com',
    descripcion: 'La Asociación Familias Azules Neurodivergentes se dedica a apoyar, orientar y acompañar a las familias de niños, niñas y jóvenes neurodivergentes, promoviendo su inclusión,…',
  },
  {
    id: 'apada-guayas',
    nombre: 'APADA GUAYAS',
    ciudad: 'Guayaquil',
    direccion: 'Montebello, tercera Etapa, MZ 2D , Villa 4 , tercer piso',
    telefono: '0993314648',
    telHref: '0993314648',
    correo: 'apadaec@gmail.com',
    descripcion: 'QUIENES SOMOS Somos madres, padres, familia y amigos de personas con autismo, que construyen puentes de conexión, brindan acompañamiento y comparten experiencias; sembrando…',
  },
  {
    id: 'asonems',
    nombre: 'ASONEMS',
    ciudad: 'Macas - Morona Santiago',
    direccion: 'Macas',
    telefono: '',
    telHref: '',
    correo: '',
    descripcion: '',
  },
  {
    id: 'magicos-colores',
    nombre: 'Mágicos Colores de Paltas',
    ciudad: 'Paltas',
    direccion: 'Cdla. Instituto Obrero, calle “C”, casa techo rojo, Catacocha - Paltas - Loja',
    telefono: '07 268 4442 / 0962794478',
    telHref: '072684442',
    correo: 'magicoscolores05@mail.com',
    descripcion: 'Mágicos Colores de Paltas es una iniciativa comunitaria ubicada en la ciudad de Catacocha, cantón Paltas, provincia de Loja, Ecuador, que nace desde la experiencia familiar y el…',
  },
  {
    id: 'asoupa',
    nombre: 'ASOUPA',
    ciudad: 'Santo Domingo de los Colorados',
    direccion: 'Av Tsafiqui entre Túpac Yupanqui y Santa Maria',
    telefono: '0967631418',
    telHref: '0967631418',
    correo: 'asounidosporelautismo@gmail.com',
    descripcion: 'ASOUPA (Asociación Unidos por el Autismo) es una organización sin fines de lucro que acompaña a familias de niños, niñas y adolescentes con Trastorno del Espectro Autista (TEA),…',
  },
  {
    id: 'san-nicolas',
    nombre: 'SAN NICOLÁS TEA FOUNDATION',
    ciudad: 'Ambato',
    direccion: 'Ingahurco Bajo calle Europa y Dinamarca',
    telefono: '0998058636',
    telHref: '0998058636',
    correo: 'sannicolasteafoundation@gmail.com',
    descripcion: '¿Quiénes somos? La Fundación San Nicolás con sede en la ciudad de Ambato, provincia de Tungurahua, es una organización sin fines de lucro comprometida con el bienestar y…',
  },
  {
    id: 'bocal-amaa',
    nombre: 'BOCAL – AMAA',
    ciudad: '',
    direccion: '',
    telefono: '',
    telHref: '',
    correo: '',
    descripcion: '',
  },
];

export const CIUDADES = Array.from(new Set(ORGANIZACIONES.map((o) => o.ciudad).filter(Boolean))).sort();
