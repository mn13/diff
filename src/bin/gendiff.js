#!/usr/bin/env node
import commander from 'commander';
import genDiff from '../lib';
import pjson from '../../package.json';

commander
  .version(pjson.version)
  .description(pjson.description)
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action(genDiff)
  .parse(process.argv);
