import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
  try {
    const filePath = join(__dirname, "files", "fresh.txt");
    
    if (fs.existsSync(filePath)) throw new Error("FS operation failed");

    const content = "I am fresh and young";
    fs.writeFile(filePath, content, (err) => {
        if (err) throw new Error(err);
        console.log("File was successfully written");
    });
  } catch (error) {
    console.error(error);
  }
};

create();