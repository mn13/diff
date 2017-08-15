#!/usr/bin/env node
import commander from 'commander';
import genDiff from '../lib';

commander
  .version('0.1.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action(genDiff)
  .parse(process.argv);
