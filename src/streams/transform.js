import { Transform, pipeline } from "stream";

class CustomTransformStream extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    try {
      const resultString = chunk.toString("utf-8").split("").reverse().join("");
      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}
export const transform = async () => {
    const transformStream = new CustomTransformStream();
    pipeline(
        process.stdin,
        transformStream,
        process.stdout,
        (err) => {
        if (err) {
            console.error("Pipeline failed.", err);
          }
        }

    )
};

transform();