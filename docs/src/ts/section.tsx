import { Section as SectionData } from './types/section';

export default function Section({ section }: { section: SectionData }) {
  const papers = Object.entries(section.papers);
  papers.sort(([, a], [, b]) => a.title.localeCompare(b.title));

  return (
    <>
      <h2>{section.section}</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>DOI</th>
          </tr>
        </thead>
        <tbody>
          {papers.map(([key, paper]) => (
            <tr key={key}>
              <td>{paper.title}</td>
              <td>
                <ul>
                  {paper.authors.map(author => <li>{author}</li>)}
                </ul>
              </td>
              <td>
                {paper.doi ? <a href={paper.doi} target='_blank' rel='noopener' referrerPolicy='no-referrer'>{paper.doi}</a> : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}