import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    const pathToFileToRead = join(__dirname, "files", "fileToRead.txt");

    try {
      if (!fs.existsSync(pathToFileToRead)) throw new Error("FS operation failed");

      fs.readFile(pathToFileToRead, 'utf-8', (err, data) => {
        if (err) throw new Error(err);
            console.log(data);
      });
    } catch (error) {
      console.error(error);
    }
};

read();