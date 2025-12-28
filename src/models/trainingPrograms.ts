import type { GymPlan } from "./gymPlan";

export type TrainingLevelId = "beginner" | "intermediate" | "advanced";

export type TrainingFocusId =
  | "general"
  | "weight_loss"
  | "weight_gain"
  | "lower_body"
  | "upper_body";

export type TrainingExercise = {
  name: string;
  sets: string; // "3" o "3-4" o "4"
  reps: string; // "8-10", "10", "30-45 seg"
  rest: string; // "60 seg", "2-3 min"
  goal?: string; // "Piernas y glúteos", etc.
  notes?: string; // técnica / aclaraciones
};

export type TrainingSessionTemplate = {
  id: string;
  title: string;
  level: TrainingLevelId;
  focus: TrainingFocusId;
  audience: string; // a quién está dirigida
  frequency: string; // "3 veces por semana", etc.
  weeklyExample?: string; // ejemplo de calendario
  duration: string; // "50-60 min"
  warmup: string[];
  exercises: TrainingExercise[];
  finisher?: string[]; // extra al final
  considerations?: string[];
  tips?: string[];
  restrictions?: string[]; // condiciones tipo "si es por recomendación médica..."
  recommendedPlanId?: GymPlan["id"]; // para forzar "personalized"
  notes?: string[];
  conditions?: string;
};

