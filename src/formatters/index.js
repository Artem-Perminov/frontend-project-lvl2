import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatters = { stylish, plain, json };

export default (tree, format = 'stylish') => {
  if (Object.keys(formatters).includes(format)) {
    return formatters[format](tree);
  }
  throw new Error(`Unknown format ${format}`);
};
