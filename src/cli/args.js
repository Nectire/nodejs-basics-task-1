export const parseArgs = () => {
    const regex = /^--.+$/;
    const objectOfArgs = {};
    try {
        process.argv.slice(2).forEach((arg, i, arr) => {
            if (i % 2 === 0 && arg.match(regex) && !arr[i + 1].match(regex)) {
                objectOfArgs[arg.slice(2)] = `is ${arr[i + 1]}`;
                return;
            }
        });
        const outputStr = Object.keys(objectOfArgs)
            .map((key) => {
                return `${key} ${objectOfArgs[key]}`;
            })
            .join(", ");
        console.log(outputStr);
    } catch (error) {
        console.error(error);
    }
};

parseArgs();