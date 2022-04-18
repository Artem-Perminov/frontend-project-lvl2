import fs from 'fs';
import path from 'path';
import process from 'process';

const parse = (ident) => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), ident), 'utf-8'));

export default (file1, file2) => console.log(parse(file1), parse(file2))

