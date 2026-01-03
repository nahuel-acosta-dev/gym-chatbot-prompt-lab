import type { GymInfoResponse } from "../llm/schemas";

export function safeParseGymInfo(output: string): GymInfoResponse {
  let parsed: any;

  try {
    parsed = JSON.parse(output);
  } catch {
    throw new Error("Respuesta inválida: no es JSON");
  }

  if (parsed.type !== "infoGeneral") {
    throw new Error("Respuesta inválida: type incorrecto");
  }

  if (typeof parsed.name !== "string") {
    throw new Error("Respuesta inválida: name");
  }

  if (
    !parsed.schedule ||
    typeof parsed.schedule.days !== "string" ||
    typeof parsed.schedule.hours !== "string"
  ) {
    throw new Error("Respuesta inválida: schedule");
  }

  if (!parsed.socialMedia || !Array.isArray(parsed.socialMedia.gym)) {
    throw new Error("Respuesta inválida: socialMedia");
  }

  return parsed as GymInfoResponse;
}
