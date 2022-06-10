export const parseEnv = () => {
    const regex = /^RSS_.+$/;
    try {
        const arrOfEnvVars =[];
        Object.keys(process.env).forEach((key) => {
            if(key.match(regex)) {
                arrOfEnvVars.push(`${key}=${process.env[key]}`);
            }
        });
        console.log(arrOfEnvVars.join('; '));
    } catch (error) {
        console.error(error);
    }
};

parseEnv();