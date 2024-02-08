import { Paper } from './paper';

export type Section = {
  section: string;
  papers: Record<string, Paper>;
}