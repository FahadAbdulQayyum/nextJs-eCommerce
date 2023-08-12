import fs from 'fs';
import path from 'path';

const pathJson = path.join(process.cwd(), "data", "db.json")

export const comment = body => {
    const fsRead = fs.readFileSync(pathJson)
    fs.writeFileSync(pathJson,JSON.stringify([...JSON.parse(fsRead),body]))

    console.log('fsRead', JSON.parse(fsRead));
}