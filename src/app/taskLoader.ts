import fs from "fs";
import path from "path";

export type TaskName =
  | "gym_info"
  | "membership"
  | "training"
  | "out_of_scope"
  | "general";

export function loadTask(task: TaskName): string {
  if (task === "general") return "";

  const file = path.resolve(`src/prompts/tasks/${task}.md`);
  if (!fs.existsSync(file)) {
    throw new Error(`Task prompt not found: ${file}`);
  }

  return fs.readFileSync(file, "utf-8");
}
