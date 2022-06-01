import { F_OK } from "fs/constants"; 
import {writeFile, access} from 'fs/promises' 

export const create = async () => {
    try {
        const dir = __dirname + "files/";
        const filename  = 'fresh.txt';
        console.log(dir);
        const res = await access(dir + filename, F_OK);
        console.log(res, ' acces');
        const content = "I am fresh and young";
        writeFile(dir + filename, content);
    } catch (error) {
        console.error(error);
    }
};
