import path from 'path';
import fs from 'fs';
import parse from './parsers.js';
import buildDiffTree from './buildDiffTree.js';
import formatter from './formatters/index.js';

const getExtension = (filePath) => path.extname(filePath).slice(1);
const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf8'), getExtension(filepath));

const genDiff = (path1, path2, format = 'stylish') => {
  const dataBefore = getData(buildFullPath(path1));
  const dataAfter = getData(buildFullPath(path2));
  const tree = buildDiffTree(dataBefore, dataAfter);
  return formatter(tree, format);
};

export default genDiff;
