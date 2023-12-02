const fs = require("fs").promises;
export async function readFile(filePath: string) {
  const data = await fs.readFile(filePath);
  return Buffer.from(data).toString();
}
