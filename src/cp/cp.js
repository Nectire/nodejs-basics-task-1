import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { fork } from "child_process";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
    const pathToFile = join(__dirname, "files", "script.js");

    const child = fork(pathToFile, args);

    child.on('exit', (code) => {
        process.stdout.write(`Received from child process: ${code}\n`);
    });

};

spawnChildProcess(process.argv);