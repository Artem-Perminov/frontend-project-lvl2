import makeStylish from './stylish.js';
import makePlain from './plain.js';
import toJson from './json.js';

export default (tree, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return makePlain(tree);
    case 'json':
      return toJson(tree);
    default:
      throw new Error(`Unknown format ${formatName}`);
  }
};
