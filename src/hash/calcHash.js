import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

export const calculateHash = async () => {
    const __dirname = path.resolve('src', 'hash');
    const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

    fs.readFile(pathToFile, (err, data) => {
        if (err) throw new Error(err);
        const hashedData = crypto.createHash('sha256').update(data).digest('hex');
        console.log("\n", hashedData, "\n");
        fs.appendFile(pathToFile, "\n" + hashedData, undefined, (err) => {
            if (err) throw new Error(err);
            console.log('Hash was successfully appended to file!');
        })
    })
    try {
    } catch (error) {
        console.error(error);
    }
};

calculateHash();