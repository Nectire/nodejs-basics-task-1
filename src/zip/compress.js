import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";
import { promisify } from "util";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
  const pipe = promisify(pipeline);
  const input = join(__dirname, "files", "fileToCompress.txt");
  const output = join(__dirname, "files", "archive.gz");
  try {
    const gzip = createGzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipe(source, gzip, destination);
  } catch (error) {
    console.error(error);
  }
};

compress();
