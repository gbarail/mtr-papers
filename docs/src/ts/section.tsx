import Paper from './paper';
import { replacePaperPathPrefix } from './papers';
import { Section as SectionData } from './types/section';

export default function Section({ section }: { section: SectionData }) {
  const papers = Object.entries(section.papers);
  papers.sort(([, a], [, b]) => a.title.localeCompare(b.title));

  return (
    <section className="page-section">
      <h2>{section.section}</h2>
      <div>
        {papers.map(([link, paper]) => {
          link = replacePaperPathPrefix(link);
          return <Paper key={link} link={link} paper={paper} />;
        })}
      </div>
    </section>
  );
}