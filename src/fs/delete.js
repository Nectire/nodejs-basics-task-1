import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
  const pathToFileToRemove = join(__dirname, "files", "fileToRemove.txt");

  try {
    if (!fs.existsSync(pathToFileToRemove))
      throw new Error("FS operation failed");

    fs.rm(pathToFileToRemove, (err) => {
      if (err) throw new Error(err);
      console.log("File was successfully removed");
    });
  } catch (error) {
    console.error(error);
  }
};

remove();