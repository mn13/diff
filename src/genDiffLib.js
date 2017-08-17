import _ from 'lodash';
import parse from './parse';

export default (pathToFile1, pathToFile2) => {
  const content1 = parse(pathToFile1);
  const content2 = parse(pathToFile2);

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
