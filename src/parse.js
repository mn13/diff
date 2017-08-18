import yaml from 'js-yaml';
import ini from 'ini';

const parser = {
  '.json': data => JSON.parse(data),
  '.yaml': data => yaml.safeLoad(data),
  '.ini': (data) => {
    ini.decode(data);
  },
};
export default (data, ext) => parser[ext](data);
