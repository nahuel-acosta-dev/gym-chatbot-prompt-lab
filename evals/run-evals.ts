import fs from "fs";
import path from "path";
import { singleTurn } from "../src/app/session";

type EvalCase = {
  id: string;
  input: string;
  expect: {
    mustContain?: string[];
    mustNotContain?: string[];
  };
};

const cases: EvalCase[] = JSON.parse(
  fs.readFileSync(path.resolve("evals/cases.json"), "utf-8")
);

async function run() {
  let passed = 0;

  for (const c of cases) {
    const output = await singleTurn(c.input);

    let ok = true;

    c.expect.mustContain?.forEach((s) => {
      if (!output.toLowerCase().includes(s.toLowerCase())) ok = false;
    });

    c.expect.mustNotContain?.forEach((s) => {
      if (output.toLowerCase().includes(s.toLowerCase())) ok = false;
    });

    console.log(`${ok ? "✅" : "❌"} ${c.id}`);
    if (ok) passed++;
  }

  console.log(`\nResultado: ${passed}/${cases.length}`);
}

run();
