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
