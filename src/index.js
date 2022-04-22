import fs from 'fs';
import path from 'path';
import process from 'process';
import _ from 'lodash';

const parse = (ident) => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), ident), 'utf-8'));

export default (filepath1, filepath2) => {
  const [file1, file2] = [parse(filepath1), parse(filepath2)]; // получаем объекты
  const [file1Keys, file2Keys] = [Object.keys(file1), Object.keys(file2)]; // получаем ключи
  const uniqKeys = _.uniq([file1Keys, file2Keys].flat()).sort(); // убираем дубли, сортируем ключи по алфавиту
  const lines = uniqKeys.map((key) => {
    const file1Value = _.has(file1, key);
    const file2Value = _.has(file2, key);
    if (file1Value && !file2Value) return [{ sign: '-', info: `${key}: ${file1[key]}` }]; // есть в первом, а во втором нет
    if (file2Value && !file1Value) return [{ sign: '+', info: `${key}: ${file2[key]}` }]; // есть во втором, а в первом нет
    if (file1Value && file2Value && file1[key] === file2[key]) return [{ sign: ' ', info: `${key}: ${file1[key]}` }]; // есть в обоих, значения совпадают
    return [{ sign: '-', info: `${key}: ${file1[key]}` }, { sign: '+', info: `${key}: ${file2[key]}` }]; // есть в обоих, значения разные
  }).flat(); // получаем массив объектов с нужными данными и в нужно порядке
  const result = lines.map((line) => `  ${line.sign} ${line.info}`); // получаем массив строк
  return ['{', ...result, '}'].join('\n'); // собираем всё в одну строку
};
