export const SITE_NAME = "J.J LOGISTICS C.A";
export const TAGLINE = "Asesoría USA y Venezuela";

/** URL pública del sitio (para og:image, etc.). Sobrescribir con NEXT_PUBLIC_SITE_URL si usas dominio propio. */
export const SITE_URL = "https://jj-logistic.vercel.app";

/** Logo en la barra: solo el logo (JL + nombre). Ruta: "/logo.png". Si está vacío se muestra el nombre en texto. */
export const BRAND_LOGO_PATH = "/logo.png";

/** Imagen para Open Graph (WhatsApp, redes): 1200x630px. Ruta: "/logo-share.png". */
export const OG_IMAGE_PATH = "/logo-share.png";

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
  title: "J.J LOGISTICS C.A.",
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
    title: "Contratación de Agenciamiento Aduanal",
    description:
      "La Guaira, Maiquetía, Puerto Cabello y Guanta. Gestión integral de despacho aduanero, documentación y cumplimiento normativo.",
    image: "/services/AgenciamientoA.png",
  },
  {
    id: "import",
    title: "Logísticas de Importación",
    description:
      "Todo lo relacionado con la inspección y trámites de importación desde la llegada a costado de buque o avión hasta la entrega final en el almacén que el cliente asigne.",
    image: "/services/LogisticaD.png",
  },
  {
    id: "machinery",
    title: "Maquinaria Pesada y Grúas",
    description:
      "Contratación de maquinarias pesadas de todo tipo. Grúas para grandes y pequeñas dimensiones. Montacargas.",
    image: "/services/MaquinariaP.png",
  },
  {
    id: "transport",
    title: "Transporte Terrestre y Marítimo",
    description:
      "Todo tipo de traslado. Carga pesada, larga y extra-larga. Marítimas: gabarras, barcos según dimensiones.",
    image: "/services/terrestre.png",
  },
  {
    id: "oil",
    title: "Importación de todo tipo de productos",
    description:
      "Importación de todo tipo de productos y transporte especializado. Soluciones logísticas para su cadena de suministro.",
    image: "/services/ProductosP.png",
  },
  {
    id: "shipping",
    title: "Contratación de Navieras",
    description:
      "Trámites de traslados marítimos y aéreos a nivel mundial. Coordinación con navieras para su cadena de suministro.",
    image: "/services/ContratacionD.png",
  },
  {
    id: "inspection",
    title: "Escolta de Cargas e Inspección Técnica Certificada",
    description:
      "Escolta de cargas marítimas y terrestres. Inspección de recepción en puertos y aeropuertos, verificación documental y física, certificación de entrega al usuario final e informes conforme a normas aplicables.",
    image: "/services/EscoltaD.png",
  },
] as const;

export const NAV_LINKS = [
  { href: "#hero", label: "Inicio" },
  { href: "#rif", label: "RIF" },
  { href: "#objetivo", label: "Objetivo" },
  { href: "#dual-hub", label: "Estrategia Dual-Hub" },
  { href: "#servicios", label: "Servicios" },
  { href: "#mapa", label: "Presencia Global" },
  { href: "#marca", label: "Nuestra marca" },
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

/** RIF: PDF en public. Nombre del archivo debe coincidir (mayúsculas/minúsculas en Vercel). */
export const RIF_PDF_PATH = "/RIF.pdf";
export const RIF_SECTION_TITLE = "RIF";
export const RIF_SECTION_SUBTITLE = "Registro de Información Fiscal. Documento oficial de la empresa.";
export const RIF_BUTTON_LABEL = "Ver RIF";

export const CONTACT_TITLE = "Solicitar Cotización";
export const CONTACT_SUBTITLE =
  "Completa el formulario y nos pondremos en contacto contigo a la brevedad.";

/** Número venezolano para recibir solicitudes (WhatsApp). Formato: 58 + 424 4633909 */
export const WHATSAPP_CONTACT = "584244633909";

// Sección Objetivo (texto oficial Marjorie Parra)
export const OBJECTIVE_TITLE = "Nuestro objetivo";
export const OBJECTIVE_LEAD =
  "Nuestro objetivo es gestionar las logísticas de empresas internacionales en Venezuela, de la mano de JJ Asociados LLC quien se encarga de la parte administrativa, y ejecutar las operaciones que se describen a continuación.";
export const OBJECTIVE_ITEMS = [
  "Contratación de Agenciamiento Aduanal en La Guaira, Maiquetía, Puerto Cabello y Guanta.",
  "Logísticas de Importación: inspección y trámites desde la llegada a costado de buque o avión hasta la entrega final en el almacén que el cliente asigne.",
  "Contratación de maquinarias pesadas de todo tipo. Grúas para grandes y pequeñas dimensiones. Montacargas.",
  "Contratación de Transporte Terrestre y Marítimo para todo tipo de traslado. Carga pesada, larga y extra-larga. Gabarras y barcos según dimensiones.",
  "Importación de todo tipo de productos.",
  "Contratación de Navieras para trámites de traslados marítimos y aéreos a nivel mundial.",
  "Escolta de Cargas tanto marítimas como terrestres.",
  "Inspección técnica y certificada: recepción en puertos y aeropuertos, verificación documental y física, control de cantidades y conformidad, seguimiento durante transporte y almacenamiento, certificación de entrega al usuario final e informes conforme a normas aplicables.",
] as const;
export const OBJECTIVE_CLOSING =
  "Contamos con aliados comerciales en toda la cadena de suministros.";

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
