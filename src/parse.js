import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (pathToFile) => {
  const parser = {
    '.json': p => JSON.parse(p),
    '.yaml': p => yaml.safeLoad(p),
  };
  const ext = path.extname(pathToFile);
  return parser[ext](fs.readFileSync(pathToFile));
};
