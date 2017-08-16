import fs from 'fs';
import _ from 'lodash';

export default (pathToFile1, pathToFile2) => {
  const json1 = JSON.parse(fs.readFileSync(pathToFile1));
  const json2 = JSON.parse(fs.readFileSync(pathToFile2));

  const intersecKeys = _.intersection(Object.keys(json1), Object.keys(json2));

  const noDiffIntersecKeys = intersecKeys.filter(key => json1[key] === json2[key]);
  const diffIntersecKeys = intersecKeys.filter(key => json1[key] !== json2[key]);

  const diffKeys1 = _.xor(Object.keys(json1), intersecKeys);
  const diffKeys2 = _.xor(Object.keys(json2), intersecKeys);

  const noDiff = noDiffIntersecKeys.reduce((acc, key) => `${acc}    ${key}: ${json1[key]}\n`, '');
  const diffIntersec = diffIntersecKeys.reduce((acc, key) => `${acc}  + ${key}: ${json2[key]}\n  - ${key}: ${json1[key]}\n`, '');
  const diff1 = diffKeys1.reduce((acc, key) => `${acc}  - ${key}: ${json1[key]}\n`, '');
  const diff2 = diffKeys2.reduce((acc, key) => `${acc}  + ${key}: ${json2[key]}\n`, '');

  const result = `{\n${noDiff}${diffIntersec}${diff1}${diff2}}`;
  return result;
};
