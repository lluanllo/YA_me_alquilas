export const site = {
  name: 'YaMeAlquilas.com',

  phone: {
    display: '685 710 444',
    tel: 'tel:+34685710444',
  },

  whatsapp: {
    number: '34685710444',
    defaultMessage:
      'Hola YaMeAlquilas 👋 Quiero pedir presupuesto para un porte / alquiler.',
  },

  instagram: 'https://www.instagram.com/yamealquilascom',

  location: {
    city: 'Arganda del Rey',
    region: 'Madrid',
    country: 'España',
  },

  maps: {
    embed:
      'https://www.google.com/maps?q=Arganda+del+Rey,+Madrid,+España&output=embed',

    directions:
      'https://www.google.com/maps/dir/?api=1&destination=Arganda+del+Rey,+Madrid',
  },
};

export function whatsappLink(message = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}