import fs from "fs";
import path from "path";

export const write = async () => {
    const __dirname = path.resolve("src", "streams");
    const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");
    
    try {
        const stream = fs.createWriteStream(pathToFile, {encoding: 'utf-8'});
        process.stdin.on("data", (data) => {
          console.log(`You typed: ${data.toString()}`);
          stream.write(data, (err) => {
            if (err) throw new Error(err);
            console.log("Your data was successfully written in fileToWrite.txt");
            process.exit();
          })
        });
    } catch (error) {
        console.error(error);
    }
};

write();