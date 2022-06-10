import fs from 'fs';
import path from "path";

export const read = async () => {
       const __dirname = path.resolve("src", "streams");
       const pathToFile = path.join(__dirname, "files", "fileToRead.txt");
       try {
           const stream = fs.createReadStream(pathToFile, {encoding: 'utf-8'});
            stream.on('data', (chunk) => {
                process.stdout.write(chunk);
            })
        } catch (error) {
           console.error(error);
       }
};

read();