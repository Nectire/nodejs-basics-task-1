import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  const pathTofiles = join(__dirname, "files");

  try {
    if (!fs.existsSync(pathTofiles)) throw new Error("FS operation failed");

    fs.readdir(pathTofiles, {withFileTypes: true}, (err, files) => {
      if (err) throw new Error(err);
    files.forEach(file => console.log(file.name));
    });
  } catch (error) {
    console.error(error);
  }
};

list();