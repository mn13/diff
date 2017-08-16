#!/usr/bin/env node
import commander from 'commander';
import genDiff from '../genDiffLib';
import pjson from '../../package.json';

commander
  .version(pjson.version)
  .description(pjson.description)
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => console.log(genDiff(firstConfig, secondConfig)))
  .parse(process.argv);
