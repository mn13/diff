import fs from 'fs';
import _ from 'lodash';

export default (pathToFile1, pathToFile2) => {
  const json1 = JSON.parse(fs.readFileSync(pathToFile1));
  const json2 = JSON.parse(fs.readFileSync(pathToFile2));

  const union = _.union(Object.keys(json1), Object.keys(json2));
  const result = union.reduce((acc, key) => {
    if (json1[key] === json2[key]) {
      return `${acc}    ${key}: ${json1[key]}\n`;
    }
    if (key in json1 && key in json2) {
      return `${acc}  + ${key}: ${json2[key]}\n  - ${key}: ${json1[key]}\n`;
    }
    if (key in json1) {
      return `${acc}  - ${key}: ${json1[key]}\n`;
    }

    return `${acc}  + ${key}: ${json2[key]}\n`;
  }, '');

  return `{\n${result}}`;
};
