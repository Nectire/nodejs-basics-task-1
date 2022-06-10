import { parentPort } from "worker_threads";

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    const resultObject = {};
    parentPort.on("message", (value) => {
        if(typeof value !== "number") throw new Error('Not a number');
        resultObject.value = nthFibonacci(value);
        resultObject.status = "resolved";
        parentPort.postMessage(resultObject);
        process.exit(1);
    });
};

sendResult();