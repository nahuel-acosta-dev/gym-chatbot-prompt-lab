import fs from "fs";
import path from "path";
import { chatCompletion } from "../llm/client";
import { buildGymContext } from "./context";
import { loadTask, type TaskName } from "./taskLoader";
import { safeParseGymInfo } from "../validators/gymInfo";

export type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

function loadText(filePath: string) {
  const abs = path.resolve(filePath);
  if (!fs.existsSync(abs)) throw new Error(`File not found: ${abs}`);
  return fs.readFileSync(abs, "utf-8");
}

export function createBaseMessages(): Message[] {
  const system = loadText("src/prompts/system.md");
  const policies = loadText("src/prompts/policies.md");
  const style = loadText("src/prompts/style.md");

  return [
    {
      role: "system",
      content: [
        system,
        policies,
        style,
        "=== CONTEXTO DEL GYM ===",
        buildGymContext(),
      ].join("\n\n"),
    },
  ];
}

export async function singleTurn(input: string, model = "gpt-5-mini") {
  const task = inferTask(input);
  const taskPrompt = loadTask(task);

  const messages = createBaseMessages();

  if (taskPrompt) {
    messages.push({
      role: "system",
      content: `=== TAREA ACTUAL ===\n${taskPrompt}`,
    });
  }

  messages.push({ role: "user", content: input });

  const out = await chatCompletion(messages, model);

  if (task === "gym_info") {
    const parsed = safeParseGymInfo(out);
    return JSON.stringify(parsed, null, 2);
  }
  return out;
}

function inferTask(input: string): TaskName {
  const text = input.toLowerCase();

  if (text.includes("plan") || text.includes("precio")) return "membership";
  if (text.includes("rutina") || text.includes("ejercicio")) return "training";
  if (text.includes("pileta") || text.includes("tarjeta"))
    return "out_of_scope";

  return "general";
}
