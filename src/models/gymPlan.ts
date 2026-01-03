export type GymPlan = {
  id: "initial" | "full" | "family" | "friends" | "personalized" | "daily";
  name: string;
  priceARS: number;
  type: "monthly" | "daily";
  includes: string[];
  restrictions?: string[];
  description?: string;
  frequency: string;
  priceNote?: string;
  conditions?: string;
};

export const gymPlans: GymPlan[] = [
  {
    id: "initial",
    name: "Plan Inicial",
    type: "monthly",

    frequency: "3 veces por semana",
    priceARS: 22000,
    includes: [
      "Musculación",
      "Cardio",
      "Acceso 3 veces por semana",
      "Lunes a sábado",
    ],
    description:
      "Ideal para quienes recién arrancan o complementan con otro deporte.",
  },

  {
    id: "full",
    name: "Plan Full",
    frequency: "Libre",
    priceARS: 28000,
    type: "monthly",
    includes: [
      "Musculación",
      "Cardio",
      "Clases grupales",
      "Acceso ilimitado de lunes a viernes",
      "Sábados por la mañana",
    ],
    description: "Acceso total al gimnasio sin límites.",
  },

  {
    id: "family",
    name: "Promo Familiar",
    frequency: "Libre",
    priceARS: 24000,
    type: "monthly",

    priceNote: "Precio por persona",
    includes: ["Musculación", "Cardio", "Clases grupales", "Acceso ilimitado"],
    conditions:
      "Válido para padres, hijos o hermanos con un familiar ya entrenando o que tambien planee inscribirse en el momento. Todos los miembros participes pagan este precio. Es decir si por ejemplo un padre y dos hijos se inscriben, los tres pagan este precio. Pueden entrar al plan familiar siempre que haya un miembro activo en el plan full. Automaticamente el plan se activa para los dos familiares al momento de la inscripción.",
  },

  {
    id: "friends",
    name: "Promo Amigos",
    frequency: "Primer mes",
    type: "monthly",

    priceARS: 35000,
    priceNote: "Total por los dos",
    includes: ["Inscripción 2x1", "Pagan una cuota y media el primer mes"],
    conditions:
      "Válido solo el primer mes. Luego cada uno continúa con su plan elegido.",
  },

  {
    id: "personalized",
    name: "Plan Personalizado",
    frequency: "Libre",
    type: "monthly",

    priceARS: 50000,
    includes: [
      "Todo lo incluido en el Plan Full",
      "Análisis físico profesional con fotos",
      "Seguimiento mensual del progreso",
      "Rutina personalizada actualizada mensualmente",
      "Plan de alimentación personalizado",
      "Grupo de WhatsApp exclusivo",
      "Atención y control continuo de profesores",
    ],
    description: "Plan premium con seguimiento y atención personalizada.",
  },

  {
    id: "daily",
    name: "Pase Diario",
    frequency: "1 día",
    priceARS: 3500,
    type: "daily",

    includes: ["Acceso por un día"],
    description:
      "Ideal para visitantes o para probar el gimnasio por primera vez.",
  },
];
