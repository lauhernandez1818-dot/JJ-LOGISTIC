export const SITE_NAME = "JJ LOGISTIC | JJ ASOCIADOS";

export const USA_ADDRESS = {
  street: "7950 NW 53RD STREET",
  city: "Doral",
  state: "Miami, Florida",
  zip: "33166",
  full: "7950 NW 53RD STREET, Doral, Miami, Florida 33166",
};

export const VZLA_PORTS = [
  "La Guaira",
  "Maiquetía",
  "Puerto Cabello",
  "Guanta",
] as const;

export const ENTITY_USA = {
  title: "JJ ASOCIADOS LLC",
  location: "Doral, Miami, FL",
  focus: "Logística administrativa, pagos internacionales y contratación global",
  details: [
    "Oficina administrativa en Doral (Virtual Office)",
    "Pagos internacionales y gestión de proveedores",
    "Contratación y coordinación global",
  ],
};

export const ENTITY_VZLA = {
  title: "JJ LOGISTIC PLUS, C.A.",
  location: "Puertos: La Guaira, Maiquetía, Puerto Cabello, Guanta",
  focus: "Agenciamiento aduanal, maquinaria pesada y operaciones locales",
  details: [
    "Agenciamiento aduanal en los principales puertos",
    "Maquinaria pesada y grúas especializadas",
    "Operaciones terrestres y portuarias",
  ],
};

export const SERVICES = [
  {
    id: "customs",
    title: "Agenciamiento Aduanal e Importación",
    description:
      "Gestión integral de despacho aduanero en La Guaira, Maiquetía, Puerto Cabello y Guanta. Documentación, trámites y cumplimiento normativo.",
  },
  {
    id: "machinery",
    title: "Maquinaria Pesada y Grúas Especializadas",
    description:
      "Manejo de equipos industriales, grúas y maquinaria pesada. Logística especializada para proyectos de infraestructura.",
  },
  {
    id: "payments",
    title: "Pagos Internacionales y Gestión de Proveedores",
    description:
      "Desde nuestra oficina en USA: pagos internacionales, gestión de proveedores y coordinación administrativa global.",
  },
  {
    id: "oil",
    title: "Importación de Productos Petroleros y Transporte Especializado",
    description:
      "Importación de productos petroleros y transporte mediante barcazas y buques. Soluciones logísticas para el sector energético.",
  },
  {
    id: "inspection",
    title: "Inspección Técnica Certificada y Escolta de Carga",
    description:
      "Inspección técnica certificada y escolta de carga para garantizar seguridad y trazabilidad en cada envío.",
  },
] as const;

export const NAV_LINKS = [
  { href: "#hero", label: "Inicio" },
  { href: "#dual-hub", label: "Estrategia Dual-Hub" },
  { href: "#servicios", label: "Servicios" },
  { href: "#mapa", label: "Presencia Global" },
  { href: "#contacto", label: "Contacto" },
];

// Hero: impacto, asesoría y confianza
export const HERO_HEADLINE =
  "Asesoría técnica y logística para que su mercancía llegue al país.";
export const HERO_SUBHEADLINE =
  "Dos hubs, un solo estándar: Miami y Venezuela conectados para su cadena de suministro. Con el respaldo de más de 50 años de experiencia y personal cualificado y certificado.";
export const CTA_QUOTE = "Solicitar Cotización";

export const HERO_EXPERIENCE = "Más de 50 años de experiencia";
export const HERO_ADVISORY =
  "Asesoría técnica y logística para que su mercancía llegue al país";
export const HERO_TRUST = "Personal cualificado y certificado";
export const HERO_TRUST_BADGES = [
  "+50 años",
  "Personal certificado",
  "Asesoría de punta a punta",
] as const;

export const DUAL_HUB_TITLE = "Estrategia Dual-Hub";
export const DUAL_HUB_SUBTITLE =
  "La sinergia entre nuestra oficina en Doral (Miami) y las operaciones en los puertos venezolanos nos permite ofrecer asesoría integral de punta a punta para que su mercancía llegue al país.";

export const SERVICES_TITLE = "Servicios Industriales";
export const SERVICES_SUBTITLE =
  "Soluciones logísticas y administrativas para empresas que operan entre USA y Venezuela.";

export const MAP_TITLE = "Presencia Global";
export const MAP_SUBTITLE =
  "Sede en Miami (Doral) y cobertura en los principales puertos de Venezuela.";

export const CONTACT_TITLE = "Solicitar Cotización";
export const CONTACT_SUBTITLE =
  "Completa el formulario y nos pondremos en contacto contigo a la brevedad.";

/** Número venezolano para recibir solicitudes (WhatsApp). Formato: 58 + 424 4633909 */
export const WHATSAPP_CONTACT = "584244633909";

export const MAP_LOCATIONS = [
  {
    id: "usa",
    label: "HQ USA - Doral, FL",
    address: USA_ADDRESS.full,
    coords: { lat: 25.8195, lng: -80.3553 },
  },
  ...VZLA_PORTS.map((port, i) => ({
    id: `vzla-${i}`,
    label: port,
    address: port,
    coords: { lat: 10.6 - i * 0.1, lng: -66.93 + i * 0.2 },
  })),
];
