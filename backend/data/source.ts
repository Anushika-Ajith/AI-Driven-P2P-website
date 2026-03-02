import * as fs from "fs";
import * as path from "path";

export function loadKnowledgeBase() {
  const dataDir = path.join(__dirname, "../../data");

  const files = fs.readdirSync(dataDir)
    .filter(f => f.endsWith(".use"));

  let fullContent = "";

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    fullContent += `\n\n===== ${file} =====\n${content}`;
  }

  return fullContent;
}