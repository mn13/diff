import genDiff from '../src/lib';

test('test1', () => {
  const expected = '{\n    host: hexlet.io\n  + timeout: 20\n  - timeout: 50\n  - proxy: 123.234.53.22\n  + verbose: true\n}';
  const pathToFile1 = './after.json';
  const pathToFile2 = './befor.json';
  const result = genDiff(pathToFile1, pathToFile2);
  expect(result).toEqual(expected);
});
