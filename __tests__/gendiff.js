import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

const expectedDataFormat = (formatName) => fs.readFileSync(getFixturePath(formatName), 'utf8');

describe('Checking the comparison of two files', () => {
  const extensions = ['json', 'yml'];
  test.each([extensions])('Compare two files', (ext) => {
    const pathBefore = getFixturePath(`file1.${ext}`);
    const pathAfter = getFixturePath(`file2.${ext}`);
    expect(genDiff(pathBefore, pathAfter)).toEqual(expectedDataFormat('stylish.txt'));
    expect(genDiff(pathBefore, pathAfter, 'stylish')).toEqual(expectedDataFormat('stylish.txt'));
    expect(genDiff(pathBefore, pathAfter, 'plain')).toEqual(expectedDataFormat('plain.txt'));
    expect(genDiff(pathBefore, pathAfter, 'json')).toEqual(expectedDataFormat('json.txt'));
  });
});