export const trainingPrograms: TrainingSessionTemplate[] = [
  // =========================
  // PRINCIPIANTES
  // =========================
  {
    id: "beginner_full_body_general",
    title: "Principiantes - Full Body (General)",
    level: "beginner",
    focus: "general",
    audience:
      "Personas con poca o nula experiencia (hasta 4 meses), que buscan ponerse en forma con una ganancia de masa muscular pareja (tronco y piernas).",
    frequency: "3 o 5 veces por semana",
    weeklyExample:
      "Ejemplo: Lunes, Miércoles y Viernes (dejar siempre un día de descanso en el medio).",
    duration: "50-60 min",
    warmup: [
      "5 a 10 min de cinta (caminata rápida) o elíptica",
      "Movilidad de hombros y cadera",
    ],
    exercises: [
      {
        name: "Sentadillas (con copa o barra)",
        sets: "3",
        reps: "12",
        rest: "60 seg",
        goal: "Piernas y glúteos",
      },
      {
        name: "Press de Pecho (mancuernas o máquina)",
        sets: "3",
        reps: "10",
        rest: "60 seg",
        goal: "Pectorales y tríceps",
      },
      {
        name: "Remo sentado en polea baja",
        sets: "3",
        reps: "12",
        rest: "60 seg",
        goal: "Espalda y postura",
      },
      {
        name: "Prensa de piernas (45°)",
        sets: "3",
        reps: "10",
        rest: "60 seg",
        goal: "Refuerzo de piernas",
      },
      {
        name: "Press de hombros (sentado con mancuernas)",
        sets: "3",
        reps: "10",
        rest: "60 seg",
        goal: "Hombros",
      },
      {
        name: "Lat Pulldown (polea al pecho)",
        sets: "3",
        reps: "12",
        rest: "60 seg",
        goal: "Espalda (amplitud)",
      },
      {
        name: "Plancha abdominal (plank)",
        sets: "3",
        reps: "30-45 seg",
        rest: "45 seg",
        goal: "Core / abdomen",
      },
    ],
    restrictions: [
      "Si necesitás rutina personalizada por recomendación médica, se recomienda Plan Personalizado.",
    ],
    recommendedPlanId: "personalized",
    notes: [
      "Rutina full body ideal para aprender técnica más rápido repitiendo movimientos varias veces por semana.",
    ],
  },

  {
    id: "beginner_weight_loss_low_impact",
    title: "Principiantes - Pérdida de peso (Bajo impacto)",
    level: "beginner",
    focus: "weight_loss",
    audience:
      "Principiantes con foco en bajar grasa cuidando articulaciones (especialmente rodillas) y evitando fatiga extrema.",
    frequency: "3 veces por semana (días alternos)",
    duration: "60 min",
    warmup: [
      "10 a 15 min de bicicleta fija a ritmo suave",
      "5 min de movilidad articular (brazos y cadera)",
    ],
    exercises: [
      {
        name: "Sentadilla a la silla (Box Squat)",
        sets: "3",
        reps: "12",
        rest: "90 seg",
        notes: "Sentarse y pararse de un banco: da seguridad y estabilidad.",
      },
      {
        name: "Press de Pecho en Máquina",
        sets: "3",
        reps: "12",
        rest: "60 seg",
        notes: "Más seguro que mancuernas para no forzar hombros.",
      },
      {
        name: "Remo sentado en polea baja",
        sets: "3",
        reps: "12",
        rest: "60 seg",
        notes: "Mejora postura y ayuda a abrir la caja torácica.",
      },
      {
        name: "Prensa de piernas (inclinada)",
        sets: "3",
        reps: "15",
        rest: "90 seg",
        notes: "Trabaja piernas sin cargar peso sobre la columna.",
      },
      {
        name: "Lat Pulldown (polea al pecho)",
        sets: "3",
        reps: "12",
        rest: "60 seg",
        notes: "Fortalece espalda y brazos.",
      },
      {
        name: "Step-ups (subida al escalón bajo)",
        sets: "3",
        reps: "10 por pierna",
        rest: "60 seg",
        notes: "Mejora equilibrio y quema calorías (usar escalón bajito).",
      },
      {
        name: "Plancha con rodillas apoyadas",
        sets: "3",
        reps: "20-30 seg",
        rest: "45 seg",
        notes: "Fortalece abdomen sin riesgo para zona lumbar.",
      },
    ],
    finisher: [
      "Al terminar las pesas: 15 min de caminata a ritmo constante en cinta (sin correr) con inclinación mínima (1% o 2%).",
    ],
    restrictions: [
      "Si necesitás rutina personalizada por recomendación médica, se recomienda Plan Personalizado.",
    ],
    recommendedPlanId: "personalized",
    notes: [
      "Foco en movilidad, fuerza básica y cardio de bajo impacto para sostener constancia sin abandono.",
    ],
  },

  {
    id: "beginner_weight_gain_short_intense",
    title: "Principiantes - Ganar peso (Volumen / Ectomorfo)",
    level: "beginner",
    focus: "weight_gain",
    audience:
      "Personas muy delgadas que necesitan ganar masa muscular y volumen con estímulo intenso pero corto (sin gastar calorías de más).",
    frequency: "3 veces por semana (Lunes, Miércoles y Viernes)",
    weeklyExample:
      "Es vital no entrenar más de 4 días para permitir crecimiento durante el descanso.",
    duration: "45-50 min",
    warmup: [
      "Solo 5 min de caminata suave (sin quemar calorías de más)",
      "Mucha movilidad articular (brazos, rodillas, muñecas)",
    ],
    exercises: [
      {
        name: "Sentadillas con barra",
        sets: "3",
        reps: "8-12",
        rest: "90 seg",
      },
      {
        name: "Press de Banca (barra o mancuernas)",
        sets: "3",
        reps: "8-12",
        rest: "90 seg",
      },
      {
        name: "Remo con barra o mancuerna",
        sets: "3",
        reps: "8-12",
        rest: "90 seg",
      },
      { name: "Prensa de piernas", sets: "3", reps: "10-15", rest: "90 seg" },
      {
        name: "Press militar (hombros con barra)",
        sets: "3",
        reps: "8-12",
        rest: "90 seg",
      },
      {
        name: "Curl de bíceps con barra",
        sets: "2",
        reps: "10-15",
        rest: "60 seg",
      },
      {
        name: "Copa de tríceps (detrás de nuca)",
        sets: "2",
        reps: "10-15",
        rest: "60 seg",
      },
    ],
    considerations: [
      "Para personas con peso significativamente bajo, el entrenamiento es solo una parte del proceso.",
    ],
    restrictions: [
      "Si necesitás rutina personalizada por recomendación médica, se recomienda Plan Personalizado.",
    ],
    recommendedPlanId: "personalized",
  },

  // =========================
  // INTERMEDIOS
  // =========================
  {
    id: "intermediate_torso_legs_general",
    title: "Intermedios - Torso / Pierna (General)",
    level: "intermediate",
    focus: "general",
    audience:
      "Personas con más de 4 meses de experiencia constante. (Si estás volviendo por recaída/recuperación, se recomienda Plan Personalizado).",
    frequency: "4 (recomendado) a 5 días por semana",
    weeklyExample:
      "Ejemplo: Lunes y Martes entrenás / Miércoles descansás / Jueves y Viernes entrenás.",
    duration: "60-75 min",
    warmup: [
      "5-10 min de cardio suave",
      "Movilidad articular básica (hombros, cadera y tobillos)",
    ],
    exercises: [
      // Rutina A Torso
      {
        name: "Rutina A (Torso) - Press de Banca Plano",
        sets: "4",
        reps: "8-10",
        rest: "2 min",
        notes: "Explosivo al subir.",
      },
      {
        name: "Rutina A (Torso) - Dominadas o Jalón al Pecho",
        sets: "4",
        reps: "10",
        rest: "90 seg",
        notes: "Espalda derecha, bajar hasta el pecho.",
      },
      {
        name: "Rutina A (Torso) - Press Inclinado (mancuernas)",
        sets: "3",
        reps: "10-12",
        rest: "90 seg",
        notes: "Parte alta del pecho.",
      },
      {
        name: "Rutina A (Torso) - Remo con Barra",
        sets: "3",
        reps: "10",
        rest: "90 seg",
        notes: "Rodillas semiflexionadas, espalda a 45°.",
      },
      {
        name: "Rutina A (Torso) - Vuelos Laterales",
        sets: "4",
        reps: "15",
        rest: "60 seg",
        notes: "Poco peso, muchas repeticiones.",
      },
      {
        name: "Rutina A (Torso) - Superserie Bíceps + Tríceps",
        sets: "3",
        reps: "12 c/u",
        rest: "60 seg",
        notes: "Sin descanso entre bíceps y tríceps.",
      },

      // Rutina B Pierna
      {
        name: "Rutina B (Pierna) - Sentadilla Libre (barra)",
        sets: "4",
        reps: "6-8",
        rest: "2-3 min",
        notes: "Bajar lo más posible.",
      },
      {
        name: "Rutina B (Pierna) - Peso Muerto Rumano",
        sets: "4",
        reps: "10-12",
        rest: "2 min",
        notes: "Sentir estiramiento detrás de la pierna.",
      },
      {
        name: "Rutina B (Pierna) - Prensa 45°",
        sets: "3",
        reps: "12-15",
        rest: "90 seg",
        notes: "No estirar rodillas del todo al subir.",
      },
      {
        name: "Rutina B (Pierna) - Sillón de Cuádriceps",
        sets: "3",
        reps: "15",
        rest: "60 seg",
        notes: "Aguantar 1 segundo arriba apretando.",
      },
      {
        name: "Rutina B (Pierna) - Camilla de Isquios",
        sets: "3",
        reps: "15",
        rest: "60 seg",
        notes: "Lento y controlado.",
      },
      {
        name: "Rutina B (Pierna) - Gemelos de parado",
        sets: "4",
        reps: "20",
        rest: "60 seg",
        notes: "Rango completo.",
      },
    ],
    tips: [
      "Sobrecarga progresiva: anotar pesos y buscar subir un poco el peso o sumar una repetición manteniendo buena técnica.",
      "Variedad: cada 6 u 8 semanas, cambiar algunos ejercicios para dar un estímulo distinto.",
    ],
    restrictions: [
      "Si estás entrenando por recaída/recuperación, se recomienda Plan Personalizado.",
    ],
    recommendedPlanId: "personalized",
  },

  {
    id: "intermediate_lower_body_priority",
    title: "Intermedios - Prioridad Piernas y Glúteos",
    level: "intermediate",
    focus: "lower_body",
    audience:
      "Intermedios que dominan básicos y quieren prioridad máxima en tren inferior con frecuencia 2x/semana.",
    frequency: "4 o 5 veces por semana",
    weeklyExample:
      "Lunes: Inferior (Fuerza/Pesado) · Martes: Superior (General) · Miércoles: Descanso · Jueves: Inferior (Hipertrofia) · Viernes: Superior (General)",
    duration: "60-75 min",
    warmup: [
      "5-10 min de elíptica",
      "Movilidad dinámica de cadera y tobillos (imprescindible para sentadilla)",
    ],
    exercises: [
      {
        name: "Sentadilla Libre (barra)",
        sets: "4",
        reps: "8",
        rest: "2-3 min",
        goal: "Fuerza general y cuádriceps",
      },
      {
        name: "Hip Thrust (empuje de cadera)",
        sets: "4",
        reps: "10-12",
        rest: "2 min",
        goal: "Glúteos",
      },
      {
        name: "Prensa 45° (pies altos)",
        sets: "3",
        reps: "12",
        rest: "90 seg",
        goal: "Glúteos e isquios",
      },
      {
        name: "Peso Muerto Rumano",
        sets: "3",
        reps: "10",
        rest: "90 seg",
        goal: "Isquios y espalda baja",
      },
      {
        name: "Estocadas caminando",
        sets: "3",
        reps: "20 pasos",
        rest: "60 seg",
        goal: "Estabilidad y piernas completas",
      },
      {
        name: "Sillón de Cuádriceps",
        sets: "3",
        reps: "15",
        rest: "60 seg",
        goal: 'Aislación / "quemar" al final',
      },
      {
        name: "Gemelos en máquina",
        sets: "4",
        reps: "15-20",
        rest: "45 seg",
        goal: "Pantorrillas (rango completo)",
      },
    ],
  },

  {
    id: "intermediate_upper_body_priority",
    title: 'Intermedios - "Torso King" + Base de Piernas',
    level: "intermediate",
    focus: "upper_body",
    audience:
      "Intermedios que quieren priorizar espalda/pecho/hombros para volumen (“V” del torso) sin perder fuerza/tono en piernas.",
    frequency: "3 o 4 veces por semana",
    weeklyExample: 'Ideal para evitar "piernas de pollo".',
    duration: "60-70 min",
    warmup: [
      "5 min de elíptica",
      "Movilidad de manguito rotador (con banda elástica o pesita liviana)",
    ],
    exercises: [
      {
        name: "Press de Banca (barra o mancuernas)",
        sets: "4",
        reps: "8-10",
        rest: "90 seg",
        goal: "Pecho / tríceps",
      },
      {
        name: "Dominadas o Jalón al Pecho",
        sets: "4",
        reps: "10",
        rest: "90 seg",
        goal: "Espalda (amplitud)",
      },
      {
        name: "Press Militar (hombros)",
        sets: "3",
        reps: "10",
        rest: "90 seg",
        goal: "Hombros (fuerza)",
      },
      {
        name: "Remo en polea baja o serrucho",
        sets: "3",
        reps: "12",
        rest: "60 seg",
        goal: "Espalda (grosor)",
      },
      {
        name: "Sentadilla Goblet o Prensa",
        sets: "4",
        reps: "10-12",
        rest: "2 min",
        goal: "Piernas (mantenimiento)",
      },
      {
        name: "Camilla de isquios (acostado)",
        sets: "3",
        reps: "12-15",
        rest: "60 seg",
        goal: "Posteriores (mantenimiento)",
      },
      {
        name: "Superserie: Bíceps + Tríceps",
        sets: "3",
        reps: "12 c/u",
        rest: "60 seg",
        goal: "Brazos (estética)",
      },
    ],
  },

  // =========================
  // AVANZADOS
  // =========================
  {
    id: "advanced_personalized_only",
    title: "Avanzados - Rutina personalizada (requerida)",
    level: "advanced",
    focus: "general",
    audience:
      "Personas con 2 o más años enfocadas en competencia o físicos de alto nivel.",
    frequency: "Según evaluación",
    duration: "Según evaluación",
    warmup: [],
    exercises: [],
    notes: [
      "Para avanzados no hay una rutina establecida: se requiere control fino de alimentación y entrenamiento.",
      "Se recomienda control constante por parte de profesores.",
    ],
    recommendedPlanId: "personalized",
    conditions:
      "Para este nivel es necesario adquirir el Plan Personalizado y una rutina específica para la persona.",
  },
];
