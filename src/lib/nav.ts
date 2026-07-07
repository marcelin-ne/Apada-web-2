export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Autismo', href: '/autismo' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Red de Apoyo', href: '/red-de-apoyo' },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export const WHATSAPP_URL = 'https://wa.me/593996062600';
export const SITE_URL = 'https://apadadelecuador.org';

export const CONTACT = {
  address: 'Ulpiano Páez y Ramírez Dávalos, Edificio Eiffel, Quito',
  phone: '+593 99 606 2600',
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
