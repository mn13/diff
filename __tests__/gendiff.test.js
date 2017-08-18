import fs from 'fs';
import path from 'path';
import genDiff from '../src/genDiffLib';
import parse from '../src/parse';

const expected = '{\n    host: hexlet.io\n  + timeout: 20\n  - timeout: 50\n  - proxy: 123.234.53.22\n  + verbose: true\n}';
test('json', () => {
  const pathToFile1 = `${__dirname}/json/before.json`;
  const pathToFile2 = `${__dirname}/json/after.json`;
  const content1 = parse(fs.readFileSync(pathToFile1, 'utf-8'), path.extname(pathToFile1));
  const content2 = parse(fs.readFileSync(pathToFile2, 'utf-8'), path.extname(pathToFile2));
  const jsonDiff = genDiff(content1, content2);
  expect(jsonDiff).toEqual(expected);
});
test('yaml', () => {
  const pathToFile1 = `${__dirname}/yaml/before.yaml`;
  const pathToFile2 = `${__dirname}/yaml/after.yaml`;
  const content1 = parse(fs.readFileSync(pathToFile1, 'utf-8'), path.extname(pathToFile1));
  const content2 = parse(fs.readFileSync(pathToFile2, 'utf-8'), path.extname(pathToFile2));
  const yamlDiff = genDiff(content1, content2);
  expect(yamlDiff).toEqual(expected);
});
test('ini', () => {
  const pathToFile1 = `${__dirname}/ini/before.ini`;
  const pathToFile2 = `${__dirname}/ini/after.ini`;
  const content1 = parse(fs.readFileSync(pathToFile1, 'utf-8'), path.extname(pathToFile1));
  const content2 = parse(fs.readFileSync(pathToFile2, 'utf-8'), path.extname(pathToFile2));
  const iniDiff = genDiff(content1, content2);
  expect(iniDiff).toEqual(expected);
});
