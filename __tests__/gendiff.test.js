import genDiff from '../src/lib';

test('test1', () => {
  const expected = '{\
    host: hexlet.io\
  + timeout: 20\
  - timeout: 50\
  - proxy: 123.234.53.22\
  + verbose: true\
}';
  const pathToFile1 = './after.json';
  const pathToFile2 = './befor.json';
  const result = genDiff(pathToFile1, pathToFile2);
  expect(result).toEqual(expected);
});
