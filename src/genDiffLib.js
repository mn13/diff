import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parse';

const genDiff = (content1, content2) => {
  const union = _.union(Object.keys(content1), Object.keys(content2));
  const result = union.reduce((acc, key) => {
    if (content1[key] === content2[key]) {
      return `${acc}    ${key}: ${content1[key]}\n`;
    }
    if (key in content1 && key in content2) {
      return `${acc}  + ${key}: ${content2[key]}\n  - ${key}: ${content1[key]}\n`;
    }
    if (key in content1) {
      return `${acc}  - ${key}: ${content1[key]}\n`;
    }

    return `${acc}  + ${key}: ${content2[key]}\n`;
  }, '');

  return `{\n${result}}`;
};

export default (pathToFile1, pathToFile2) => {
  const content1 = parse(fs.readFileSync(pathToFile1, 'utf-8'), path.extname(pathToFile1));
  const content2 = parse(fs.readFileSync(pathToFile2, 'utf-8'), path.extname(pathToFile1));

  return genDiff(content1, content2);
};
