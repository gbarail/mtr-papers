import { parse } from 'yaml';

import { Section } from './types/section';
import papersYAML from '../../../yaml/papers.yaml';

export const sections = parse(papersYAML) as Section[];