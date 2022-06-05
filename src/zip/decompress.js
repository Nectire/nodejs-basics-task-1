import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createGunzip } from "zlib";
import { promisify } from "util";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
  const pipe = promisify(pipeline);
  const input = join(__dirname, "files", "archive.gz");
  const output = join(__dirname, "files", "fileToCompress.txt");
  try {
    const gzip = createGunzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipe(source, gzip, destination);
  } catch (error) {
    console.error(error);
  }
};

decompress();