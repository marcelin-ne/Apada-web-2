export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

// Máximo 5 elementos de primer nivel: las páginas relacionadas se agrupan en submenús.
export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Conócenos',
    href: '/nosotros',
    children: [
      { label: 'Nosotros', href: '/nosotros' },
      { label: 'Autismo', href: '/autismo' },
      { label: 'Afíliate', href: '/afiliate' },
    ],
  },
  {
    label: 'Servicios',
    href: '/servicios',
    children: [
      { label: 'Todos los servicios', href: '/servicios' },
      { label: 'Red de Apoyo', href: '/red-de-apoyo' },
    ],
  },
  {
    label: 'Recursos',
    href: '/recursos',
    children: [
      { label: 'Todos los recursos', href: '/recursos' },
      { label: 'Blog', href: '/blog' },
      { label: 'Eventos', href: '/eventos' },
      { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
    ],
  },
  { label: 'Contacto', href: '/contacto' },
];

export const WHATSAPP_URL = 'https://wa.me/593994482885';
export const SITE_URL = 'https://apadadelecuador.org';

export const CONTACT = {
  address: 'Ulpiano Páez y Ramírez Dávalos, Edificio Eiffel, Quito',
  phone: '+593 99 448 2885',
  email: 'info@apadadelecuador.org',
};

export interface SocialLink {
  label: string;
  href: string;
  icon: 'facebook' | 'instagram' | 'youtube' | 'linkedin';
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/search/top?q=aso%20padres%20apada%20del%20ecuador&locale=es_LA',
    icon: 'facebook',
  },
  { label: 'Instagram', href: 'https://www.instagram.com/apadadelecuador/', icon: 'instagram' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Apadadelecuador', icon: 'youtube' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/110457973/', icon: 'linkedin' },
];
