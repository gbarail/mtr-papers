import { parse } from 'yaml';

import { Section } from './types/section';
import { replacePathPrefix } from './utils/path';
import papersYAML from '../../../yaml/papers.yaml';

export const sections = parse(papersYAML) as Section[];

export function replacePaperPathPrefix(path: string) {
  return replacePathPrefix(path, '../papers', './papers');
}