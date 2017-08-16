import genDiff from '../src/genDiffLib';

test('test1', () => {
  const expected = '{\n    host: hexlet.io\n  + timeout: 20\n  - timeout: 50\n  - proxy: 123.234.53.22\n  + verbose: true\n}';
  const result = genDiff(`${__dirname}/before.json`, `${__dirname}/after.json`);
  expect(result).toEqual(expected);
});
