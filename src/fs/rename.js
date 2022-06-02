import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
        const pathToFile = join(__dirname, "files", "wrongFilename.txt");
        const pathWithNewFileName = join(__dirname, "files", "properFilename.md");
    try {
        if (!fs.existsSync(pathToFile) || fs.existsSync(pathWithNewFileName))
          throw new Error("FS operation failed");
        
        fs.rename(pathToFile, pathWithNewFileName, (err) => {
          if (err) throw new Error(err);
          console.log("File was successfully renamed");
        });
    } catch (error) {
        console.error(error);
    }
};

rename();