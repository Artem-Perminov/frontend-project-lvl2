import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

export default (data, ext) => {
  if (Object.keys(parsers).includes(ext)) {
    return parsers[ext](data);
  }
  throw new Error(`Unknown extension ${ext}`);
};
