import * as fs from "fs";
import * as path from "path";

export function loadAllSections(): string {
  const DATA_DIR = path.join(__dirname);

  const files = fs.readdirSync(DATA_DIR)
    .filter(f => f.endsWith(".use"))
    .sort();

  let combined = "";

  for (const file of files) {
    const content = fs.readFileSync(path.join(DATA_DIR, file), "utf8");

    combined += `
========================================
FILE: ${file}
========================================

${content}

`;
  }

  return combined;
}