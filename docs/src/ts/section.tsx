import Paper from './paper';
import { Section as SectionData } from './types/section';

export default function Section({ section }: { section: SectionData }) {
  const papers = Object.entries(section.papers);
  papers.sort(([, a], [, b]) => a.title.localeCompare(b.title));

  return (
    <section>
      <h2>{section.section}</h2>
      <div>
        {papers.map(([key, paper]) => <Paper key={key} paper={paper} />)}
      </div>
    </section>
  );
}