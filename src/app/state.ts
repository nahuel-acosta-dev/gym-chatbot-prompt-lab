import { gymPlans, type GymPlan } from "../models/gymPlan";
import { staff, type GymStaff } from "../models/staff";
import {
  trainingPrograms,
  type TrainingSessionTemplate,
} from "../models/trainingPrograms";

export type NutritionGoalId = "bulk" | "cut" | "maintain";

export type NutritionMealKey =
  | "breakfast"
  | "lunch"
  | "snack"
  | "postWorkout"
  | "dinner";

export type NutritionExampleDay = Partial<Record<NutritionMealKey, string[]>>;

export type NutritionGuide = {
  id: NutritionGoalId;
  title: string;
  subtitle?: string;
  goalSummary: string;
  exampleDay: NutritionExampleDay;
  considerations?: string[];
  disclaimer?: string;
};

export type GymLocation = {
  id: "jcp";
  name: string;
  address: string;
  hours: {
    mon_fri: string;
    sat: string;
    sun: string;
  };
  phone?: string;
  notes?: string[];
};

export type GymRules = {
  entry: string[];
  hygiene: string[];
  payments: string[];
  safety: string[];
  equipment: string[];
  behavior: string[];
};

export type GymSocialPlatform = "instagram" | "tiktok";

export type GymSocialAccount = {
  platform: GymSocialPlatform;
  handle: string; // sin @
  label?: string; // "Dueño", "Gimnasio", etc.
};

export type GymContact = {
  daysOpen: string; // "Lunes a sábado"
  generalHours: string; // "07:00–22:00"
  socials: GymSocialAccount[];
};

export type GymConfig = {
  gymName: string;
  timezone: string; // IANA
  currency: "ARS";
  locations: GymLocation[];
  plans: GymPlan[];
  rules: GymRules;
  faqs: Array<{ q: string; a: string }>;

  nutritionGuides: NutritionGuide[];
  trainingPrograms: TrainingSessionTemplate[];

  contact: GymContact;
  staff: GymStaff;
};

