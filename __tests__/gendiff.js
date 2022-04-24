import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import diff from '../__fixtures__/diff.js';

describe('GenDiff', () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const getFixturePath = (ident) => path.join(__dirname, '..', '__fixtures__', ident);

  test('Compare two json files', () => {
    const file1 = 'file1.json';
    const file2 = 'file2.json';
    expect(genDiff(getFixturePath(file1), getFixturePath(file2))).toEqual(diff);
  });

  test('Compare two yaml files', () => {
    const file1 = 'file1.yml';
    const file2 = 'file2.yml';
    expect(genDiff(getFixturePath(file1), getFixturePath(file2))).toEqual(diff);
  });
});
