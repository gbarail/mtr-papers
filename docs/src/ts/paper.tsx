import { type Paper as PaperType } from './types/paper';

export default function Paper({ link, paper }: {
  link: string,
  paper: PaperType,
}) {
  return (
    <section className="page-section__paper">
      <h3 className="paper__header">{paper.title}</h3>
      {paper.authors?.length > 0
        ? <p className="paper__details"><strong>Authors:</strong> {paper.authors.join(', ')}</p>
        : null}
      {paper.doi
        ? <p className="paper__details"><strong>DOI:</strong> <a href={paper.doi} target='_blank' rel='noopener noreferrer'>{paper.doi}</a></p>
        : null}
      {link
        ? <p className="paper__details"><strong><a href={link} target='_blank' rel='noopener noreferrer'>Download paper</a></strong></p>
        : null}
    </section>
  );
}