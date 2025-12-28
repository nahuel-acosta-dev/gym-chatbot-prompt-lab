import { gymConfig } from "./state";

function formatARS(n: number) {
  return new Intl.NumberFormat("es-AR").format(n);
}

export function buildGymContext(): string {
  const lines: string[] = [];

  // =========================
  // INFO GENERAL / CONTACTO
  // =========================
  lines.push("INFO GENERAL:");
  lines.push(`- Días: ${gymConfig.contact.daysOpen}`);
  lines.push(`- Horario general: ${gymConfig.contact.generalHours}`);

  if (gymConfig.contact.socials?.length) {
    lines.push("- Redes sociales:");
    for (const s of gymConfig.contact.socials) {
      const label = s.label ? `${s.label}: ` : "";
      const platform = s.platform.toUpperCase();
      lines.push(`  - ${platform} ${label}@${s.handle}`);
    }
  }
  lines.push("");

  // =========================
  // SEDES
  // =========================
  lines.push("SEDES Y HORARIOS:");
  for (const loc of gymConfig.locations) {
    lines.push(`- ${loc.name}`);
    lines.push(`  Dirección: ${loc.address}`);
    lines.push(`  Lun–Vie: ${loc.hours.mon_fri}`);
    lines.push(`  Sáb: ${loc.hours.sat}`);
    lines.push(`  Dom: ${loc.hours.sun}`);
    if (loc.phone) lines.push(`  Tel: ${loc.phone}`);
    if (loc.notes?.length) {
      for (const n of loc.notes) lines.push(`  Nota: ${n}`);
    }
  }
  lines.push("");

  // =========================
  // PLANES
  // =========================
  lines.push("PLANES:");
  for (const p of gymConfig.plans) {
    lines.push(`- ${p.name}: $${formatARS(p.priceARS)} ARS`);
    lines.push(`  Frecuencia: ${p.frequency}`);
    if (p.priceNote) lines.push(`  Nota de precio: ${p.priceNote}`);
    lines.push(`  Incluye: ${p.includes.join(", ")}`);
    if (p.description) lines.push(`  Descripción: ${p.description}`);
    if (p.conditions) lines.push(`  Condiciones: ${p.conditions}`);
    if (p.restrictions?.length) {
      lines.push(`  Restricciones: ${p.restrictions.join(", ")}`);
    }
  }
  lines.push("");

  // =========================
  // REGLAS
  // =========================
  lines.push("REGLAS:");
  for (const [k, arr] of Object.entries(gymConfig.rules)) {
    lines.push(`- ${k.toUpperCase()}:`);
    for (const item of arr as string[]) lines.push(`  - ${item}`);
  }
  lines.push("");

  // =========================
  // ALIMENTACIÓN
  // =========================
  lines.push("ALIMENTACIÓN SEGÚN OBJETIVOS:");
  for (const g of gymConfig.nutritionGuides) {
    lines.push(`- ${g.title}${g.subtitle ? ` (${g.subtitle})` : ""}`);
    lines.push(`  Objetivo: ${g.goalSummary}`);

    const mealOrder: Array<keyof typeof g.exampleDay> = [
      "breakfast",
      "lunch",
      "snack",
      "postWorkout",
      "dinner",
    ];

    const mealLabels: Record<string, string> = {
      breakfast: "Desayuno",
      lunch: "Almuerzo",
      snack: "Merienda",
      postWorkout: "Post-entreno",
      dinner: "Cena",
    };

    for (const key of mealOrder) {
      const items = g.exampleDay[key];
      if (!items?.length) continue;
      lines.push(`  ${mealLabels[key]}: ${items.join(" + ")}`);
    }

    if (g.considerations?.length) {
      lines.push(`  Consideraciones: ${g.considerations.join(" | ")}`);
    }
    if (g.disclaimer) {
      lines.push(`  Nota: ${g.disclaimer}`);
    }
  }
  lines.push("");

  // =========================
  // ENTRENAMIENTOS
  // =========================
  lines.push("ENTRENAMIENTOS (RUTINAS BASE):");

  // agrupamos por nivel para que se lea fácil
  const levelLabel: Record<string, string> = {
    beginner: "PRINCIPIANTES",
    intermediate: "INTERMEDIOS",
    advanced: "AVANZADOS",
  };

  const focusLabel: Record<string, string> = {
    general: "General",
    weight_loss: "Pérdida de peso",
    weight_gain: "Ganar peso",
    lower_body: "Tren inferior",
    upper_body: "Tren superior",
  };

  const byLevel = gymConfig.trainingPrograms.reduce<
    Record<string, typeof gymConfig.trainingPrograms>
  >((acc, t) => {
    (acc[t.level] ??= []).push(t);
    return acc;
  }, {});

  for (const level of ["beginner", "intermediate", "advanced"] as const) {
    const list = byLevel[level] ?? [];
    if (!list.length) continue;

    lines.push(`- ${levelLabel[level]}:`);

    for (const t of list) {
      lines.push(`  • ${t.title} [Enfoque: ${focusLabel[t.focus] ?? t.focus}]`);
      lines.push(`    Frecuencia: ${t.frequency} | Duración: ${t.duration}`);
      if (t.weeklyExample)
        lines.push(`    Ejemplo semanal: ${t.weeklyExample}`);
      lines.push(`    Para: ${t.audience}`);

      if (t.recommendedPlanId) {
        lines.push(
          `    Recomendación: para este caso se sugiere Plan "${t.recommendedPlanId}".`
        );
      }
      if (t.restrictions?.length) {
        lines.push(`    Restricciones: ${t.restrictions.join(" | ")}`);
      }
      if (t.notes?.length) {
        lines.push(`    Notas: ${t.notes.join(" | ")}`);
      }
      if (t.conditions) {
        lines.push(`    Condiciones: ${t.conditions}`);
      }

      // warmup breve
      if (t.warmup?.length) {
        lines.push(`    Calentamiento: ${t.warmup.join(" + ")}`);
      }

      // ejercicios (resumen compacto)
      if (t.exercises?.length) {
        const top = t.exercises.slice(0, 8); // evita que el contexto explote
        lines.push("    Ejercicios (resumen):");
        for (const ex of top) {
          const extra = [
            ex.goal ? `Objetivo: ${ex.goal}` : null,
            ex.notes ? `Nota: ${ex.notes}` : null,
          ]
            .filter(Boolean)
            .join(" | ");
          lines.push(
            `      - ${ex.name}: ${ex.sets}x${ex.reps} (descanso ${ex.rest})${
              extra ? ` — ${extra}` : ""
            }`
          );
        }
        if (t.exercises.length > top.length) {
          lines.push(
            `      ... +${t.exercises.length - top.length} ejercicios más`
          );
        }
      }

      if (t.finisher?.length) {
        lines.push(`    Finalización: ${t.finisher.join(" | ")}`);
      }
      if (t.tips?.length) {
        lines.push(`    Tips: ${t.tips.join(" | ")}`);
      }
      if (t.considerations?.length) {
        lines.push(`    Consideraciones: ${t.considerations.join(" | ")}`);
      }
    }
  }

  // =========================
  // STAFF
  // =========================
  lines.push("EQUIPO / STAFF:");
  lines.push(gymConfig.staff.teamName);

  if (gymConfig.staff.notes?.length) {
    for (const n of gymConfig.staff.notes) {
      lines.push(`- Nota: ${n}`);
    }
  }

  for (const m of gymConfig.staff.members) {
    lines.push(`- ${m.name}${m.nickname ? ` (${m.nickname})` : ""}`);
    if (m.profile) lines.push(`  Perfil: ${m.profile}`);

    for (const r of m.roles) {
      lines.push(
        `  Rol: ${r.title}${r.schedule ? ` | Turno: ${r.schedule}` : ""}`
      );
      for (const resp of r.responsibilities) {
        lines.push(`    - ${resp}`);
      }
    }

    if (m.extra?.length) {
      lines.push(`  Extra: ${m.extra.join(" | ")}`);
    }
  }

  lines.push("");

  // =========================
  // FAQ
  // =========================
  lines.push("FAQ:");
  for (const f of gymConfig.faqs) {
    lines.push(`- ${f.q} ${f.a}`);
  }

  return lines.join("\n");
}
