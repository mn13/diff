import genDiff from '../src/genDiffLib';

const expected = '{\n    host: hexlet.io\n  + timeout: 20\n  - timeout: 50\n  - proxy: 123.234.53.22\n  + verbose: true\n}';
test('json', () => {
  const jsonDiff = genDiff(`${__dirname}/json/before.json`, `${__dirname}/json/after.json`);
  expect(jsonDiff).toEqual(expected);
});
test('yaml', () => {
  const yamlDiff = genDiff(`${__dirname}/yaml/before.yaml`, `${__dirname}/yaml/after.yaml`);
  expect(yamlDiff).toEqual(expected);
});
test('ini', () => {
  const iniDiff = genDiff(`${__dirname}/ini/before.ini`, `${__dirname}/ini/after.ini`);
  expect(iniDiff).toEqual(expected);
});
