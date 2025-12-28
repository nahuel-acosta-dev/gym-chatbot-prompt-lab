export type StaffRole = {
  title: string;
  schedule?: string;
  responsibilities: string[];
  extra?: string[];
};

export type GymStaffMember = {
  id: string;
  name: string;
  nickname?: string;
  roles: StaffRole[];
  profile?: string;
  extra?: string[];
};

export type GymStaff = {
  teamName: string;
  notes?: string[];
  members: GymStaffMember[];
};

export const staff = {
  teamName: 'Staff "Gimnasio El Aguante"',
  notes: [
    "La recepción no es un escritorio cerrado: es un mostrador compartido.",
    "Se charla, se cargan celulares y se descansa entre series.",
    "Ambiente típico de gimnasio de barrio.",
  ],
  members: [
    {
      id: "julian",
      name: "Julián",
      nickname: "El Dueño / Profeta",
      roles: [
        {
          title: "Dueño y Recepción",
          schedule: "Mañana",
          responsibilities: [
            "Abre el gimnasio a las 7:00 AM",
            "Cobra cuotas",
            "Anota nuevos socios",
            "Atiende la recepción mientras toma mate",
          ],
        },
        {
          title: "Profesor de Funcional",
          schedule: "Tarde",
          responsibilities: ["Da la clase de Funcional de las 18:00"],
        },
      ],
      extra: [
        "Arregla equipos (ej: cable de polea)",
        "Maneja el WhatsApp del gimnasio",
      ],
      profile:
        "Figura central del gimnasio, siempre presente y resolviendo todo.",
    },

    {
      id: "matias",
      name: "Matías",
      nickname: "Profe de Musculación / Recepción",
      roles: [
        {
          title: "Profesor de Musculación",
          schedule: "Tarde/Noche",
          responsibilities: [
            "Está a cargo de la sala de máquinas",
            "Arma rutinas",
            "Corrige la técnica de los ejercicios",
          ],
        },
        {
          title: "Recepción (rotación)",
          responsibilities: [
            "Cobra cuotas",
            "Vende suplementos básicos (barritas, pases diarios)",
          ],
        },
      ],
      profile:
        "El que pone la música (rock nacional o cumbia) y motiva a los que entrenan pesado.",
    },

    {
      id: "vale",
      name: "Vale",
      nickname: "Profe de Clases / Administrativa",
      roles: [
        {
          title: "Profesora de Clases",
          responsibilities: ["Da Zumba", "Da Localizada"],
          schedule: "Martes y Jueves",
        },
        {
          title: "Administrativa / Limpieza",
          schedule: "Lunes y Miércoles",
          responsibilities: [
            "Limpieza profunda de colchonetas",
            "Chequea cuotas adeudadas",
            "Envía recordatorios por privado",
          ],
        },
      ],
      extra: [
        "Organiza sorteos (Día de la Madre)",
        "Organiza asados del gimnasio",
      ],
      profile: "Orden y organización dentro del caos lindo del gym.",
    },

    {
      id: "lucas",
      name: "Lucas",
      nickname: "Estudiante de Educación Física / Apoyo",
      roles: [
        {
          title: "Apoyo en Sala",
          schedule: "Noche (19:00–21:00)",
          responsibilities: [
            "Ayuda con técnica cuando el gimnasio está lleno",
            "Asiste a socios en ejercicios básicos",
          ],
        },
        {
          title: "Soporte general (rotación)",
          responsibilities: [
            "Cubre francos",
            "Limpia espejos",
            "Ayuda con sentadillas u otros ejercicios",
          ],
        },
      ],
      extra: ["Sube stories a Instagram mostrando el gimnasio lleno"],
      profile: "Comodín del staff: donde falta alguien, Lucas aparece.",
    },
  ],
};
