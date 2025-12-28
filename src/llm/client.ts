import OpenAI from "openai";
import "dotenv/config";

export const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function chatCompletion(
  messages: Array<{ role: "system" | "user" | "assistant"; content: string }>,
  model = "gpt-5-mini"
) {
  const res = await client.responses.create({
    model,
    input: messages.map((m) => ({ role: m.role, content: m.content })),
  });

  return res.output_text;
}
