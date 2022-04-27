import makeStylish from './stylish.js';
import makePlain from './plain.js';

const getFormat = (tree, formatName = 'stylish.txt') => {
  switch (formatName) {
    case 'stylish.txt':
      return makeStylish(tree);
    case 'plain':
      return makePlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(`Unknown format ${formatName}`);
  }
};

export default getFormat;
