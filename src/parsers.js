import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

export default (data, format) => {
  if (Object.keys(parsers).includes(format)) {
    return parsers[format](data);
  }
  throw new Error(`Unknown format ${format}`);
};
