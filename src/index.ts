import { startChat } from "./app/chat";

startChat().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
