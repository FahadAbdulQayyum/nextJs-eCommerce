import fs from 'fs';
import path from 'path';

const pathJson = path.join(process.cwd(), "data", "db.json")

export const readComment = () => {
    const fsRead = fs.readFileSync(pathJson)
    return JSON.parse(fsRead);
}

export const writeComment = (body) => {
    const data = readComment();
    console.log('dataaaa',data);
    const matched = data.find(u=>u.name === body.name);
    console.log('matched',matched);
    if(matched) {
        throw new Error("This user already exists")
    }
    return fs.writeFileSync(pathJson, JSON.stringify([...data,body]))
}