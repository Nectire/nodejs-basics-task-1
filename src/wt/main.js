import { dirname, join, } from "path";
import { cpus } from "os";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
  const pathToFile = join(__dirname, "worker.js");
  const arrOfPromises = [];

  const done = (el) => new Promise((resolve) => {
    el.on("message", (obj) => resolve(obj));
    el.on("error", () => resolve({ status: "rejected", value: null }));
  });

    cpus().forEach((cpu, i) =>{
        const worker = new Worker(pathToFile);
        worker.postMessage(10 + i);
        arrOfPromises.push(done(worker));
    })
    const results = (await Promise.allSettled(arrOfPromises))
        .map(object => object.value);

    return console.log(results);
};

performCalculations();