export const gymConfig: GymConfig = {
  gymName: "El Aguante",
  timezone: "America/Argentina/Buenos_Aires",
  currency: "ARS",
  locations: [
    {
      id: "jcp",
      name: "Sede José C. Paz",
      address: "Av. Principal 1234, José C. Paz",
      hours: {
        mon_fri: "07:00–22:00",
        sat: "09:00–14:00",
        sun: "Cerrado",
      },
      phone: "+54 11 5555-1111",
      notes: ["Ingreso con DNI.", "Casilleros disponibles (candado propio)."],
    },
  ],
  plans: gymPlans,
  rules: {
    entry: [
      "Traer DNI la primera vez.",
      "Menores de 16 con adulto responsable.",
      "Calzado adecuado: prohibido entrenar en ojotas o descalzo (salvo clases específicas como Yoga).",
    ],

    hygiene: [
      "Toalla obligatoria en bancos y máquinas.",
      "Desinfectar el equipo al terminar.",
      "Después de usar una máquina (especialmente cardio), pasar un trapo con alcohol/desinfectante si el gimnasio lo provee.",
      "Usar desodorante/perfume: se agradece en espacios cerrados.",
    ],

    payments: [
      "Efectivo o transferencia.",
      "Renovación hasta 5 días corridos.",
    ],

    safety: [
      "No tirar pesas.",
      "Pedir ayuda al profe para cargas máximas.",
      "No tirar mancuernas/pesas desde altura (salvo box con piso especial).",
    ],

    equipment: [
      "Descargar la barra al terminar: retirar los discos y dejarla lista para el siguiente.",
      "Mancuernas en su lugar: devolverlas al rack según su peso (ej: 15kg vuelve donde dice 15kg).",
      "No dejar mancuernas tiradas en el piso para evitar tropiezos.",
    ],

    behavior: [
      "Compartir máquinas en hora pico: permitir que otro intercale series mientras descansás.",
      "No acaparar: no usar múltiples pares de mancuernas y varias máquinas a la vez si el gimnasio está lleno.",
      "Uso del celular: ok para música o anotar, pero no quedarse 10 minutos ocupando una máquina mirando redes.",
      "Saludar al entrar (staff y conocidos) para mantener buen ambiente.",
      "Pedir permiso antes de usar/desarmar una máquina si hay toalla o botella cerca: “¿Estás usando esto?”.",
    ],
  },

  nutritionGuides: [
    {
      id: "bulk",
      title: "Ganar Masa Muscular",
      subtitle: "Posible superávit calórico",
      goalSummary:
        "Consumir suficientes calorías y proteínas para apoyar el crecimiento muscular.",
      exampleDay: {
        breakfast: [
          "3 huevos revueltos",
          "2 tostadas de pan integral con palta o queso crema",
          "1 fruta (banana o manzana)",
        ],
        lunch: [
          "Fideos o arroz con tuco y carne picada magra",
          "O pollo con arroz y un chorrito de aceite de oliva",
        ],
        postWorkout: [
          "Batido de proteína con leche y una fruta",
          "O sándwich de jamón natural y queso",
        ],
        dinner: [
          "Bife de cuadril o pechuga de pollo",
          "Puré de calabaza y papa",
        ],
      },
      considerations: [
        "El arroz y la pasta pueden ser fuentes de energía para el entrenamiento.",
      ],
      disclaimer:
        "Estos son ejemplos generales. Para un plan personalizado y seguro según tu salud, actividad y objetivos, consultá con nuestro equipo o pedí un plan personalizado.",
    },

    {
      id: "cut",
      title: "Definición / Perder Grasa",
      subtitle: "Posible déficit calórico",
      goalSummary:
        "Consumir menos calorías de las que se gastan, manteniendo la proteína para preservar masa muscular.",
      exampleDay: {
        breakfast: [
          "Yogur griego o descremado",
          "Un puñado de frutos secos",
          "Una fruta pequeña",
        ],
        lunch: [
          "Ensalada completa (hojas verdes, tomate, cebolla, zanahoria)",
          "Atún al natural o pechuga de pollo a la plancha",
          "Media porción de legumbres (lentejas o garbanzos)",
        ],
        snack: [
          "Café con leche y una fruta",
          "O un par de galletas de arroz con queso untable light",
        ],
        dinner: ["Pescado (merluza)", "O revuelto de zapallitos con huevo"],
      },
      considerations: ["Una hidratación adecuada es importante."],
      disclaimer:
        "Estos son ejemplos generales. Para un plan personalizado y seguro según tu salud, actividad y objetivos, consultá con nuestro equipo o pedí un plan personalizado.",
    },

    {
      id: "maintain",
      title: "Mantenimiento",
      subtitle: "Equilibrio",
      goalSummary:
        "Mantener el peso, tener energía y mejorar el tono muscular con una alimentación balanceada.",
      exampleDay: {
        breakfast: [
          "Café o mate",
          "Tostadas de pan de campo",
          "Queso y un huevo",
        ],
        lunch: [
          "Tarta de acelga o zapallitos",
          "Una porción de carne (vaca, pollo o cerdo)",
        ],
        snack: ["Un puñado de nueces o almendras", "Una fruta"],
        dinner: [
          "Milanesa (al horno)",
          "Ensalada variada",
          "Porción pequeña de papas",
        ],
      },
      considerations: [
        "Mantener un equilibrio en la alimentación diaria es clave.",
      ],
      disclaimer:
        "Estos son ejemplos generales. Para un plan personalizado y seguro según tu salud, actividad y objetivos, consultá con nuestro equipo o pedí un plan personalizado.",
    },
  ],

  trainingPrograms: trainingPrograms,

  faqs: [
    { q: "¿Hay ducha?", a: "Si" },
    { q: "¿Hay estacionamiento?", a: "Si (limitado)." },
  ],

  contact: {
    daysOpen: "Lunes a sábado",
    generalHours: "07:00–22:00",
    socials: [
      { platform: "instagram", handle: "julian_vizcarra01", label: "Dueño" },
      { platform: "instagram", handle: "el.aguante.ofi", label: "Gimnasio" },
      { platform: "tiktok", handle: "elaguantegim", label: "Gimnasio" },
    ],
  },
  staff: staff,
};
