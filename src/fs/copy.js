import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
    const pathToFolder = join(__dirname, "files/");
    const pathToFolderCopy = join(__dirname, "files_copy/");
    try {
        if(!fs.existsSync(pathToFolder) || fs.existsSync(pathToFolderCopy))
            throw Error("FS operation failed");

        await fs.promises.mkdir(pathToFolderCopy, { recursive: true });
        console.log("Directory was created");

        await fs.promises.cp(pathToFolder, pathToFolderCopy, {recursive: true});
        console.log("Directory was successfully copied");

    } catch (error) {
        console.error(error);
    }
};

copy();