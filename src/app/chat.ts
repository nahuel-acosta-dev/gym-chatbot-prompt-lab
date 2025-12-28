import readline from "readline";
import { chatCompletion } from "../llm/client";
import { createBaseMessages, type Message } from "./session";
import fs from "fs";
import path from "path";

const RUNS_DIR = path.resolve("src/runs");
const RUNS_FILE = path.join(RUNS_DIR, "runs.jsonl");

function ensureRunsDir() {
  if (!fs.existsSync(RUNS_DIR)) fs.mkdirSync(RUNS_DIR, { recursive: true });
}

function saveRun(entry: any) {
  ensureRunsDir();
  fs.appendFileSync(RUNS_FILE, JSON.stringify(entry) + "\n");
}

export async function startChat() {
  const model = "gpt-5-mini";
  const messages: Message[] = createBaseMessages();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("GymBot listo. Escribí 'exit' para salir.");

  const ask = () =>
    rl.question("> ", async (input) => {
      if (input.trim().toLowerCase() === "exit") {
        rl.close();
        return;
      }

      messages.push({ role: "user", content: input });

      const t0 = Date.now();
      const out = await chatCompletion(messages, model);
      const ms = Date.now() - t0;

      console.log("\n" + out + "\n");

      messages.push({ role: "assistant", content: out });

      saveRun({
        timestamp: new Date().toISOString(),
        model,
        latency_ms: ms,
        messages: messages.slice(-8),
        output: out,
      });

      ask();
    });

  ask();
}
