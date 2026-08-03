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
  icon: 'facebook' | 'instagram' | 'twitter' | 'youtube';
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'Twitter / X', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
];
